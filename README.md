# PowerTech Digital - Next.js Website

A modern, responsive website built with Next.js 14, TypeScript, Tailwind CSS, and Shadcn UI.

## Features

- **Modern Tech Stack**: Built with Next.js 14 App Router, TypeScript, and Tailwind CSS
- **Shadcn UI Components**: Beautiful, accessible UI components
- **Framer Motion Animations**: Smooth, engaging animations throughout
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags and semantic HTML

## Pages

- **Home** (`/`) - Hero section, services overview, featured products
- **About Us** (`/about`) - Company mission, vision, values, and leadership
- **Power Platform Solutions** (`/power-platform-solutions`) - Microsoft Power Platform services
- **Custom Solutions** (`/custom-solutions`) - AI/ML and custom development services
- **Our Products** (`/products`) - talent.voxle, furnishly.app, stagently.com
- **Contact** (`/contact`) - Contact information and inquiry forms

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
powertech-new/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── power-platform-solutions/ # Power Platform page
│   ├── custom-solutions/    # Custom Solutions page
│   ├── products/            # Products page
│   ├── contact/             # Contact page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── ui/                  # Shadcn UI components
│   ├── header.tsx           # Navigation header
│   └── footer.tsx           # Footer
├── lib/                     # Utility functions
│   └── utils.ts             # Helper functions
├── public/                  # Static assets
│   └── assets/              # Images and icons
│       ├── images/          # General images
│       └── icons/           # Power Platform icons
└── download-assets.js       # Asset download script

## Assets

All assets from the original powertech.digital website have been downloaded and stored in `public/assets/`.

To re-download assets:
```bash
node download-assets.js
```

## Key Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn UI**: Re-usable component library
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## Design System

### Colors
- Primary: Blue (`hsl(221.2 83.2% 53.3%)`)
- Secondary: Light blue/gray
- Accents: Purple gradients

### Components
- Buttons: Multiple variants (default, outline, secondary)
- Cards: With hover effects and shadows
- Animations: Fade-in, slide-in effects on scroll

## Deployment

This site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Next.js

## License

Copyright © 2024 PowerTech Digital. All rights reserved.
