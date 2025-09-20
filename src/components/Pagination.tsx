import React from "react";
type Props = {
  page: number;
  totalPages: number;
  onPageChange: (p: number) => void;
};
export default function Pagination({ page, totalPages, onPageChange }: Props) {
  if (totalPages <= 1) return null; 
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "6px",
        marginTop: "20px",
        flexWrap: "wrap",
      }}
    >
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        style={{
          padding: "6px 12px",
          border: "1px solid #ddd",
          background: "#fff",
          cursor: page === 1 ? "not-allowed" : "pointer",
          borderRadius: "4px",
        }}
      >
        Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          style={{
            padding: "6px 12px",
            border: "1px solid #ddd",
            background: p === page ? "#4f46e5" : "#fff",
            color: p === page ? "#fff" : "#000",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          {p}
        </button>
      ))}
      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        style={{
          padding: "6px 12px",
          border: "1px solid #ddd",
          background: "#fff",
          cursor: page === totalPages ? "not-allowed" : "pointer",
          borderRadius: "4px",
        }}
      >
        Next
      </button>
    </div>
  );
}
