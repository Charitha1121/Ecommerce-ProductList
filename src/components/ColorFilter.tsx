// src/components/ColorFilter.tsx
type Props = {
  colors: string[];
  selectedColor: string | null;
  onSelect: (color: string | null) => void;
};
function ColorFilter({ colors, selectedColor, onSelect }: Props) {
  return (
    <div style={{ margin: "20px 0" }}>
      <h3>Filter by Color</h3>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onSelect(color)}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: selectedColor === color ? "3px solid black" : "1px solid #ccc",
              backgroundColor: color,
              cursor: "pointer",
            }}
          />
        ))}
        {/* Reset button */}
        <button
          onClick={() => onSelect(null)}
          style={{
            padding: "5px 10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#f0f0f0",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default ColorFilter;
