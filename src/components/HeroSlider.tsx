import  { useState, useEffect } from "react";
const slides = [
  {
    id: 1,
    title: "Nike Air Max",
    subtitle: "Comfortable & Stylish",
    imageUrl: "/images/Hero1.jpg",
  },
  {
    id: 2,
    title: "Adidas Running",
    subtitle: "Run Faster",
    imageUrl: "/images/Hero2.jpg",
  },
  {
    id: 3,
    title: "Puma Sneakers",
    subtitle: "Everyday Wear",
    imageUrl: "/images/Hero3.jpg",
  },
  {
    id: 4,
    title: "Reebok Classic",
    subtitle: "Retro Style",
    imageUrl: "/images/Hero4.jpg",
  },
];
export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);
  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden", borderRadius: "8px" }}>
      {slides.map((slide, index) => (
        <img
          key={slide.id}
          src={slide.imageUrl}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            transition: "opacity 0.5s ease-in-out",
            opacity: index === current ? 1 : 0,
            position: index === current ? "relative" : "absolute",
          }}
        />
      ))}
      <button
        onClick={() => setCurrent((current - 1 + length) % length)}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          padding: "6px 10px",
          cursor: "pointer",
          borderRadius: "4px",
        }}
      >
        &#8592;
      </button>
      <button
        onClick={() => setCurrent((current + 1) % length)}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          padding: "6px 10px",
          cursor: "pointer",
          borderRadius: "4px",
        }}
      >
        &#8594;
      </button>
      <div style={{
        position: "absolute",
        bottom: "10px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "8px",
      }}>
        {slides.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: idx === current ? "#4f46e5" : "#d1d5db",
              cursor: "pointer",
              display: "inline-block",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
