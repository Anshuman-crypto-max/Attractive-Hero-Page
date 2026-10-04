# Scroll-Driven Hero Animation

## Overview
This project recreates an interactive hero section inspired by high-end automotive landing pages, focusing heavily on scroll-driven animation and smooth, premium UI interactions. It is built to serve as a high-performance frontend assignment demonstrating modern web animation techniques.

## Features
- **Scroll-driven hero animation**: Core visual elements react seamlessly to user scrolling.
- **GSAP ScrollTrigger**: Complex, hardware-accelerated scroll timelines.
- **Smooth intro animations**: Staggered text reveals and fades on initial page load.
- **Responsive design**: Flawless layout adaptation across desktop, tablet, and mobile.
- **Animated statistics**: Premium glassmorphic metric cards.
- **Premium UI**: Custom ambient lighting, noise textures, and clean typography.
- **Mobile support**: Tailored scroll interactions for smaller touch devices to prevent clipping.

## Tech Stack
- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **GSAP**
- **ScrollTrigger**

## Animation
The core experience relies on GSAP's `ScrollTrigger` and its `scrub` functionality. Instead of playing an animation automatically over time, `scrub: 1` binds the animation timeline directly to the user's scrollbar. As the user scrolls down, the main hero visual utilizes GPU-accelerated transforms (translating, scaling, and rotating) to move dynamically. On desktop breakpoints, the hero container is pinned to the viewport to create an immersive, full-screen interactive sequence.

## Getting Started

To run the development server locally:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production Build

To build and serve the optimized production version:

```bash
npm run build
npm start
```

## Live Demo
[Live Demo](https://chatgpt.com/c/YOUR_DEPLOYED_URL)

## GitHub
[GitHub Repository](https://github.com/Anshuman-crypto-max/Attractive-Hero-Page.git)
