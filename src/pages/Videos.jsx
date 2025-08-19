import React, { useState } from "react";
import FilterBar from "../components/FilterBar";
import { videoList } from "../data/video"; // import full videoList
import VideoCard from "../components/VideoCard";

const categories = ["education", "life", "family", "personal-growth", "spirituality", "stress"];

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredVideos = selectedCategory
    ? videoList.filter((video) => video.category === selectedCategory)
    : videoList;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Mental Wellness Videos</h1>
      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredVideos.map((video) => (
          <VideoCard key={video.title} {...video} />
        ))}
      </div>
    </div>
  );
};

export default Videos;
