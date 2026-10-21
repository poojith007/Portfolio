# Poojith S Menon — Portfolio Website

Portfolio Link: poojith-s-menon.vercel.app

A personal portfolio website for **Poojith S Menon**, Full-Stack Developer and C++ & Embedded Systems Enthusiast.

## Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS (Modern Dark Tech palette with layered charcoal surfaces and Electric Blue accents)
- **Icons**: Lucide React
- **Typography**: Inter & JetBrains Mono

## Project Structure
```
portfolio/
├── public/
│   ├── Poojith_S_Menon_Resume.pdf    # Authentic resume asset
│   └── favicon.svg                   # Monogram favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                # Sticky glassmorphic header with mobile drawer
│   │   ├── Hero.jsx                  # Hero section with technical topology schematic
│   │   ├── About.jsx                 # Concise positioning & education
│   │   ├── Skills.jsx                # 4 focused technical skill categories
│   │   ├── Projects.jsx              # Featured case study project cards
│   │   ├── ProjectModal.jsx          # Interactive case study dialog
│   │   ├── Education.jsx             # Clean academic timeline card
│   │   ├── Contact.jsx               # Functional contact form and channels
│   │   └── Footer.jsx                # Minimal technical footer
│   ├── data/
│   │   └── portfolioData.js          # Central structured data source
│   ├── styles/
│   │   └── index.css                 # Custom theme, scrollbar & utilities
│   ├── App.jsx                       # Application shell
│   └── main.jsx                      # App entry point
├── dist/                             # Production build directory
├── index.html                        # SEO metadata, Open Graph, and fonts
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Getting Started

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Deployment Options
- **Vercel**: Run `vercel` or link repository. Output directory is `dist`.
- **Netlify**: Set build command `npm run build` and publish directory `dist`.
- **GitHub Pages**: Build output in `dist` can be published via `gh-pages` or GitHub Actions.
