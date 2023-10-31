"use client";

import React from "react";
import RootLayout from "@/Layouts/RootLayout";
import BlogHero from "@/components/Blog/BlogHero";
import LatestBlog from "@/components/Blog/latestBlog";
import BlogCard from "@/components/Blog/BlogCard";

const BlogsPage = () => {
  return (
    <>
      <RootLayout>
        <BlogHero />
        <LatestBlog />
        <BlogCard />
      </RootLayout>
    </>
  );
};

export default BlogsPage;
