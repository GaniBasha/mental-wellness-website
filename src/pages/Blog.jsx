import React, { useState } from "react";
import ContentCard from "../components/ContentCard";
import FilterBar from "../components/FilterBar";
import { blogs } from "../data/blogs"; // import full blog data

const categories = [
  "education",
  "life",
  "family",
  "personal-growth",
  "spirituality",
  "stress",
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredPosts = selectedCategory
    ? blogs.filter((post) => post.category === selectedCategory)
    : blogs;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Mental Wellness Blogs</h1>
      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredPosts.map((post) => (
          <ContentCard
            key={post.id}
            title={post.title}
            content={post.content}
            image={post.image} // Make sure ContentCard uses this as src
            type="blog"
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
