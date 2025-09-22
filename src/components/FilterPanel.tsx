type Props = {
  categories: string[];
  selectedCategory:string | null;
  onCategorySelect: (c: string | null) => void;
  colors: string[];
  selectedColor: string | null;
  onColorSelect: (c: string | null) => void;
};
export default function FilterPanel({
  categories,
  selectedCategory,
  onCategorySelect,
  colors,
  selectedColor,
  onColorSelect,
}: Props) {
  return (
    <div style={{ padding: "16px" }}>
      {/* Categories */}
<div style={{ marginBottom: "24px" }}>
  <h3 style={{ fontWeight: 600, marginBottom: "8px" }}>Categories</h3>
  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
    {categories.map((cat) => (
      <div
        key={cat}
        onClick={() => onCategorySelect(selectedCategory === cat ? null : cat)}
        style={{
          padding: "4px 12px", 
          borderRadius: "20px", 
          cursor: "pointer",
          backgroundColor: selectedCategory === cat ? "#4f46e5" : "#f3f4f6",
          color: selectedCategory === cat ? "#fff" : "#111827",
          fontWeight: selectedCategory === cat ? 600 : 500,
          fontSize: "14px",
          whiteSpace: "nowrap",
        }}
      >
      {cat}
      </div>
    ))}
  </div>
</div>
<div>
  <h3 style={{ fontWeight: 600, marginBottom: "8px" }}>Colors</h3>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(6, 28px)", 
      gap: "8px",
      maxHeight: "68px",
    }}
  >
    {colors.slice(0, 12).map((color) => ( 
      <div
        key={color}
        onClick={() => onColorSelect(selectedColor === color ? null : color)}
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          backgroundColor: color,
          border:
            selectedColor === color ? "2px solid #4f46e5" : "1px solid #d1d5db",
          cursor: "pointer",
        }}
        title={color}
      ></div>
    ))}
  </div>
</div>
</div>
  );
}
