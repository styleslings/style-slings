"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { ShoppingBag, Clock, Heart } from "lucide-react";
import { Gem, BadgePercent, ShieldCheck, Headset } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function HeroSection() {
  const slides = useMemo(
    () => [
      { src: "/images/handbags-shoot.webp", alt: "Premium handbags collection" },
      { src: "/images/handbag-bnner.avif", alt: "New arrivals handbags" },
      { src: "/images/hanged-bag.avif", alt: "Elegant women bags" },
      { src: "/images/handbag-image.avif", alt: "Luxury handbags sale" },
      { src: "/images/home-page-banner-image.jpg", alt: "Best handbags in Pakistan" },
    ],
    []
  );

  const products = useMemo(
    () => [
      {
        id: 1,
        title: "Black Tote Bag",
        image: "/images/black-tote-bag.png",
        hoverImage: "/images/2.png",
        price: "1,899",
        oldPrice: "3,000",
        badge: "Sale",
        rating: 4,
        reviews: 120,
      },
      {
        id: 2,
        title: "Modern Shoulder Bag",
        image: "/images/hijab-bag.png",
        hoverImage: "/images/model-hijab.png",
        price: "2,199",
        oldPrice: "3,000",
        rating: 5,
        reviews: 85,
        badge: "Sale",
      },
      {
        id: 3,
        title: "Camel Brown Floral Bag",
        image: "/images/zinc-bag.png",
        hoverImage: "/images/zinc-model-bag.png",
        price: "2,499",
        oldPrice: "3,000",
        rating: 4,
        reviews: 97,
        badge: "Sale",
      },
      {
        id: 4,
        title: "Luxury Clutch Bag",
        image: "/images/beige-bag-classy.png",
        hoverImage: "/images/beige-handbag.png",
        price: "1,299",
        oldPrice: "1,999",
        badge: "Hot",
        rating: 5,
        reviews: 150,
        badge: "Sale",
      },
    ],
    []
  );

  return (
    <section className="relative w-full">
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-[68vh] sm:h-[72vh] lg:h-[78vh] overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          speed={900}
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i} className="relative h-full w-full">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10" />
              <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_120px_rgba(0,0,0,0.35)]" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* HERO CONTENT */}
        <div className="absolute inset-0 z-10">
          <div className="mx-auto max-w-7xl h-full px-4">
            <div className="h-full flex items-center">
              <div className="max-w-xl">
                <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-white backdrop-blur border border-white/20">
                  <span className="text-xs sm:text-sm font-semibold tracking-wide">
                    Ramadan Sale • Up to 50% Off
                  </span>
                </div>

                <h1 className="mt-4 text-white font-extrabold leading-tight text-3xl sm:text-4xl lg:text-5xl">
                  Premium Handbags in Pakistan 
                </h1>

                <p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed">
                  Discover new arrivals, timeless classics, and best-selling bags.
                  Fast delivery, easy returns, and quality you can feel.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/bags"
                    className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-white text-neutral-900 hover:bg-neutral-100 transition"
                  >
                    Shop Now
                  </Link>

                  <Link
                    href="/new-arrivals"
                    className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-transparent text-white border border-white/40 hover:bg-white/10 transition"
                  >
                    New Arrivals
                  </Link>
                </div>

                <div className="mt-5 text-sm text-white/80">
                  ✔ New arrivals weekly • ✔ Secure checkout • ✔ Premium quality
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>

      {/* ================= PRODUCT SECTION ================= */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className=" text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
         ─────── HOT PRODUCTS ───────
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="relative w-full aspect-square overflow-hidden">
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-20">
                      {product.badge}
                    </span>
                  )}

                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
                  />

                  {product.hoverImage && (
                    <Image
                      src={product.hoverImage}
                      alt={`${product.title} hover`}
                      fill
                      className="object-cover object-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                    {product.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-lg font-semibold text-gray-900">
                      PKR {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        PKR {product.oldPrice}
                      </span>
                    )}
                  </div>
                  

                  {/* ⭐ REVIEW STARS */}
                  <div className="mt-1 flex items-center">
                    {[...Array(5)].map((_, idx) => (
                      <svg
                        key={idx}
                        className={`h-4 w-4 ${idx < product.rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.96c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.96a1 1 0 00-.364-1.118L2.044 9.387c-.784-.57-.38-1.81.588-1.81h4.164a1 1 0 00.951-.69l1.286-3.96z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-500">({product.reviews})</span>
                  </div>

                  <button className="mt-4 w-full bg-[#9B6500] text-white py-2 rounded-md text-sm font-semibold hover:bg-gray-900 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* 🔥 VIEW ALL PRODUCTS BUTTON */}
          <div className=" flex justify-center">
            <div className="mt-10 mb-12">
               <Link
                 href="/products" className="bg-[#9B6500] inline-block border border-gray-500  rounded-md text-white -600 px-10 py-3 text-sm font-medium hover:bg-black hover:text-white transition duration-300">
                 View All Bags
              </Link>
             </div>
          </div>
     {/* ================= LIMITED STOCK STRIP ================= */}
<div className="w-full bg-[#eae7e2] mb-12 py-6">
  <div className="max-w-6xl mx-auto px-4">

    <div className="flex flex-wrap items-center justify-between text-gray-700 text-sm">

      {/* ITEM 1 */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full">
          <ShoppingBag size={18} className="text-[#b08a5b]" />
        </div>
        <span className="font-medium  tracking-wide">
          LIMITED STOCK
        </span>
      </div>

      {/* DIVIDER */}
      <div className="hidden md:block w-px h-8 bg-gray-300" />

      {/* ITEM 2 */}
      <div className="flex items-center gap-2">
        <ShoppingBag size={16} className="text-[#b08a5b]" />
        <span>Only a few pieces available</span>
      </div>

      {/* DIVIDER */}
      <div className="hidden md:block w-px h-8 bg-gray-300" />

      {/* ITEM 3 */}
      <div className="flex items-center gap-2">
        <Clock size={16} className="text-[#b08a5b]" />
        <span>Restock coming soon</span>
      </div>

      {/* DIVIDER */}
      <div className="hidden md:block w-px h-8 bg-gray-300" />

      {/* ITEM 4 */}
      <div className="flex items-center gap-2">
        <Heart size={16} className="text-[#b08a5b]" />
        <span>Once sold, gone forever</span>
      </div>

    </div>

  </div>
</div>
{/* ================= COLORS OF THE SEASON SECTION ================= */}
          <section className="w-full bg-[#e9e5df]">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">

              {/* LEFT IMAGE */}
              <div className="relative w-full h-[400px] lg:h-auto">
                <Image
                  src="/images/zinc-model-bag.png"  // <-- change to your image path
                  alt="Colors of the Season"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex items-center justify-center px-6 sm:px-12 lg:px-20 py-14 text-center lg:text-left">
                <div className="max-w-xl">

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-600">
                    Colors of the Season
                  </h2>

                  <p className="mt-6 text-gray-500 leading-relaxed text-base sm:text-lg">
                    Style Slings are designed for effortless everyday carry with a refined touch. Blending practicality with modern aesthetics, each piece complements your look while keeping your essentials close.
                  </p>

                  <div className="mt-10">
                    <Link
                      href="/products"
                      className="inline-block border border-gray-500 text-gray-600 px-10 py-3 text-sm font-medium hover:bg-black hover:text-white transition duration-300"
                    >
                      Shop Now
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          </section>
        </div>
{/* ================= PRODUCT SECTION (DUPLICATE) ================= */}
<div className="bg-white py-16">
  <div className="mx-auto max-w-7xl px-4">
    <h2 className=" text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
     ───── Tote Bags Collection ─────
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={`second-${product.id}`}
          className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
        >
          <div className="relative w-full aspect-square overflow-hidden">
            {product.badge && (
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-20">
                {product.badge}
              </span>
            )}

            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
            />

            {product.hoverImage && (
              <Image
                src={product.hoverImage}
                alt={`${product.title} hover`}
                fill
                className="object-cover object-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            )}
          </div>

          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
              {product.title}
            </h3>

            <div className="mt-2 flex items-center gap-2">
              <span className="text-lg font-semibold text-gray-900">
                PKR {product.price}
              </span>
              {product.oldPrice && (
                <span className="text-sm text-gray-400 line-through">
                  PKR {product.oldPrice}
                </span>
              )}
            </div>

            <div className="mt-4">
              <button className="w-full bg-[#9B6500] text-white py-2 rounded-md text-sm font-semibold hover:bg-gray-900 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
        {/* ================= WHY CHOOSE US ================= */}
<div className=" mt-10 mb-10 bg-[#f9f6f1] to-white py-10">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
      Why Choose Style Slings?
    </h2>

    <div className="grid md:grid-cols-4 gap-10">

      <div className="flex flex-col items-center text-center">
        <Gem className="text-[#b08a5b]" size={28} />
        <h3 className="mt-3 font-medium">Handpicked Designs</h3>
        <p className="text-sm text-gray-500 mt-1">
          Unique and trendy pieces selected with care.
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <BadgePercent className="text-[#b08a5b]" size={28} />
        <h3 className="mt-3 font-medium">Affordable Luxury</h3>
        <p className="text-sm text-gray-500 mt-1">
          Premium look and feel at the best prices.
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <ShieldCheck className="text-[#b08a5b]" size={28} />
        <h3 className="mt-3 font-medium">Quality Materials</h3>
        <p className="text-sm text-gray-500 mt-1">
          Durable, long-lasting and elegant finish.
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <Headset className="text-[#b08a5b]" size={28} />
        <h3 className="mt-3 font-medium">Personal Support</h3>
        <p className="text-sm text-gray-500 mt-1">
          We’re here before and after your order.
        </p>
      </div>

    </div>
  </div>
</div>

{/* ================= PRODUCT SECTION (DUPLICATE) ================= */}
<div className="bg-white py-4">
  <div className="mx-auto max-w-7xl px-4">
    <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
      ─────── HandBags Collection ───────
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={`second-${product.id}`}
          className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
        >
          <div className="relative w-full aspect-square overflow-hidden">
            {product.badge && (
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-20">
                {product.badge}
              </span>
            )}

            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
            />

            {product.hoverImage && (
              <Image
                src={product.hoverImage}
                alt={`${product.title} hover`}
                fill
                className="object-cover object-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            )}
          </div>

          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
              {product.title}
            </h3>

            <div className="mt-2 flex items-center gap-2">
              <span className="text-lg font-semibold text-gray-900">
                PKR {product.price}
              </span>
              {product.oldPrice && (
                <span className="text-sm text-gray-400 line-through">
                  PKR {product.oldPrice}
                </span>
              )}
            </div>

            <div className="mt-4">
              <button className="w-full bg-[#9B6500] text-white py-2 rounded-md text-sm font-semibold hover:bg-gray-900 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

        {/* ================= BANNER IMAGE ================= */}
        
        
        <div className="relative my-16 w-full h-[400px] md:h-[500px] lg:h-[550px]">
          <Image
            src="/images/clutch-bags.jpg" // <-- your banner image path
            alt="Shop Banner"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href="/products"
             className="inline-block border border-gray-500 text-white-600 px-10 py-3 text-white text-sm font-medium hover:bg-black hover:text-white transition duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/* ================= INSTAGRAM UGC FEED ================= */}
<div className="bg-[#faf7f2] py-16">
  <div className="max-w-7xl mx-auto px-4 text-center">

    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
      Shop Our Instagram
    </h2>

    <p className="mt-3 text-gray-500">
      Follow us{" "}
      <a
        href="https://www.instagram.com/styleslingss/"
        target="_blank"
        className="text-[#b08a5b] font-medium"
      >
        @styleslingss
      </a>{" "}
      for daily style inspiration
    </p>

    {/* GRID */}
    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

      {[
        {
          img: "/images/black-tote-bag.png",
          link: "https://www.instagram.com/p/DVLj00nDYFA/",
        },
        {
          img: "/images/hijab-bag.png",
          link: "https://www.instagram.com/p/DVd5BA6DS3r/",
        },
        {
          img: "/images/zinc-model-bag.png",
          link: "https://www.instagram.com/p/POST3/",
        },
        {
          img: "/images/beige-bag-classy.png",
          link: "https://www.instagram.com/p/DVQj_H-ja2I/",
        },
        {
          img: "/images/zinc-bag.png",
          link: "https://www.instagram.com/p/POST5/",
        },
        {
          img: "/images/handbag-image.avif",
          link: "https://www.instagram.com/p/POST6/",
        },
      ].map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block overflow-hidden rounded-lg"
        >
          <div className="relative w-full aspect-square">
            <Image
              src={item.img}
              alt="Instagram post"
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* HOVER OVERLAY */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
            <span className="text-white text-sm font-semibold">
              View on Instagram
            </span>
          </div>
        </a>
      ))}

    </div>

    {/* BUTTON */}
    <div className="mt-10">
      <a
        href="https://www.instagram.com/styleslingss/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#9B6500] text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-black transition"
      >
        Follow on Instagram
      </a>
    </div>

  </div>
</div>


      </div>
      
    </section>
    
  );
}