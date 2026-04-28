<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:6725f4,100:b824f5&height=200&section=header&text=ToolHaven&fontSize=80&fontColor=ffffff&fontAlignY=38&desc=Premium%20Digital%20Tools%20Marketplace&descAlignY=60&descSize=20&descColor=e9d5ff&animation=fadeIn" />

<br/>

[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)

[![GitHub Stars](https://img.shields.io/github/stars/arafathelal/ToolHaven?style=flat-square&color=6725f4)](https://github.com/arafathelal/ToolHaven/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/arafathelal/ToolHaven?style=flat-square&color=b824f5)](https://github.com/arafathelal/ToolHaven/network/members)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-6725f4?style=flat-square&logo=vercel)](https://tool-haven-bd.vercel.app)

<br/>

> **ToolHaven** is a modern digital tools marketplace where users can browse, add to cart, and purchase premium career and productivity tools — from resume builders to AI-powered career assistants — all in one clean, responsive interface.

<br/>

🔗 **[Live Demo →](https://tool-haven-bd.vercel.app)**

</div>

---

<!-- ## 🖼️ Preview

<div align="center">

![ToolHaven Banner](public/banner.png)

</div>

---  -->

## ✨ Features

### 🛒 Add to Cart with Duplicate Guard & Toast Feedback
Each product card has an **Add to Cart** button that adds the item to the global cart state. If the same item is added twice, the app blocks it and fires an error toast — `"Item already in cart!"`. On success, the button switches to a disabled **"Added"** state and a success toast appears. All interactions use `react-toastify` for instant, non-blocking feedback.

### 🔀 Live Tab Toggle with Real-Time Cart Count
The app uses a pill-style tab switcher between **Products** and **Cart** views, managed via React `useState`. The Cart tab label dynamically updates to show the current number of items (e.g., `Cart (3)`) in real time as the user adds products — no page reload, no routing required.

### 🧾 Cart Management with Total Calculation & Checkout
Inside the Cart view, users can **remove individual items** (with a toast confirmation) or **proceed to checkout**, which clears the entire cart and fires a `"Payment successful!"` toast. The total price is computed live using `Array.reduce()` across all cart items and displayed before checkout.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|:---|:---|
| **React 19** | UI framework with `use()` hook for async data fetching |
| **Vite 8** | Lightning-fast dev server and build tool |
| **Tailwind CSS v4** | Utility-first styling via `@tailwindcss/vite` plugin |
| **DaisyUI v5** | Navbar and UI component primitives |
| **Lucide React** | Icon library (`Play`, `CircleDot`) |
| **React Toastify** | Non-blocking toast notifications for cart actions |

---

## 📁 Project Structure

```
ToolHaven/
├── public/
│   ├── products.json        # Product data (10 digital tools)
│   ├── banner.png           # Hero section image
│   └── *.png                # Icons used in Steps section
├── src/
│   ├── component/
│   │   ├── NavBar.jsx       # Top navigation bar
│   │   ├── Banner.jsx       # Hero section with CTA buttons
│   │   ├── Stats.jsx        # 50K+ users · 200+ tools · 4.9 rating
│   │   ├── Products.jsx     # Product grid (async fetch via use())
│   │   ├── ProductCards.jsx # Product card with add-to-cart logic
│   │   ├── Cart.jsx         # Cart view, total calc & checkout
│   │   ├── Steps.jsx        # "Get Started in 3 Steps" section
│   │   ├── Pricing.jsx      # 3-tier pricing cards
│   │   ├── CTA.jsx          # Call-to-action banner
│   │   └── Footer.jsx       # Footer with links & social icons
│   ├── App.jsx              # Root — tab state, cart state, layout
│   ├── main.jsx             # React DOM entry point
│   └── index.css            # Global styles
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/arafathelal/ToolHaven.git

# 2. Move into the directory
cd ToolHaven

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Visit **`http://localhost:5173`** in your browser.

### Available Scripts

```bash
npm run dev      # Start dev server (Vite)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 🧩 Product Catalog

Products are loaded from `public/products.json` and rendered dynamically. The catalog currently includes **10 digital career tools**:

| # | Product | Price | Period |
|---|---------|-------|--------|
| 1 | Starter Resume Tool | $0 | one-time |
| 2 | Pro Resume Builder | $9.99 | monthly |
| 3 | Career Toolkit | $19.99 | monthly |
| 4 | Executive Career Suite | $49.99 | yearly |
| 5 | Student Resume Tool | $4.99 | monthly |
| 6 | Freelancer Portfolio Builder | $14.99 | monthly |
| 7 | Lifetime Resume Pro | $29.99 | one-time |
| 8 | Interview Prep Platform | $12.99 | monthly |
| 9 | Job Tracker Dashboard | $24.99 | monthly |
| 10 | AI Career Assistant | $59.99 | yearly |

---

<!-- ## 🤝 Contributing

Contributions are welcome!

1. Fork the project
2. Create your branch: `git checkout -b feature/YourFeature`
3. Commit: `git commit -m 'Add YourFeature'`
4. Push: `git push origin feature/YourFeature`
5. Open a Pull Request

---  -->

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

<div align="center">

**Built with 💜 by [Arafat Helal](https://github.com/arafathelal)**

<br/>

*Found it useful? Drop a ⭐ — it really helps!*

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:6725f4,100:b824f5&height=100&section=footer&animation=fadeIn" />

</div>
