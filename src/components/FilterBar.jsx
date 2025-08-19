import React from "react";

const FilterBar = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-full border ${
            selectedCategory === cat
              ? "bg-purple-500 text-white"
              : "bg-white text-purple-500 border-purple-500"
          } hover:bg-purple-500 hover:text-white transition`}
        >
          {cat}
        </button>
      ))}
      <button
        onClick={() => onSelect("")}
        className="px-4 py-2 rounded-full border bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
      >
        All
      </button>
    </div>
  );
};

export default FilterBar;
