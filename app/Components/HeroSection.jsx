"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function HeroSection() {
  const slides = useMemo(
    () => [
      {
        src: "/hero/1.jpg",
        alt: "Premium handbags collection",
      },
      {
        src: "/hero/2.jpg",
        alt: "New arrivals handbags",
      },
      {
        src: "/hero/3.jpg",
        alt: "Elegant women bags",
      },
      {
        src: "/hero/4.jpg",
        alt: "Luxury handbags sale",
      },
      {
        src: "/hero/5.jpg",
        alt: "Best handbags in Pakistan",
      },
    ],
    []
  );

  return (
    <section className="relative w-full">
      {/* HERO SLIDER */}
      <div className="relative w-full h-[68vh] sm:h-[72vh] lg:h-[78vh] overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          speed={900}
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i} className="relative h-full w-full">
              {/* Background image */}
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />

              {/* Subtle overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10" />

              {/* Modern soft vignette */}
              <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_120px_rgba(0,0,0,0.35)]" />

              {/* Ken Burns style zoom (smooth) */}
              <div className="absolute inset-0 animate-[heroZoom_6s_ease-in-out_infinite]" />

              {/* Keyframes inline via tailwind arbitrary animation needs global keyframes;
                  We'll add them below in globals.css snippet. */}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CONTENT */}
        <div className="absolute inset-0 z-10">
          <div className="mx-auto max-w-7xl h-full px-4">
            <div className="h-full flex items-center">
              <div className="max-w-xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-white backdrop-blur border border-white/20">
                  <span className="text-xs sm:text-sm font-semibold tracking-wide">
                    Ramadan Sale • Up to 50% Off
                  </span>
                </div>

                {/* SEO H1 */}
                <h1 className="mt-4 text-white font-extrabold leading-tight text-3xl sm:text-4xl lg:text-5xl">
                  Premium Handbags in Pakistan — Modern Styles, Everyday Luxury
                </h1>

                <p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed">
                  Discover new arrivals, timeless classics, and best-selling bags.
                  Fast delivery, easy returns, and quality you can feel.
                </p>

                {/* CTAs */}
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

                {/* Small trust line */}
                <div className="mt-5 text-sm text-white/80">
                  ✔ New arrivals weekly • ✔ Secure checkout • ✔ Premium quality
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional: bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}