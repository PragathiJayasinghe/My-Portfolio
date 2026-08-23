<div align="center">

  # 🌐 Pragathi Jayasinghe — Modern Developer Portfolio

  <p align="center">
    A sleek, high-performance personal portfolio website built with <strong>React 19</strong>, <strong>Vite</strong>, and <strong>Tailwind CSS</strong>.
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Vite-8.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4.3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/EmailJS-Integrated-FF6B6B?style=for-the-badge&logo=mailgun&logoColor=white" alt="EmailJS" />
  </p>

</div>

---

## 🌟 Overview

This repository contains the source code for the personal portfolio of **Pragathi Jayasinghe** — an undergraduate software engineer specializing in frontend development, backend architecture, and modern web applications.

Designed with a dark glassmorphic aesthetic, custom animated SVG borders, floating particle physics, and smooth micro-interactions to create a memorable first impression.

---

## ✨ Key Features

- **🎨 Modern Dark & Glassmorphism UI**: Built with custom HSL/RGB palettes, dark surface depths, backdrop blurs, and vibrant teal accent glows.
- **⚡ Ultra-Fast Build & HMR**: Powered by Vite and React 19 for instantaneous hot-module reloading and optimized production bundles.
- **📱 Fully Responsive**: Pixel-perfect on all screen sizes (mobile, tablet, desktop) with a smooth slide-out navigation menu.
- **🧩 Categorized Technical Skills**: Showcases Frontend, Backend, and Tools & DevOps competencies with interactive badges (no arbitrary percentage bars).
- **🚀 Featured Projects Showcase**: Rich project cards displaying computer vision / robotics (SortMaster), full-stack apps, tags, and direct repository links.
- **📬 Functional Contact Form**: Fully integrated with **EmailJS** for instant client-side message delivery directly to your inbox without requiring a backend server.
- **✨ Custom SVG Animations**: Dynamic animated SVG border tracing button effects and smooth drift particle effects.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, JavaScript (ES6+), HTML5, CSS3 |
| **Styling & Design** | Tailwind CSS v4, Vanilla CSS Design Tokens, Glassmorphism |
| **Icons & Media** | Lucide React, Custom SVG Icons |
| **Email Service** | @emailjs/browser |
| **Build & Tooling** | Vite 8, ESLint, PostCSS |

---

## 📁 Project Structure

```text
My-Portfolio/
├── public/
│   ├── favicon.svg             # Website favicon
│   ├── hero-bg.jpg             # Background hero asset
│   ├── profile-photo.jpeg      # Profile image
│   └── projects/               # Project preview mockups & images
│       ├── Project1.jpg        # SortMaster project banner
│       ├── project2.svg
│       ├── project3.svg
│       └── project4.svg
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── AnimatedBorderButton.jsx # Interactive SVG border button
│   │   ├── Button.jsx          # Styled button component
│   │   └── Icons.jsx           # SVG Brand icons (GitHub, LinkedIn, Twitter)
│   ├── layout/                 # Page structure components
│   │   ├── Navbar.jsx          # Responsive sticky navigation bar
│   │   └── Footer.jsx          # Footer with social links & copyright
│   ├── sections/               # Portfolio sections
│   │   ├── Hero.jsx            # Dynamic Hero header with floating particles
│   │   ├── About.jsx           # Bio & core pillars
│   │   ├── Skills.jsx          # Categorized technical competencies
│   │   ├── Projects.jsx        # Project gallery & links
│   │   └── Contact.jsx         # EmailJS integrated contact form
│   ├── App.jsx                 # Main application assembly
│   ├── index.css               # Design system tokens & utility classes
│   └── main.jsx                # React root entry point
├── .env.example                # Example environment variables template
├── eslint.config.js            # Linting rules
├── index.html                  # HTML entry with Google Fonts
├── package.json                # Project dependencies and scripts
└── vite.config.js              # Vite configuration & path aliases
```

---

## 🚀 Getting Started

Follow these steps to run the portfolio locally on your machine:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) installed on your system.

### 2. Clone the Repository
```bash
git clone https://github.com/PragathiJayasinghe/My-Portfolio.git
cd My-Portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create a `.env.local` file in the root directory and add your [EmailJS](https://www.emailjs.com/) credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 5. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Available Scripts

- **`npm run dev`** — Starts the local Vite development server with Hot Module Replacement (HMR).
- **`npm run build`** — Compiles and minifies the code for production into the `dist/` directory.
- **`npm run preview`** — Locally previews the production build output.
- **`npm run lint`** — Runs ESLint to check for code quality and syntax errors.

---

## 📬 Contact & Connect

- **Name**: Pragathi Jayasinghe
- **Email**: [pragathijayasinghe@gmail.com](mailto:pragathijayasinghe@gmail.com)
- **LinkedIn**: [linkedin.com/in/pragathi-jayasinghe-821662302](https://www.linkedin.com/in/pragathi-jayasinghe-821662302)
- **GitHub**: [github.com/PragathiJayasinghe](https://github.com/PragathiJayasinghe)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
