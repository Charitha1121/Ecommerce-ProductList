import type { Product } from "../data/products";
import { ShoppingCartIcon, StarIcon } from "@heroicons/react/24/solid";
type Props = {
  product: Product;
};
function ProductCard({ product }: Props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: product.color || "#fff",
         width: "220px",
        height: "320px", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Product Image */}
      <div style={{ marginBottom: "10px" }}>
        <img
          src={product.imageUrl}
          alt={product.name}
         style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }}
        />
      </div>

      {/* HOT Badge */}
      {product.isHot && (
        <span
          style={{
            display: "inline-block",
            padding: "2px 6px",
            backgroundColor: "red",
            color: "white",
            fontSize: "12px",
            borderRadius: "4px",
            marginBottom: "5px",
          }}
        >
          HOT
        </span>
      )}

      {/* Product Name */}
      <h3 style={{ fontSize: "16px", margin: "5px 0" , whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{product.name}</h3>

      {/* Price */}
      <p>
        <span style={{ fontWeight: "bold", color: "green" }}>
          ₹{product.discountPrice}
        </span>{" "}
        <span style={{ textDecoration: "line-through", color: "gray" }}>
          ₹{product.price}
        </span>{" "}
        <span style={{ color: "red" }}>({product.discountPercent}% OFF)</span>
      </p>

      {/* Rating with Heroicons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "2px" }}>
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            style={{
              width: "16px",
              height: "16px",
              color: i < Math.floor(product.ratingValue) ? "gold" : "lightgray",
            }}
          />
        ))}
        <span style={{ fontSize: "12px", color: "gray", marginLeft: "4px" }}>
          ({product.ratingCount})
        </span>
      </div>

      {/* Cart Button with Heroicon */}
      <button
        style={{
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          backgroundColor: "#4f46e5",
          color: "white",
          padding: "6px 12px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
        }}
      >
        <ShoppingCartIcon style={{ width: "18px", height: "18px" }} />
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
