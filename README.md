# Product-Listing-Page
#  E-Commerce Product Listing (React + TypeScript )

This project is a **pixel-accurate recreation** of a product listing page from a Figma design.  
It features reusable components, filters, sorting, pagination, and full responsiveness across devices.

---

##  Features

- **Reusable Components**: Navbar, Sidebar, ProductCard, Rating, Pagination, Footer.  
- **Sidebar Filters**: Expand/collapse categories & colors, with a responsive drawer on mobile.  
- **Product Grid**: Uniform product cards with image, HOT badge, price, discount, and rating.  
- **Sorting & Pagination**: Sort by name, price, or popularity with 6 products per page.  
- **Color Filter**: Select colors to visually update product cards.  
- **Responsive Design**: Desktop, tablet, and mobile support.  
- **Mock Data**: 24+ products with fields like `id, name, price, discountPrice, discountPercent, ratingValue, ratingCount, isHot, colors, category, imageUrl`.

---
##  Project Structure

src/
 ├─ components/
 │   ├─ Navbar.tsx
 │   ├─ Sidebar.tsx
 │   ├─ ProductCard.tsx
 │   ├─ Rating.tsx
 │   ├─ Pagination.tsx
 │   └─ Footer.tsx
 ├─ data/
 │   └─ products.ts
 ├─ App.tsx
 ├─ main.tsx
 └─ index.css


---

##  Tech Stack

- React + TypeScript  
- CSS (styling)  
- Lucide React (icons)  
- Vite (build & dev server)  

---

## Getting Started

1. **Clone Repo**
   ```bash
   git clone https://github.com/your-username/Ecommerce-ProductList.git
   cd Ecommerce-ProductList

