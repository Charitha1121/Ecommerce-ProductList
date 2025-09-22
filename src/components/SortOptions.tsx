type Props = {
  sortValue: string;
  onChange: (value: string) => void;
};

function SortOptions({ sortValue, onChange }: Props) {
  return (
    <div style={{ margin: "20px 0" }}>
      <label htmlFor="sort">Sort By: </label>
      <select
        id="sort"
        value={sortValue}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: "5px", marginLeft: "10px" }}
      >
        <option value="name-asc">Name (A → Z)</option>
        <option value="name-desc">Name (Z → A)</option>
        <option value="price-asc">Price (Low → High)</option>
        <option value="price-desc">Price (High → Low)</option>
        <option value="rating-desc">Rating (High → Low)</option>
        <option value="rating-asc">Rating (Low → High)</option>
      </select>
    </div>
  );
}

export default SortOptions;
