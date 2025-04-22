import React from "react";
import { useLoaderData } from "react-router";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const data = useLoaderData();
  return (
    <div className="bg-[#EFEFEF]">
      <div className="w-11/12 mx-auto">
        <div className="text-center py-5">
          <h1 className="text-2xl md:text-4xl font-bold">Blogs</h1>
          <p className="md:text-xl">
            Let's Explore some basic concept that will make you a good
            Developer'
          </p>
        </div>
        <div className="space-y-5 py-8">
          {data.map((blog) => (
            <BlogCard key={blog.id} blog={blog}></BlogCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
