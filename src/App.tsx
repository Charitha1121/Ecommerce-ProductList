import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import ProductCard from "./components/ProductCard";
import SortOptions from "./components/SortOptions";
import { products as allProducts, type Product } from "./data/products";
import { readQuery, setQuery } from "./components/utils/url";
import HeroSlider from "./components/HeroSlider";
import "./App.css";
export default function App() {
  const q = readQuery();
  const [category, setCategory] = useState<string | null>(q.category ?? null);
  const [color, setColor] = useState<string | null>(q.color ?? null);
  const [sortValue, setSortValue] = useState<string>(q.sort ?? "name-asc");
  const [page, setPage] = useState<number>(q.page ? Number(q.page) : 1);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const itemsPerPage = 6;
  const [brand, setBrand] = useState<string | null>(null);
  useEffect(() => {
    setQuery({
      category: category ?? undefined,
      color: color ?? undefined,
      sort: sortValue,
      page,
    });
  }, [category, color, sortValue, page]);
  const filtered = useMemo(() => {
    let items = allProducts.slice();
    if (category) items = items.filter((p) => p.category === category);
    if (color) items = items.filter((p) => p.colors.includes(color)).map((p) => ({ ...p, color }));
    if (brand) items = items.filter((p) => p.name.startsWith(brand));
    if (priceRange[1] < 2000)
      items = items.filter((p) => p.discountPrice >= priceRange[0] && p.discountPrice <= priceRange[1]);
    return items;
  }, [category, color, brand, priceRange]);
  const sorted = useMemo(() => {
    const arr = filtered.slice();
    if (sortValue === "name-asc") 
      arr.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortValue === "price-asc")
      arr.sort((a, b) => a.discountPrice - b.discountPrice);
    else if 
    (sortValue === "price-desc") arr.sort((a, b) => b.discountPrice - a.discountPrice);
    return arr;
  }, [filtered, sortValue]);
  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);
  const pageItems = sorted.slice((page - 1) * itemsPerPage, (page - 1) * itemsPerPage + itemsPerPage);
  const categories = useMemo(() => Array.from(new Set(allProducts.map((p) => p.category))), []);
  const allColors = useMemo(() => Array.from(new Set(allProducts.flatMap((p) => p.colors))), []);
  const brands = useMemo(() => {
    if (!category) return [];
    return Array.from(new Set(allProducts.filter((p) => p.category === category).map((p) => p.name.split(" ")[0])));
  }, [category]);
  function resetFilters() {
    setCategory(null);
    setColor(null);
    setBrand(null);
    setPriceRange([0, 2000]);
    setPage(1);
  }
  return (
    <div style={{ backgroundColor: "#f9fafb" }}>
      <Navbar
        categories={categories}
        selectedCategory={category}
        onSelect={(c) => {
          setCategory(category === c ? null : c);
          setPage(1);
        }}
      />
      <div className="container">
        <aside className="sidebar desktop-only">
          <div className="filter-section">
            <h3>Price</h3>
            <div>
              <div>Max Price: ₹{priceRange[1]}</div>
              <input
                type="range"
                min={0}
                max={2000}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
              />
            </div>
          </div>
          <div className="filter-section">
            <h3>Colors</h3>
            <div className="colors-grid">
              {allColors.slice(0, 12).map((c) => (
                <div
                  key={c}
                  onClick={() => setColor(color === c ? null : c)}
                  style={{
                    backgroundColor: c,
                    border: color === c ? "2px solid #4f46e5" : "1px solid #d1d5db",
                  }}
                  className="color-dot"
                  title={c}
                />
              ))}
            </div>
          </div>
          <div className="filter-section">
            <h3>Brands</h3>
            <div className="brands-list">
              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => setBrand(brand === b ? null : b)}
                  className={brand === b ? "selected" : ""}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
          <button className="clear-btn" onClick={resetFilters}>
            Clear All
          </button>
        </aside>
        <main className="main-content">
          <HeroSlider />
          <div className="mobile-filters mobile-only">
            <div className="filter-section">
              <h3>Price</h3>
              <div>
                <div>Max Price: ₹{priceRange[1]}</div>
                <input
                  type="range"
                  min={0}
                  max={2000}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                />
              </div>
            </div>
            <div className="filter-section">
              <h3>Colors</h3>
              <div className="colors-grid">
                {allColors.slice(0, 12).map((c) => (
                  <div
                    key={c}
                    onClick={() => setColor(color === c ? null : c)}
                    style={{
                      backgroundColor: c,
                      border: color === c ? "2px solid #4f46e5" : "1px solid #d1d5db",
                    }}
                    className="color-dot"
                    title={c}
                  />
                ))}
              </div>
            </div>
            <div className="filter-section">
              <h3>Brands</h3>
              <div className="brands-list">
                {brands.map((b) => (
                  <button
                    key={b}
                    onClick={() => setBrand(brand === b ? null : b)}
                    className={brand === b ? "selected" : ""}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
            <button className="clear-btn" onClick={resetFilters}>
              Clear All
            </button>
          </div>
          <div className="top-bar">
            <div>{sorted.length} results</div>
            <SortOptions sortValue={sortValue} onChange={(v) => setSortValue(v)} />
          </div>
          <div className="products-grid">
            {pageItems.map((p: Product) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </main>
      </div>
      <Footer />
      <style>{`
        .container {
          display: flex;
          gap: 20px;
          padding: 20px;
        }
        .sidebar {
          flex: 0 0 25%;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .colors-grid {
          display: grid;
          grid-template-columns: repeat(6, 28px);
          gap: 8px;
        }
        .color-dot {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          cursor: pointer;
        }
        .brands-list button {
          padding: 4px 12px;
          border-radius: 20px;
          border: 1px solid #ddd;
          background: #f3f4f6;
          cursor: pointer;
          text-align: left;
          margin-bottom: 4px;
        }
        .brands-list button.selected {
          border: 2px solid #4f46e5;
          background: #e0e7ff;
        }
        .clear-btn {
          padding: 8px 12px;
          border-radius: 6px;
          border: 1px solid #ddd;
          background: #fff;
          cursor: pointer;
          font-weight: 600;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .container { flex-direction: column; }
          .desktop-only { display: none; } /* hide sidebar */
          .mobile-only { display: flex; flex-direction: column; gap: 20px; margin-bottom: 20px; }
          .products-grid { grid-template-columns: 1fr; }
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .products-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* Desktop */
        @media (min-width: 769px) {
          .mobile-only { display: none; }
        }
      `}</style>
    </div>
  );
}
