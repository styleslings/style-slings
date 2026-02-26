"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  FiSearch,
  FiUser,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";

const NavLink = ({ href, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-[16px] font-semibold text-neutral-800 hover:text-neutral-950 transition"
  >
    {children}
  </Link>
);

export default function Navbar() {
  // Top changing lines
  const announcements = useMemo(
    () => [
      "New arrivals weekly.",
      "Premium handbags in Pakistan.",
      "Free delivery on selected orders.",
      "Shop the latest bags collection.",
    ],
    []
  );

  const [idx, setIdx] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((p) => (p + 1) % announcements.length);
    }, 2500);
    return () => clearInterval(t);
  }, [announcements.length]);

  // Prevent background scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "New arrivals", href: "/new-arrivals" },
    { label: "Bags", href: "/bags" },
    { label: "Contact us", href: "/contact" },
    { label: "Blogs", href: "/blogs" },
  ];

  const socialItems = [
    { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
    { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
    { icon: <FaTiktok />, href: "https://tiktok.com", label: "TikTok" },
    { icon: <FaYoutube />, href: "https://youtube.com", label: "YouTube" },
    { icon: <FaPinterestP />, href: "https://pinterest.com", label: "Pinterest" },
    { icon: <FaWhatsapp />, href: "https://wa.me/", label: "WhatsApp" },
  ];

  return (
    <header className="w-full">
      {/* 1) Top brown line with changing text */}
      <div className="bg-[#9B6500] text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="h-12 flex items-center justify-between">
            <button
              type="button"
              aria-label="Previous announcement"
              className="p-2 rounded hover:bg-white/10 transition"
              onClick={() =>
                setIdx((p) => (p - 1 + announcements.length) % announcements.length)
              }
            >
              <FiChevronLeft className="text-xl" />
            </button>

            <div className="flex items-center gap-2 text-sm sm:text-base font-medium">
              <span aria-hidden>★</span>
              <p className="text-center">{announcements[idx]}</p>
            </div>

            <button
              type="button"
              aria-label="Next announcement"
              className="p-2 rounded hover:bg-white/10 transition"
              onClick={() => setIdx((p) => (p + 1) % announcements.length)}
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* 2) Main navbar */}
      <div className="bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4">
          <div className="h-20 flex items-center justify-between">
            {/* LEFT */}
            <div className="flex items-center gap-4">
              {/* Mobile: menu + search */}
              <div className="flex items-center gap-2 lg:hidden">
                <button
                  type="button"
                  aria-label="Open menu"
                  className="p-2 rounded hover:bg-neutral-100 transition"
                  onClick={() => setMobileOpen(true)}
                >
                  <FiMenu className="text-2xl text-neutral-900" />
                </button>

                <button
                  type="button"
                  aria-label="Search"
                  className="p-2 rounded hover:bg-neutral-100 transition"
                >
                  <FiSearch className="text-2xl text-neutral-900" />
                </button>
              </div>

              {/* Desktop: navlinks */}
              <nav className="hidden lg:flex items-center gap-10">
                {navItems.map((item) => (
                  <NavLink key={item.href} href={item.href}>
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* CENTER LOGO */}
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/logo.png" // put your logo in /public/logo.png
                alt="Logo"
                width={120}
                height={40}
                priority
                className="h-10 w-auto"
              />
            </Link>

            {/* RIGHT */}
            <div className="flex items-center gap-2">
              {/* Desktop icons: search, account, cart + social */}
              <div className="hidden lg:flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Search"
                  className="p-2 rounded hover:bg-neutral-100 transition"
                >
                  <FiSearch className="text-2xl text-neutral-900" />
                </button>

                <Link
                  href="/account"
                  aria-label="Account"
                  className="p-2 rounded hover:bg-neutral-100 transition inline-flex"
                >
                  <FiUser className="text-2xl text-neutral-900" />
                </Link>

                <Link
                  href="/cart"
                  aria-label="Cart"
                  className="p-2 rounded hover:bg-neutral-100 transition inline-flex"
                >
                  <FiShoppingBag className="text-2xl text-neutral-900" />
                </Link>

                <div className="ml-3 h-6 w-px bg-neutral-200" />

                <div className="flex items-center gap-3">
                  {socialItems.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="text-neutral-900 hover:text-neutral-700 transition text-lg"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile right: account + cart */}
              <div className="flex items-center gap-2 lg:hidden">
                <Link
                  href="/account"
                  aria-label="Account"
                  className="p-2 rounded hover:bg-neutral-100 transition inline-flex"
                >
                  <FiUser className="text-2xl text-neutral-900" />
                </Link>

                <Link
                  href="/cart"
                  aria-label="Cart"
                  className="p-2 rounded hover:bg-neutral-100 transition inline-flex"
                >
                  <FiShoppingBag className="text-2xl text-neutral-900" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <aside
          className={`absolute left-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl transition-transform ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="h-16 px-4 border-b border-neutral-200 flex items-center justify-between">
            <span className="font-semibold text-neutral-900">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              className="p-2 rounded hover:bg-neutral-100 transition"
              onClick={() => setMobileOpen(false)}
            >
              <FiX className="text-2xl text-neutral-900" />
            </button>
          </div>

          {/* Navlinks stacked */}
          <nav className="px-4 py-5 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-[16px] font-semibold text-neutral-900 hover:text-neutral-700 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social icons stacked vertically at bottom */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-neutral-200 p-4">
            <p className="text-xs font-semibold text-neutral-500 mb-3">
              Follow us
            </p>
            <div className="flex flex-col gap-3">
              {socialItems.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-900 hover:text-neutral-700 transition"
                  aria-label={s.label}
                >
                  <span className="text-lg">{s.icon}</span>
                  <span className="text-sm font-medium">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}