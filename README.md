# Neo Soft Assignment

A Next.js 13 assignment showcasing a **Product Listing Page** with **Tailwind CSS**, **dark/light theme toggle**, and reusable **ProductCard** components. The app fetches product data from a mock API route and displays them in a responsive grid.

---

## **Deployed Link**

https://neo-soft-assignment.vercel.app/

---

## **Features**

- Fully **responsive layout**:
  - 1 product per row on mobile
  - 2 products per row on tablet
  - 3 products per row on desktop
- **Dark/Light Mode** toggle with smooth transitions
- **Reusable ProductCard component** with:
  - Image
  - Title
  - Description
  - Price
  - "View More" button
- Mock API endpoint (`/api/products`) to fetch product data
- **SSR-compatible** Next.js App Router setup
- Tailwind CSS styling with hover and animation effects
- **Unit tests** with Vitest + React Testing Library

---

## **Tech Stack**

- **Next.js 13** (App Router, Client Components)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**
- **Vitest** + **React Testing Library** for testing

---

## **Installation**

1. Clone the repository:

```bash
git clone <https://github.com/Nitesh-Samaniya/neo-soft-assignment.git>
cd neo-soft-assignment

npm install
npm run dev

# Run all tests once
npm run test



neo-soft-assignment/
├─ app/
│  ├─ page.tsx          # Home page
│  └─ layout.tsx        # RootLayout with Navbar & ThemeProvider
├─ components/
│  ├─ Navbar.tsx
│  ├─ ProductCard.tsx
│  └─ ThemeProvider.tsx
├─ data/
│  └─ products.ts       # Mock product data
├─ types/
│  └─ product.ts        # Product type definitions
├─ public/images/       # Static product images
├─ __tests__/           # Vitest test files
├─ globals.css          # Tailwind global styles
└─ package.json


```
<img width="3024" height="1964" alt="image" src="https://github.com/user-attachments/assets/79c70df7-359f-433a-aae9-9518d1fff198" />
<img width="1981" height="444" alt="image" src="https://github.com/user-attachments/assets/e5626470-e2c6-4f96-88cf-27aa0b75f330" />

