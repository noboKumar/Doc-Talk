import React from "react";

const BlogCard = ({ blog }) => {
  const { question, answer } = blog;
  return (
    <div className="bg-white rounded-2xl px-5 py-8">
      <h1 className="text-2xl md:text-3xl font-bold">{question}</h1>
      <hr className="border-dashed border border-[#0F0F0F99] my-4" />
      <div>
        <span className="text-xl text-[#0051ff] font-semibold">Answer:</span>
        <br />
        <p className="text-xl">{answer}</p>
      </div>
      <hr className="border-dashed border border-[#0F0F0F99] my-4" />
    </div>
  );
};

export default BlogCard;
