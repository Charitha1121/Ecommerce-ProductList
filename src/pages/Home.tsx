import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const pageSize = 12;
  const paginated = products.slice((page - 1) * pageSize, page * pageSize);

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {paginated.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
          Prev
        </button>
        <span style={{ margin: "0 10px" }}>Page {page}</span>
        <button
          disabled={page * pageSize >= products.length}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default Home;
