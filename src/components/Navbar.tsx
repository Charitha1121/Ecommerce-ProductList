import React from "react";
type Props = {
  categories: string[];
  selectedCategory: string | null;
  onSelect: (c: string) => void;
};
export default function Navbar({ categories, selectedCategory, onSelect }: Props) {
  return (
    <nav
      style={{
        width: "100%",
        backgroundColor: "#1f2937", 
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 24px",
        boxSizing: "border-box",
      }}
    >
<div style={{ fontWeight: 700, fontSize: "20px" }}>My Shop</div>
      <div style={{ display: "flex", gap: "12px", overflowX: "auto" }}>
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => onSelect(cat)}
            style={{
              padding: "8px 16px",
              cursor: "pointer",
              borderRadius: "24px",
              backgroundColor: selectedCategory === cat ? "#4f46e5" : "#f3f4f6",
              color: selectedCategory === cat ? "#fff" : "#111827",
              fontWeight: selectedCategory === cat ? 600 : 500,
              whiteSpace: "nowrap",
            }}
          >
            {cat}
          </div>
        ))}
      </div>
<div style={{ fontSize: "22px", cursor: "pointer" }}>🛒</div>
    </nav>
  );
}
