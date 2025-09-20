import React, { useState } from "react";

interface SidebarProps {
  onFilter: (category: string, color: string) => void;
}

function Sidebar({ onFilter }: SidebarProps) {
  const [showCategories, setShowCategories] = useState(true);
  const [showColors, setShowColors] = useState(true);

  const categories = ["Shoes", "Shirts", "Pants"];
  const colors = ["red", "blue", "green", "black"];

  return (
    <aside className="sidebar">
      <h3>Filters</h3>

      {/* Category Filter */}
      <div>
        <button
          onClick={() => setShowCategories(!showCategories)}
          aria-expanded={showCategories}
        >
          Categories
        </button>
        {showCategories && (
          <ul>
            {categories.map((cat) => (
              <li key={cat}>
                <button onClick={() => onFilter(cat, "")}>{cat}</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Color Filter */}
      <div>
        <button
          onClick={() => setShowColors(!showColors)}
          aria-expanded={showColors}
        >
          Colors
        </button>
        {showColors && (
          <div className="color-boxes">
            {colors.map((c) => (
              <button
                key={c}
                className="color-btn"
                style={{ backgroundColor: c }}
                onClick={() => onFilter("", c)}
              />
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
