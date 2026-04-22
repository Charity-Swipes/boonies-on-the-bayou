# Boonies on the Bayou 🍖🦐

Official website for **Boonies on the Bayou** — slow-smoked barbecue, fresh Gulf seafood, and Southern soul food on the waterfront in Bay St. Louis, Mississippi.

## 🌐 Live Site

Static single-page website with a Convex backend for reservation management.

## 🏗 Tech Stack

- **Frontend**: Vanilla HTML/CSS/JS — no build step required
- **Backend**: [Convex](https://convex.dev) — serverless backend for reservation handling
- **Fonts**: Google Fonts (Playfair Display, Inter, Bebas Neue)
- **Images**: Optimized WebP format

## 📁 Project Structure

```
├── index.html          # Main website (single-page, mobile-optimized)
├── images/             # Local food photography (WebP)
│   ├── ribs-hero.webp
│   ├── seafood-platter.webp
│   └── shrimp-grits.webp
├── convex/             # Convex backend functions
│   ├── schema.ts       # Database schema (reservations, contacts)
│   ├── reservations.ts # CRUD mutations/queries for reservations
│   └── http.ts         # HTTP endpoints for form submissions
├── package.json
└── README.md
```

## 🚀 Getting Started

### Frontend Only
Just open `index.html` in a browser — no build step needed.

### With Convex Backend

1. Install dependencies:
   ```bash
   npm install
   ```

2. Initialize Convex (first time):
   ```bash
   npx convex dev
   ```

3. Deploy to production:
   ```bash
   npx convex deploy
   ```

The Convex backend is deployed at: `https://doting-oyster-385.convex.site/`

## 📱 Mobile Optimization

- Responsive design with breakpoints at 900px, 700px, and 400px
- Animated hamburger menu with full-screen mobile overlay
- Touch-friendly tap targets (48px minimum)
- Sticky mobile CTA bar (Call + Reserve)
- Horizontal-scroll rating bar on mobile
- Optimized lightbox with touch/swipe support
- Safe area insets for notched devices

## 🍽 Features

- **Hero** with animated gradient background
- **Rating bar** with Google, Facebook, and Yelp scores
- **Full menu** with tabbed categories (Smoked Meats, Seafood, Pastas, Sides)
- **Photo gallery** with lightbox viewer
- **Customer reviews** from Google, Facebook, and Yelp
- **Location & hours** with embedded Google Map
- **Reservation form** connected to Convex backend
- **Scroll animations** via Intersection Observer

## 📍 Restaurant Info

- **Address**: 10408 MS-603, Bay St. Louis, MS 39520
- **Phone**: (228) 265-5527
- **Hours**: Wed–Sat 11AM–9PM, Sun 10AM–3PM (Brunch), Mon–Tue Closed
- **Facebook**: [Boonies on the Bayou](https://www.facebook.com/p/Boonies-on-the-Bayou-61573844542156/)

---

© 2026 Boonies on the Bayou
