"use client";

import React from "react";

function SectionHeading() {
  return (
    <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl text-zinc-800 sm:text-5xl lg:text-6xl">
        Our Blog
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
        Discover the latest trends, styling tips, and fashion inspiration.
      </p>
    </div>
  );
}

function BlogCard({ image, title, excerpt, date }) {
  return (
    <div className="group overflow-hidden rounded-[28px] bg-white shadow-sm transition hover:shadow-md">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="text-xs text-zinc-500">{date}</p>

        <h2 className="mt-2 font-serif text-lg text-zinc-800 group-hover:text-black">
          {title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-zinc-600 line-clamp-3">
          {excerpt}
        </p>

        <button className="mt-4 text-sm font-medium text-black underline underline-offset-4">
          Read More →
        </button>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const posts = [
    {
      image: "/images/home-page-banner-image.jpg",
      title: "Top Summer Fashion Trends 2026",
      excerpt:
        "Explore the hottest styles this summer and upgrade your wardrobe with fresh looks.",
      date: "May 1, 2026",
    },
    {
      image: "/images/hanged-bag.avif",
      title: "How to Style Casual Outfits",
      excerpt:
        "Simple yet stylish ways to elevate your everyday outfits effortlessly.",
      date: "April 25, 2026",
    },
    {
      image: "/images/handbags-shoot.webp",
      title: "Must-Have Accessories This Season",
      excerpt:
        "Complete your look with these trending accessories you shouldn’t miss.",
      date: "April 18, 2026",
    },
    {
      image: "/images/handbag-bnner.avif",
      title: "Footwear Guide for Every Occasion",
      excerpt:
        "From casual to formal, find the perfect shoes for every moment.",
      date: "April 10, 2026",
    },
    
{
      image: "/images/handbags-shoot.webp",
      title: "Must-Have Accessories This Season",
      excerpt:
        "Complete your look with these trending accessories you shouldn’t miss.",
      date: "April 18, 2026",
    },
 {
      image: "/images/handbag-bnner.avif",
      title: "Footwear Guide for Every Occasion",
      excerpt:
        "From casual to formal, find the perfect shoes for every moment.",
      date: "April 10, 2026",
    },
     {
      image: "/images/hanged-bag.avif",
      title: "How to Style Casual Outfits",
      excerpt:
        "Simple yet stylish ways to elevate your everyday outfits effortlessly.",
      date: "April 25, 2026",
    },

     {
      image: "/images/home-page-banner-image.jpg",
      title: "Top Summer Fashion Trends 2026",
      excerpt:
        "Explore the hottest styles this summer and upgrade your wardrobe with fresh looks.",
      date: "May 1, 2026",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fbf8f7] py-16 sm:py-20 lg:py-24">
      <SectionHeading />

      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ✅ 4 Columns Layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <button className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800">
          Load More
        </button>
      </div>
    </section>
  );
}