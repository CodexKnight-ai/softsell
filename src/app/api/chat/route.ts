import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are a professional customer support assistant for SoftSell, a platform that helps businesses recover costs on unused software by reselling licenses securely, fast, and compliantly.

Key information about SoftSell:
- SoftSell helps businesses sell unused software licenses
- The process is: Upload License → Get Valuation → Get Paid
- We support 100+ software vendors
- We have a 98% payout success rate
- We've resold over $25M in license value
- We ensure all transactions are secure and compliant with licensing terms
- We handle the verification and transfer process

Only answer questions related to SoftSell, its services, processes, benefits, or security.
If a user asks anything unrelated to SoftSell, politely respond with: "I'm here to assist only with SoftSell-related queries."

Be helpful, professional, and concise in your responses.`;

export async function POST(req: NextRequest) {
  try {
    console.log('Environment variables:', {
      NODE_ENV: process.env.NODE_ENV,
      GEMINI_API_KEY_EXISTS: !!process.env.GEMINI_API_KEY,
      GEMINI_API_KEY_LENGTH: process.env.GEMINI_API_KEY?.length,
      GEMINI_API_KEY_PREFIX: process.env.GEMINI_API_KEY?.substring(0, 5)
    });

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    const formattedMessages = messages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    formattedMessages.unshift({
      role: 'model',
      parts: [{ text: SYSTEM_PROMPT }]
    });
    console.log('Using API key starting with:', process.env.GEMINI_API_KEY?.substring(0, 5) + '...');
    const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyC_NNsQioQytGHlA988hrt5QDdHtSpTBms';
    console.log('Using API key:', apiKey);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: formattedMessages,
          generationConfig: {
            temperature: 0.7,
            topP: 0.8,
            topK: 40,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    // Check if the response is ok
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API error:', errorData);

      // Include more detailed error information
      return NextResponse.json(
        {
          error: 'Failed to get response from Gemini API',
          details: errorData.error?.message || 'Unknown error',
          code: errorData.error?.code || response.status
        },
        { status: response.status }
      );
    }

    const data = response.body;
    if (!data) {
      return NextResponse.json(
        { error: 'No data returned from Gemini API' },
        { status: 500 }
      );
    }
    try {
      return new Response(data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (responseError) {
      console.error('Error creating response:', responseError);

      // Fallback response with hardcoded answer
      const fallbackResponse = {
        candidates: [
          {
            content: {
              parts: [
                {
                  text: "I'm here to help with questions about SoftSell. Our platform helps businesses recover costs on unused software by reselling licenses securely and compliantly. How can I assist you today?"
                }
              ],
              role: "model"
            }
          }
        ]
      };

      return NextResponse.json(fallbackResponse);
    }
  } catch (error) {
    console.error('Error in chat API route:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    return NextResponse.json(
      {
        error: 'Internal server error',
        details: errorMessage,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
