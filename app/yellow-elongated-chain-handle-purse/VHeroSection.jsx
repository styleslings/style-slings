"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Shield,
  Share2,
  Star,
  Truck,
  ZoomIn,
} from "lucide-react";

const productData = {
  name: "Yellow Elongated Chain Handle Purse",
  price: 1799,
  rating: 4.7,
  reviews: 30,
  category: "Products",
  colorLabel: "Yellow",
  deliveryHighlight: "FREE delivery over Rs.3499!",
  deliveryText: "Rs.200 delivery charges nationwide.",
  deliveryEstimate: "Delivery within 4-7 working days.",
  returnHighlight: "FREE returns and exchanges!",
  returnText: "100% customer satisfaction guaranteed.",
  returnLifetime: "FREE LIFETIME returns and exchanges.",
  specs: [
    { label: "Width", value: "11.5 inches" },
    { label: "Height", value: "6 inches" },
    { label: "Depth", value: "2.5 inches" },
    { label: "Compartment", value: "One main zipper compartment." },
    { label: "Strap", value: "Shoulder strap." },
    { label: "Material", value: "Faux leather." },
  ],
  variants: [
    { id: 1, name: "Blue", color: "#405A96" },
    { id: 2, name: "Yellow", color: "#F5C53B" },
    { id: 3, name: "Peach", color: "#F7B7A8" },
    { id: 4, name: "Beige", color: "#E9D9BE" },
  ],
  images: [
    {
      id: 1,
      src: "/images/3.png",
      alt: "Yellow elongated chain handle purse front view",
    },
    {
      id: 2,
      src: "/images/3.png",
      alt: "Yellow elongated chain handle purse fashion styling",
    },
    {
      id: 3,
      src: "/images/3.png",
      alt: "Yellow purse angled product view",
    },
    {
      id: 4,
      src: "/images/3.png",
      alt: "Yellow purse detail close-up",
    },
    {
      id: 5,
      src: "/images/3.png",
      alt: "Yellow purse side profile",
    },
  ],
};

function formatPrice(price) {
  return `Rs.${price.toLocaleString("en-PK")}.00`;
}

export default function VHeroSection() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(2);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const visibleThumbs = useMemo(() => {
    return productData.images;
  }, []);

  const currentImage = productData.images[selectedImage];

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? productData.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === productData.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-[#f6f6f6] py-6 md:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-4 md:mb-6 text-[12px] sm:text-sm text-gray-500"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <a href="/" className="transition hover:text-black">
                Home
              </a>
            </li>
            <li className="text-gray-400">&gt;</li>
            <li>
              <a href="/products" className="transition hover:text-black">
                {productData.category}
              </a>
            </li>
            <li className="text-gray-400">&gt;</li>
            <li className="font-medium text-gray-700">{productData.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* Left side */}
          <div>
            <div className="relative overflow-hidden rounded-3xl bg-[#f1f1f1] shadow-sm">
              <div className="relative aspect-[4/4.7] w-full sm:aspect-[1/1.08]">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  priority
                  className="object-contain p-6 sm:p-8 md:p-10"
                />

                <button
                  type="button"
                  className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md backdrop-blur transition hover:scale-105"
                  aria-label="Zoom image"
                >
                  <ZoomIn size={20} />
                </button>

                <div className="absolute right-3 top-1/2 z-10 flex -translate-y-1/2 flex-col overflow-hidden rounded-2xl bg-white shadow-lg md:hidden">
                  <button
                    type="button"
                    className="flex h-12 w-12 items-center justify-center border-b border-gray-100 text-gray-700 transition hover:bg-gray-50"
                    aria-label="Share product"
                  >
                    <Share2 size={19} />
                  </button>
                  <button
                    type="button"
                    className="flex h-12 w-12 items-center justify-center text-gray-700 transition hover:bg-gray-50"
                    aria-label="Go to top"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    <ChevronRight size={19} className="-rotate-90" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md transition hover:scale-105"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md transition hover:scale-105 sm:inline-flex"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Thumbnail slider */}
            <div className="mt-5 flex items-center gap-3">
              <button
                type="button"
                onClick={prevImage}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-black"
                aria-label="Previous thumbnails"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="grid flex-1 grid-cols-4 gap-3 sm:grid-cols-5">
                {visibleThumbs.map((img, index) => (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square overflow-hidden rounded-2xl border bg-white transition ${
                      selectedImage === index
                        ? "border-black shadow-md"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                    aria-label={`Show image ${index + 1}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={nextImage}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-black"
                aria-label="Next thumbnails"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Color swatches for mobile */}
            <div className="mt-5 flex flex-wrap items-center gap-3 lg:hidden">
              {productData.variants.map((variant) => {
                const active = selectedVariant === variant.id;
                return (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`relative h-12 w-12 rounded-xl border transition ${
                      active
                        ? "border-black shadow-md"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                    aria-label={variant.name}
                    title={variant.name}
                  >
                    <span
                      className="absolute inset-1 rounded-lg"
                      style={{ backgroundColor: variant.color }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right side */}
          <div className="relative">
            <div className="rounded-3xl bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-24">
              {/* Desktop swatches */}
              <div className="mb-5 hidden items-center gap-3 lg:flex">
                {productData.variants.map((variant) => {
                  const active = selectedVariant === variant.id;
                  return (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => setSelectedVariant(variant.id)}
                      className={`relative h-14 w-14 rounded-xl border transition ${
                        active
                          ? "border-black shadow-md"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                      aria-label={variant.name}
                      title={variant.name}
                    >
                      <span
                        className="absolute inset-1.5 rounded-lg"
                        style={{ backgroundColor: variant.color }}
                      />
                    </button>
                  );
                })}
              </div>

              <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                {productData.name}
              </h1>

              <p className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                {formatPrice(productData.price)}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="currentColor"
                      strokeWidth={0}
                      className="shrink-0"
                    />
                  ))}
                </div>
                <p className="text-base text-gray-700">
                  <span className="font-medium">{productData.rating}</span>{" "}
                  <span className="text-gray-500">
                    ({productData.reviews} Reviews)
                  </span>
                </p>
              </div>

              <div className="mt-6 space-y-5 border-y border-gray-100 py-5">
                <div className="flex items-start gap-3">
                  <Truck className="mt-1 shrink-0 text-gray-800" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {productData.deliveryHighlight}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {productData.deliveryText}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {productData.deliveryEstimate}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="mt-1 shrink-0 text-gray-800" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {productData.returnHighlight}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {productData.returnText}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-gray-500">
                      {productData.returnLifetime}
                    </p>
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-4 text-[15px] leading-7 text-gray-700">
                {productData.specs.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-[10px] h-1.5 w-1.5 rounded-full bg-gray-700" />
                    <span>
                      <span className="font-semibold text-gray-900">
                        {spec.label}
                      </span>
                      {spec.value ? ": " : ""}
                      {spec.value}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  className="min-h-[56px] flex-1 rounded-2xl bg-[#1f1f1f] px-6 text-base font-bold uppercase tracking-wide text-white shadow-[0_8px_24px_rgba(59,130,246,0.18)] transition hover:-translate-y-0.5 hover:bg-black"
                >
                  Buy Now
                </button>

                <button
                  type="button"
                  onClick={() => setIsWishlisted((prev) => !prev)}
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-full border bg-white transition ${
                    isWishlisted
                      ? "border-black text-black"
                      : "border-gray-200 text-gray-700 hover:border-black"
                  }`}
                  aria-label="Add to wishlist"
                >
                  <Heart
                    size={22}
                    fill={isWishlisted ? "currentColor" : "none"}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}