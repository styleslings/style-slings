"use client";

import Image from "next/image";
import { useMemo } from "react";
import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center justify-center gap-1 text-[#b08a5b]">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} className={i < count ? "opacity-100" : "opacity-20"} />
      ))}
    </div>
  );
}

export default function Reviews() {
  const reviews = useMemo(
    () => [
      {
        name: "Nabeeha",
        rating: 4,
        text: "Absolutely love this bag! So stylish, sturdy, and perfect for everyday use!",
        image: "/images/zinc-bag.png",
      },
      {
        name: "Mahnoor Ali",
        rating: 5,
        text: "Premium quality and elegant design, I get compliments everywhere I go.",
        image: "/images/brown-floral-bag.png",
      },
      {
        name: "Fizza Tariq",
        rating: 5,
        text: "Loved the bag, stuff, space, everything is too good. It even fits my abaya!",
        image: "/images/black-tote-bag.png",
      },
      {
        name: "Hadia",
        rating: 5,
        text: "Quality is amazing and the finishing is premium. Loved it!",
        image: "/images/hijab-bag.png",
      },
      {
        name: "Zara Khan",
        rating: 5,
        text: "Fast delivery, excellent craftsmanship, and worth every penny.",
        image: "/images/beige-bag-classy.png",
      },
    ],
    []
  );

  return (
    <section className="bg-[#f9f6f1] mb-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-16">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800">
            Loved by Our Customers
          </h2>

          <p className="mt-3 text-gray-500 text-sm sm:text-base">
            Real experiences from women who carry Style Slings
          </p>

          <div className="mt-4 flex flex-col items-center gap-2">
            <Stars count={5} />
          </div>
        </div>

        {/* Swiper */}
        <div className="mt-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            centeredSlides
            speed={700}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 15 },
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="!pb-10"
          >
            {reviews.map((r, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition duration-300 h-full flex flex-col justify-between">

                  <div className="space-y-4 text-center">
                    <Stars count={r.rating} />

                    <p className="text-gray-600 text-sm leading-relaxed px-2">
                      “{r.text}”
                    </p>
                  </div>

                  <div className="mt-6 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden border border-gray-200">
                        <Image
                          src={r.image}
                          alt={r.name}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <p className="text-sm font-medium text-gray-800">
                      {r.name}
                    </p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx global>{`
            .swiper-pagination-bullet {
              background: #b08a5b;
              opacity: 0.3;
            }
            .swiper-pagination-bullet-active {
              opacity: 1;
            }
          `}</style>
        </div>

      </div>

      {/* ================= SHOP BEFORE IT'S GONE ================= */}
      <div
        className="relative py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/clutch-bags.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

          <div className="max-w-xl">
            <h2 className="text-xl sm:text-3xl font-semibold text-white">
              Shop Before It’s Gone
            </h2>

            <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed">
              Limited pieces. Unique styles. Yours before anyone else.
            </p>
          </div>

          <div>
            <a
              href="/products"
              className="inline-block bg-black text-white px-6 sm:px-8 py-3 text-sm font-medium tracking-wide rounded-md hover:bg-[#9B6500] transition duration-300"
            >
              BROWSE BAGS
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}