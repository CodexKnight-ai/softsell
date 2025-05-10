# 🚀 SoftSell

A modern, responsive marketing website for a software license resale platform that helps businesses recover costs on unused software.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Design Decisions](#design-decisions)
- [Setup Instructions](#setup-instructions)
- [Bonus Features](#bonus-features)
- [Screenshots](#screenshots)
- [Time Spent](#time-spent)
- [License](#license)

## 🔍 Project Overview

SoftSell is a fictional software resale startup that helps businesses quickly sell their unused licenses for top dollar — safely, easily, and instantly. This single-page marketing website was created as part of a web development internship assignment to showcase modern web development practices and techniques.

The website features a clean, professional design with smooth animations, responsive layout, and a dark/light mode toggle. It includes all essential sections for a marketing site: hero, features, how it works, testimonials, and a contact form.

## ✨ Features

- **Hero Section**: Eye-catching headline, subheading, and CTA button with animated elements
- **How It Works**: 3-step process illustration with animated icons and descriptions
- **Why Choose Us**: 4 key feature highlights with interactive cards, hover effects, and an impressive 3D Spline component for visual appeal
- **Testimonials**: Customer reviews with profile images and ratings
- **Contact Form**: Validated form with fields for name, email, company, license type, and message
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Performance Optimized**: Fast loading times with optimized assets and code splitting
- **Accessibility**: Semantic HTML, proper contrast ratios, and keyboard navigation
- **AI Chat Widget**: Interactive chatbot powered by AI to answer customer questions

## 🌐 Live Demo

- **Live Site**: [SoftSell Demo](https://softsell-sj.vercel.app/)
- **GitHub Repository**: [github.com/CodexKnight-ai/softsell](https://github.com/CodexKnight-ai/softsell)

## 💻 Tech Stack

- **Framework**: [Next.js 15.3.2](https://nextjs.org/) (React 19)
- **Styling**: [Tailwind CSS 4.1.6](https://tailwindcss.com/) for utility-first styling
- **Animations**: [Framer Motion 12.10.4](https://www.framer.com/motion/) for smooth animations
- **3D Elements**: [@splinetool/react-spline](https://spline.design/) for interactive 3D elements in the Why Choose Us section
- **Icons**: Custom SVG icons and components
- **Form Handling**: Client-side validation with React hooks
- **AI Integration**: Custom chatbot using **Gemini**AI API
- **Deployment**: [Vercel](https://vercel.com/) for hosting.

## 🎨 Design Decisions

### Color Palette
- **Primary**: Blue (#3b82f6) - Conveys trust and professionalism
- **Secondary**: Indigo/Purple accents - Adds depth and visual interest
- **Light Mode**: Clean white background with subtle gray gradients
- **Dark Mode**: Deep gray/black backgrounds with blue accents

### Typography
- **Primary Font**: Geist Sans - Modern, clean, and highly readable
- **Monospace**: Geist Mono - Used for code snippets and technical details
- **Hierarchy**: Clear heading structure with varying font weights and sizes

### Layout
- **Navbar**: Fixed navigation with logo, links, and theme toggle
- **Sections**: Clear separation between content sections with consistent spacing
- **Cards**: Elevated design with subtle shadows and hover effects
- **Footer**: Comprehensive footer with sitemap, contact info, and social links

### UI Elements
- **Buttons**: Rounded, high-contrast buttons with hover animations
- **Forms**: Clean, accessible form inputs with validation feedback
- **Icons**: Custom SVG icons with consistent style and animations
- **Animations**: Subtle entrance animations and interactive hover effects

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18.18.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/softsell.git
cd softsell
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## 🌟 Bonus Features

### Dark/Light Mode
- Implemented using CSS variables and React context
- Persists user preference in localStorage
- Smooth transitions between modes
- Respects user's system preference by default

### SEO Optimization
- Semantic HTML structure
- Proper meta tags and descriptions
- Optimized images with alt text
- Structured data for rich snippets

### AI-Powered Chat Widget
- Interactive chatbot to answer customer questions
- Custom UI with avatar selection
- Animated typing indicators
- Pre-populated FAQ suggestions

### Animations and Interactions
- Scroll-triggered animations using Framer Motion
- Interactive 3D elements using Spline
- Micro-interactions on hover and focus states
- Custom cursor effects in feature sections

### 3D Spline Component in Why Choose Us
- Interactive 3D visualization created with Spline
- Performance-optimized with fallback for mobile devices
- Visually represents the software license marketplace concept
- Adds a modern, tech-forward aesthetic to the section
- Responsive design that adapts to different screen sizes

## 📸 Screenshots

### 🖥️ Desktop View
![SoftSell Homepage - Desktop](https://raw.githubusercontent.com/CodexKnight-ai/softsell/main/public/desktop.png)
*Homepage with hero section and animated elements*

### 📱 Mobile View
![SoftSell Mobile Navigation](https://raw.githubusercontent.com/CodexKnight-ai/softsell/main/public/phone.png)
*Responsive mobile navigation and layout*

### ☀️ Light Mode
![SoftSell Light Mode](https://raw.githubusercontent.com/CodexKnight-ai/softsell/main/public/lightmode.png)
*Light mode theme*

### 🧊 3D Spline Component
![SoftSell 3D Spline Mockup](https://raw.githubusercontent.com/CodexKnight-ai/softsell/main/public/mockup.png)
*3D Spline component in action*

## ⏱️ Time Spent

| Task | Hours |
|------|-------|
| Design & Wireframing | 2 |
| Setting up Next.js & Tailwind | 1 |
| Hero Section | 1.5 |
| How It Works Section | 1 |
| Why Choose Us Section (including Spline 3D) | 2 |
| Testimonials Section | 1 |
| Contact Form | 1 |
| Dark/Light Mode | 2 |
| AI Chat Widget | 2 |
| Responsive Design | 2 |
| Testing & Bug Fixes | 1 |
| Documentation | 1 |
| **Total** | **18** |

## 📄 License

This project is created as part of an internship assignment and is for demonstration purposes only. 

---

Created by Subrat Jain
