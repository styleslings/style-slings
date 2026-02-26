"use client";

import Image from "next/image";
import { useMemo } from "react";
import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center justify-center gap-1 text-emerald-700">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} className={i < count ? "opacity-100" : "opacity-25"} />
      ))}
    </div>
  );
}

export default function Reviews() {
  // Replace with your real reviews later
  const reviews = useMemo(
    () => [
      {
        name: "Anonymous",
        rating: 4,
        title: "Good",
        text: "",
        image: "/reviews/bag-1.jpg",
      },
      {
        name: "IQBAL BANO",
        rating: 5,
        title: "",
        text: "Very useful for me. I love A. Store bags a lot.",
        image: "/reviews/bag-2.jpg",
      },
      {
        name: "Anonymous",
        rating: 5,
        title: "",
        text: "Loved the bag, stuff, space, everything is too good..it has enough space for my abaya even. 👍",
        image: "/reviews/bag-3.jpg",
      },
      {
        name: "HINA",
        rating: 5,
        title: "",
        text: "Quality is amazing and the finishing is premium. Loved it!",
        image: "/reviews/bag-4.jpg",
      },
      {
        name: "Anonymous",
        rating: 5,
        title: "Excellent",
        text: "",
        image: "/reviews/bag-5.jpg",
      },
    ],
    []
  );

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-800">
            Let customers speak for us
          </h2>

          <div className="mt-5 flex flex-col items-center gap-2">
            <Stars count={5} />
            <p className="text-base sm:text-lg text-neutral-600">
              from <span className="font-semibold">6316</span> reviews{" "}
              <span className="inline-flex items-center justify-center ml-2 h-5 w-5 rounded bg-emerald-600 text-white text-xs">
                ✓
              </span>
            </p>
          </div>
        </div>

        {/* Swiper */}
        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            centeredSlides
            speed={700}
            autoplay={{ delay: 2600, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 24 },
              768: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="!pb-10"
          >
            {reviews.map((r, idx) => (
              <SwiperSlide key={idx}>
                <div className="text-center min-h-[280px] flex flex-col justify-between">
                  <div className="space-y-4">
                    <Stars count={r.rating} />

                    {r.title ? (
                      <p className="text-lg font-medium text-neutral-700">
                        {r.title}
                      </p>
                    ) : (
                      <p className="text-lg text-neutral-700 leading-relaxed px-6">
                        {r.text}
                      </p>
                    )}
                  </div>

                  <div className="mt-10">
                    <p className="text-sm tracking-wide text-neutral-400 uppercase">
                      {r.name}
                    </p>

                    <div className="mt-3 flex justify-center">
                      <div className="relative h-14 w-14 rounded bg-neutral-100 overflow-hidden">
                        <Image
                          src={r.image}
                          alt={`${r.name} purchased product`}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* (Optional) make dots subtle like premium theme */}
          <style jsx global>{`
            .swiper-pagination-bullet {
              opacity: 0.25;
            }
            .swiper-pagination-bullet-active {
              opacity: 0.75;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}