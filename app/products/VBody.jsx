"use client";

import Image from "next/image";
import { Grid2x2, LayoutGrid, ChevronDown, Star, Plus } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Round Lock Bag - Blue",
    image:
      "/images/2.png",
    price: 1200,
    oldPrice: 5000,
    rating: 4,
    reviews: 120,
    badge: "Save 76%",
    href: "/yellow-elongated-chain-handle-purse",
  },
  {
    id: 2,
    name: "Round Lock Bag - Black",
    image:
      "/images/2.png",
    price: 1200,
    oldPrice: 5000,
    rating: 4,
    reviews: 120,
    badge: "Save 76%",
    href: "/yellow-elongated-chain-handle-purse",
  },
  {
    id: 3,
    name: "Round Lock Bag - Beige",
    image:
      "/images/2.png",
    price: 1200,
    oldPrice: 5000,
    rating: 4,
    reviews: 120,
    badge: "Save 76%",
    href: "/yellow-elongated-chain-handle-purse",
  },
  {
    id: 4,
    name: "Round Lock Bag - Mustard Brown",
    image:
      "/images/2.png",
    price: 1200,
    oldPrice: 5000,
    rating: 4,
    reviews: 120,
    badge: "Save 76%",
    href: "/yellow-elongated-chain-handle-purse",
  },
  {
    id: 5,
    name: "Love Bag - Maroon",
    image:
      "/images/2.png",
    price: 1200,
    oldPrice: 5000,
    rating: 4,
    reviews: 120,
    badge: "Save 76%",
   href: "/yellow-elongated-chain-handle-purse",
  },
  {
    id: 6,
    name: "Love Bag - Beige",
    image:
      "/images/2.png",
    price: 1200,
    oldPrice: 5000,
    rating: 4,
    reviews: 120,
    badge: "Save 76%",
    href: "/yellow-elongated-chain-handle-purse",
  },
  {
    id: 7,
    name: "Love Bag - Blue",
    image:
      "/images/2.png",
    price: 1200,
    oldPrice: 5000,
    rating: 4,
    reviews: 120,
    badge: "Save 76%",
    href: "/yellow-elongated-chain-handle-purse",
  },
  {
    id: 8,
    name: "Women's Bag - Black",
    image:
      "/images/2.png",
    price: 1200,
    oldPrice: 5000,
    rating: 4,
    reviews: 120,
    badge: "Save 76%",
    href: "/yellow-elongated-chain-handle-purse",
  },
];

function formatPrice(price) {
  return `RS.${price.toLocaleString("en-PK")}.00`;
}

function ProductCard({ product }) {
  return (
    <article className="group relative overflow-hidden rounded-[22px] border border-[#d7d7d7] bg-[#efefef] transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <a href={product.href} className="block">
        <div className="relative">
          <div className="absolute left-4 top-4 z-10 rounded-md bg-[#ff3b30] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white sm:text-xs">
            {product.badge}
          </div>

          <div className="relative aspect-[4/4.2] overflow-hidden bg-[#e9e1d7] sm:aspect-[4/4.9]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <button
            type="button"
            aria-label={`Quick add ${product.name}`}
            className="absolute bottom-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-none bg-white text-[#222] shadow-md transition hover:bg-black hover:text-white lg:hidden"
          >
            <Plus size={22} />
          </button>
        </div>

        <div className="p-4 sm:p-5">
          <h2 className="line-clamp-2 text-[18px] font-medium leading-snug tracking-tight text-[#111827] sm:text-[20px]">
            {product.name}
          </h2>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="text-[18px] font-semibold tracking-wide text-[#ef4444] sm:text-[20px]">
              {formatPrice(product.price)}
            </span>
            <span className="text-[16px] text-[#8b8f98] line-through sm:text-[18px]">
              {formatPrice(product.oldPrice)}
            </span>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  className={
                    index < product.rating
                      ? "fill-[#f4bf00] text-[#f4bf00]"
                      : "fill-[#d1d5db] text-[#d1d5db]"
                  }
                />
              ))}
            </div>
            <span className="text-[15px] text-[#6b7280]">({product.reviews})</span>
          </div>

          <button
            type="button"
            className="mt-6 hidden min-h-[56px] w-full rounded-2xl bg-[#a87400] px-6 text-[18px] font-semibold text-white transition hover:bg-[#8f6500] lg:block"
          >
            Add to Cart
          </button>
        </div>
      </a>
    </article>
  );
}

export default function VBody() {
  return (
    <section className="bg-[#ededed] py-6 md:py-8">
      <div className="mx-auto max-w-[1700px] px-3 sm:px-5 lg:px-8">
        {/* Top bar desktop */}
        <div className="hidden border border-[#d6d6d6] bg-[#f5f5f5] md:grid md:grid-cols-[140px_1fr_180px_140px]">
          <div className="flex items-center gap-4 border-r border-[#d6d6d6] px-6 py-5 text-[#5d5d5d]">
            <button
              type="button"
              aria-label="List view"
              className="transition hover:text-black"
            >
              <LayoutGrid size={19} />
            </button>
            <button
              type="button"
              aria-label="Grid view"
              className="transition hover:text-black"
            >
              <Grid2x2 size={19} />
            </button>
            <button
              type="button"
              aria-label="Compact view"
              className="transition hover:text-black"
            >
              <LayoutGrid size={19} className="rotate-90" />
            </button>
          </div>

          <div className="flex items-center justify-center border-r border-[#d6d6d6] px-6 py-5 text-[14px] uppercase tracking-[0.22em] text-[#777]">
            214 Products
          </div>

          <button
            type="button"
            className="flex items-center justify-center gap-2 border-r border-[#d6d6d6] px-6 py-5 text-[14px] uppercase tracking-[0.18em] text-[#777] transition hover:bg-white"
          >
            Sort By
            <ChevronDown size={16} />
          </button>

          <button
            type="button"
            className="flex items-center justify-center px-6 py-5 text-[14px] uppercase tracking-[0.18em] text-[#777] transition hover:bg-white"
          >
            Filter
          </button>
        </div>

        {/* Top bar mobile */}
        <div className="grid grid-cols-3 border border-[#d6d6d6] bg-[#f5f5f5] md:hidden">
          <button
            type="button"
            className="flex items-center justify-center border-r border-[#d6d6d6] px-4 py-4 text-[14px] uppercase tracking-[0.18em] text-[#777]"
          >
            Filter
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 border-r border-[#d6d6d6] px-4 py-4 text-[14px] uppercase tracking-[0.18em] text-[#777]"
          >
            Sort By
            <ChevronDown size={16} />
          </button>

          <div className="flex items-center justify-center gap-4 px-4 py-4 text-[#5d5d5d]">
            <button type="button" aria-label="Single column view">
              <LayoutGrid size={19} />
            </button>
            <button type="button" aria-label="Two column view">
              <Grid2x2 size={19} />
            </button>
          </div>
        </div>

        {/* Products grid */}
        <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-5 sm:gap-5 md:mt-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}