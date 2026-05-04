"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  const year = new Date().getFullYear();

  const informationLinks = useMemo(
    () => [
      
      { label: "Shipping Policy", href: "#" },
      { label: "Returns & Exchange Policy", href: "#" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "FAQs", href: "#" },
    ],
    []
  );

  const aboutLinks = useMemo(
    () => [
      { label: "Our Story", href: "about-us" },
      { label: "Contact Us", href: "contact-us" },
      { label: "Blogs", href: "blogs" },
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
                <p>styleslingss@gmail.com</p>
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

        

          {/* Column 5 - Newsletter */}
          <div>
            <h4 className="uppercase tracking-[4px] text-sm mb-6">
             Get 10% off your first order
            </h4>

            <p className="text-sm mb-6">
             Enjoy a special welcome offer on your first purchase. Limited time only.
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
  
  <a href="https://www.instagram.com/styleslingss/" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="cursor-pointer hover:opacity-70" />
  </a>

  <a href="https://www.facebook.com/923698307503097" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="cursor-pointer hover:opacity-70" />
  </a>
<a href="https://www.tiktok.com/@styleslings" target="_blank" rel="noopener noreferrer">
    <FaTiktok className="cursor-pointer hover:opacity-70" />
  </a>

</div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-sm mt-16">
          © {year} StyleSlings | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}