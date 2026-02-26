"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const leftLinks = useMemo(
    () => [
      { label: "All Bags", href: "/bags" },
      { label: "Shoulder Bags", href: "/bags/shoulder" },
      { label: "Tote Bags", href: "/bags/tote" },
      { label: "Crossbody Bag", href: "/bags/crossbody" },
      { label: "Laptop Bags", href: "/bags/laptop" },
      { label: "Cosmetic Bags", href: "/bags/cosmetic" },
    ],
    []
  );

  const rightLinks = useMemo(
    () => [
      { label: "About us", href: "/about" },
      { label: "Blogs", href: "/blogs" },
      { label: "Bulk Orders", href: "/bulk-orders" },
      { label: "Contact", href: "/contact" },
      { label: "Faqs", href: "/faqs" },
      { label: "Return & Refund Policy", href: "/return-refund" },
    ],
    []
  );

  const socials = useMemo(
    () => [
      { icon: <FaFacebookF />, href: "#", label: "Facebook" },
      { icon: <FaXTwitter />, href: "#", label: "X" },
      { icon: <FaInstagram />, href: "#", label: "Instagram" },
      { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
      { icon: <FaYoutube />, href: "#", label: "YouTube" },
      { icon: <FaTelegramPlane />, href: "#", label: "Telegram" },
      { icon: <FaWhatsapp />, href: "#", label: "WhatsApp" },
    ],
    []
  );

  return (
    <footer className="w-full">
      {/* TOP (dark section) */}
      <div className="bg-[#3b3b3b] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14">
          {/* Header row */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              GET IN TOUCH
            </h3>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-16 text-lg text-white/90">
              <a
                href="mailto:sales@styleslings.com"
                className="hover:text-white transition"
              >
                sales@styleslings.com
              </a>
              <a href="tel:03301140085" className="hover:text-white transition">
                +92 000 000 0000
              </a>
            </div>
          </div>

          {/* Links grid */}
          <div className="mt-14 grid gap-14 md:grid-cols-2">
            <ul className="space-y-6 text-xl text-white/85">
              {leftLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="space-y-6 text-xl text-white/85 md:justify-self-center">
              {rightLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM (light strip with terms + socials on same row) */}
      <div className="bg-white text-neutral-700">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid gap-6 md:grid-cols-3 md:items-center">
            <p className="text-lg">
              © {year} styleslings.com
            </p>

            {/* Terms in center */}
            <div className="md:text-center">
              <Link
                href="/terms"
                className="text-lg hover:text-neutral-900 transition"
              >
                Terms and Policies
              </Link>
            </div>

            {/* Social icons on right (next to Terms row) */}
            <div className="flex items-center gap-5 md:justify-end">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900/80 hover:text-neutral-900 transition text-xl"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}