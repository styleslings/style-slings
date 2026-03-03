"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  const year = new Date().getFullYear();

  const informationLinks = useMemo(
    () => [
      { label: "Online Order Tracking", href: "#" },
      { label: "Size Chart", href: "#" },
      { label: "Shipping Policy", href: "#" },
      { label: "Returns & Exchange Policy", href: "#" },
      { label: "Discount Policy", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Sustainability", href: "#" },
      { label: "FAQs", href: "#" },
    ],
    []
  );

  const aboutLinks = useMemo(
    () => [
      { label: "Our Story", href: "#" },
      { label: "Career@Stylo", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Blogs", href: "#" },
      { label: "Download Our App", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Store Locations", href: "#" },
      { label: "Join Franchise Program", href: "#" },
    ],
    []
  );

  const exploreLinks = useMemo(
    () => [
      { label: "New In", href: "#" },
      { label: "Women Shoes", href: "#" },
      { label: "Bags", href: "#" },
      { label: "Kids", href: "#" },
      { label: "Accessories", href: "#" },
      { label: "Sale", href: "#" },
      { label: "Stylo WhatsApp Channel", href: "#" },
    ],
    []
  );

  return (
    <footer className="bg-[#f3f3f3] text-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* 5 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Column 1 - Get In Touch */}
          <div>
            <h4 className="uppercase tracking-[4px] text-sm mb-6">
              Get In Touch
            </h4>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold">Phone:</p>
                <p>+92-42-111-178-956</p>
              </div>

              <div>
                <p className="font-semibold">Email:</p>
                <p>care@stylo.pk</p>
              </div>

              <div>
                <p className="font-semibold">Customer Care Timings:</p>
                <p>
                  Monday to Saturday, 09:00 AM to 09:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 - Information */}
          <div>
            <h4 className="uppercase tracking-[4px] text-sm mb-6">
              Information
            </h4>
            <ul className="space-y-3 text-sm">
              {informationLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - About */}
          <div>
            <h4 className="uppercase tracking-[4px] text-sm mb-6">
              About
            </h4>
            <ul className="space-y-3 text-sm">
              {aboutLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Explore */}
          <div>
            <h4 className="uppercase tracking-[4px] text-sm mb-6">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Newsletter */}
          <div>
            <h4 className="uppercase tracking-[4px] text-sm mb-6">
              Sign Up And Save
            </h4>

            <p className="text-sm mb-6">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>

            {/* Underline Input */}
            <div className="flex items-center border-b border-neutral-600 pb-2 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none text-sm w-full placeholder:text-neutral-500"
              />
              <HiOutlineMail className="text-xl" />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 text-xl">
              <FaInstagram className="cursor-pointer hover:opacity-70" />
              <FaFacebookF className="cursor-pointer hover:opacity-70" />
              <FaYoutube className="cursor-pointer hover:opacity-70" />
              <FaXTwitter className="cursor-pointer hover:opacity-70" />
              <FaPinterestP className="cursor-pointer hover:opacity-70" />
              <FaLinkedinIn className="cursor-pointer hover:opacity-70" />
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-sm mt-16">
          © {year} Stylo | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}