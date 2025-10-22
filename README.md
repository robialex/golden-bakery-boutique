# Luxury Bakery Website

A premium, fully responsive bakery website built with React, TypeScript, and Tailwind CSS. Features elegant design, smooth animations, and a complete e-commerce experience (UI demo).

## ✨ Features

- 🎨 **Beautiful Design**: Warm luxury aesthetic with gold accents and cream gradients
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🛒 **Shopping Cart**: Client-side cart with localStorage persistence
- 🔍 **Menu Filtering**: Search and category-based product filtering
- ♿ **Accessible**: ARIA labels, keyboard navigation, semantic HTML
- 🎭 **Smooth Animations**: Framer Motion micro-interactions
- 🔐 **SEO Optimized**: Meta tags, Open Graph, sitemap
- 🌐 **Google Maps**: Embedded location map for Nicosia

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

## 📁 Project Structure

```
src/
├── assets/          # Images and static files
├── components/      # Reusable React components
│   ├── ui/         # Shadcn UI components
│   └── ...         # Custom components
├── data/           # JSON data files (menu.json)
├── pages/          # Page components
├── stores/         # Zustand state management
└── lib/            # Utility functions
```

## 🎨 Customization Guide

### Changing Colors

Edit `src/index.css` to modify the color palette:

```css
:root {
  --primary: 43 55% 49%;        /* Gold #C6A136 */
  --background: 47 100% 96%;    /* Cream #FFF9E7 */
  /* ... more colors in HSL format */
}
```

### Updating Menu Items

Edit `src/data/menu.json`:

```json
{
  "categories": ["All", "Cakes", "Pastries", "Macarons", "Desserts"],
  "products": [
    {
      "id": "1",
      "name": "Your Product",
      "category": "Cakes",
      "description": "Description here",
      "price": 45.00,
      "image": "https://your-image-url.com/image.jpg"
    }
  ]
}
```

### Replacing Hero Image

Replace `src/assets/hero-bakery.jpg` with your own image, or update the import in `src/components/Hero.tsx`

### Changing Fonts

Update `index.html` to include your preferred Google Fonts, then modify `tailwind.config.ts`:

```typescript
fontFamily: {
  display: ['Your Display Font', 'serif'],
  body: ['Your Body Font', 'sans-serif'],
}
```

### Contact Information

Update contact details in:
- `src/components/Footer.tsx`
- `src/pages/Contact.tsx`
- `src/components/MapEmbed.tsx` (Google Maps coordinates)

## 🏗️ Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

The build files will be in the `dist/` directory.

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Build project: `npm run build`
2. Drag & drop `dist/` folder to Netlify

### Other Hosts
Upload the contents of the `dist/` folder to any static hosting service.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Routing**: React Router v6
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Notifications**: Sonner

## 🎯 Key Pages

- `/` - Home with hero, intro, and featured products
- `/about` - Company story and values
- `/menu` - Full product catalog with filters
- `/cart` - Shopping cart and checkout
- `/contact` - Contact form and map
- `/reviews` - Customer testimonials
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## 🛠️ Adding Backend Functionality

Currently, this is a frontend-only demo. To add real backend features:

1. **Database & Auth**: Enable Lovable Cloud in project settings
2. **Payment Processing**: Integrate Stripe or similar
3. **Email Notifications**: Set up email service integration
4. **Order Management**: Create backend API for orders

## ⚠️ Current Limitations

- Cart is client-side only (no database)
- Checkout is simulated (no payment processing)
- Contact form shows success but doesn't send emails
- Newsletter signup is UI only

## 📝 License

This project was created with Lovable. Feel free to customize and use for your business.

## 🙋 Support

For questions or issues:
- Check [Lovable Documentation](https://docs.lovable.dev/)
- Join [Lovable Discord Community](https://discord.com/invite/lovable)

## 💡 Project Info

**Lovable Project URL**: https://lovable.dev/projects/718cc771-2afa-4282-b4df-d3ff3dae42f4

---

Built with ❤️ using [Lovable](https://lovable.dev)
