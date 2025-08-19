import React from "react";

const ContentCard = ({ title, description, content, category, type, image }) => {
  return (
    <div className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <span className="text-sm text-purple-500 font-semibold">{category}</span>
        <h2 className="text-xl font-bold mt-2">{title}</h2>
        <p className="text-gray-600 mt-2">{description || content}</p>
        {type === "video" && (
          <div className="mt-2">
            <button className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600 transition">
              Watch Video
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
