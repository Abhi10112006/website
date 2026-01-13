# Abhi's Ledger - Next.js Landing Page

A world-class, immersive landing page built with **Next.js 14**, **React Three Fiber**, and **Tailwind CSS**.

## ✨ Features

- 🎮 **3D WebGL Background** - Animated particle field and glowing orbs using React Three Fiber.
- 📱 **Mobile WebGL Optimization** - Automatic GPU tier detection (800 particles on mobile vs 3,000 on desktop).
- 💎 **Premium "Glass" UI** - High-end glassmorphism with dynamic borders, ambient glows, and noise textures.
- 🎞️ **Cinematic Animations** - Scroll-triggered reveals, parallax effects, and magnetic button interactions using Framer Motion.
- ⚡ **Performance First** - 60fps animations, optimized assets, and efficient rendering strategies.
- 📬 **Direct Support** - Integrated contact section with "10-hour guarantee" copy and smooth scrolling.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or higher
- npm or yarn

### Installation

```bash
# Navigate to the website directory
cd website-nextjs

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
website-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main landing page composition
│   └── globals.css         # Global styles + Tailwind + Custom Animations
├── components/
│   ├── three/              # 3D R3F Components
│   │   ├── Scene.tsx       # Main WebGL Canvas
│   │   ├── ParticleField.tsx
│   │   └── GlowingOrbs.tsx
│   ├── ui/                 # UI Components
│   │   ├── Navbar.tsx      # Responsive glass navbar
│   │   ├── Hero.tsx        # Typewriter & magnetic interactions
│   │   ├── BentoGrid.tsx   # Feature grid with scroll reveals
│   │   ├── SponsorSection.tsx # Weighted lottery visualizer
│   │   ├── ContactSection.tsx # Creative support section
│   │   └── Footer.tsx
│   └── effects/
│       └── ScrollProgress.tsx
├── hooks/
│   ├── useDeviceCapabilities.ts  # WebGL optimization logic
│   └── useMagnetic.ts            # (Inline in Hero) Mouse interaction
└── public/
    └── logo.jpg
```

## 🎮 WebGL Quality Scaling

| Feature | Desktop (High Tier) | Mobile / Low Tier |
|---------|---------------------|-------------------|
| Particle count | 3,000 | 800 |
| Device pixel ratio | 2.0 | 1.5 |
| Post-processing | Bloom + Noise | Disabled |
| Antialiasing | Enabled | Disabled |

## 🚢 Deployment

Ready for **Vercel**:
1. Push `website-nextjs` folder to GitHub.
2. Import project in Vercel.
3. Deploy.

## 📄 License

© 2026 Abhinav Yaduvanshi. All rights reserved.
