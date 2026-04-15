"use client";

import React from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  Clock3,
  MapPin,
  ChevronDown,
  Package,
  RefreshCw,
  Briefcase,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

const contactDetails = [
  {
    icon: Phone,
    title: "Customer Support",
    text: "+92 XXX XXXX XXXX",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    text: "Chat with us for quick assistance",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Mail,
    title: "Email Us:",
    text: "hello@yourbrand.pk",
  },
  {
    icon: Clock3,
    title: "Customer Care Hours",
    text: "Monday to Saturday\n10:00 AM – 8:00 PM",
  },
  {
    icon: MapPin,
    title: "Based in Pakistan",
    text: "Delivering stylish ladies bags nationwide",
  },
];

const quickHelpItems = [
  {
    icon: Package,
    title: "Order Tracking",
    text: "Track your order status easily",
  },
  {
    icon: RefreshCw,
    title: "Returns & Exchanges",
    text: "Learn about our return policy",
  },
  {
    icon: Briefcase,
    title: "Bag Care Guide",
    text: "Tips to keep your bags beautiful for longer",
  },
];

function SectionHeading() {
  return (
    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl text-zinc-800 sm:text-5xl lg:text-6xl">
        Contact Us
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
        Have a question about your order, need help selecting the perfect bag,
        or want to know more about our latest arrivals? Our team is always here
        to assist you.
      </p>
    </div>
  );
}

function ContactInfoCard() {
  return (
    <div className="rounded-[28px] bg-[#f5efec]/80 p-5 shadow-sm backdrop-blur sm:p-6">
      <h2 className="font-serif text-2xl text-[#9f7b78]">Contact Information</h2>

      <div className="mt-6 space-y-5">
        {contactDetails.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="border-b border-[#e8dfdb] pb-5 last:border-b-0 last:pb-0"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#efe6e2] ${
                    item.iconBg || ""
                  }`}
                >
                  <Icon className={`h-5 w-5 text-[#a38582] ${item.iconColor || ""}`} />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-zinc-800">{item.title}</h3>
                  <p className="mt-1 whitespace-pre-line text-sm leading-6 text-zinc-600">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center gap-3">
        {[FaFacebookF, FaInstagram, FaPinterestP].map((Icon, index) => (
          <button
            key={index}
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#efe6e2] text-[#a38582] transition hover:bg-[#e6d7d1]"
          >
            <Icon className="h-4 w-4" />
          </button>
        ))}
      </div>
    </div>
  );
}

function Input({ label, type = "text", placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-[#e8dfdb] bg-white px-4 text-sm text-zinc-700 outline-none transition placeholder:text-zinc-400 focus:border-[#c9a5a3] focus:ring-2 focus:ring-[#e8d0cf]"
      />
    </div>
  );
}

function SelectField({ label, options }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
        {label}
      </label>

      <div className="relative">
        <select className="h-12 w-full appearance-none rounded-xl border border-[#e8dfdb] bg-white px-4 pr-10 text-sm text-zinc-700 outline-none transition focus:border-[#c9a5a3] focus:ring-2 focus:ring-[#e8d0cf]">
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
      </div>
    </div>
  );
}

function TextareaField({ label, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
        {label}
      </label>
      <textarea
        rows={6}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#e8dfdb] bg-white px-4 py-3 text-sm text-zinc-700 outline-none transition placeholder:text-zinc-400 focus:border-[#c9a5a3] focus:ring-2 focus:ring-[#e8d0cf]"
      />
    </div>
  );
}

function ContactFormCard() {
  return (
    <div className="rounded-[28px] bg-white p-5 sm:p-6 lg:p-8">
      <h2 className="font-serif text-3xl text-zinc-800">Get in Touch</h2>

      <form className="mt-8 space-y-5">
        <Input label="Full Name" placeholder="Enter your full name" />
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email address"
        />
        <SelectField
          label="Subject"
          options={[
            "Order Inquiry",
            "General Support",
            "Returns & Exchanges",
            "Collaboration",
          ]}
        />
        <TextareaField label="Message" placeholder="Write your message here..." />

        <div className="pt-1">
          <button
            type="submit"
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#c98f93] px-8 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#bb7f84]"
          >
            Send Message
          </button>
        </div>

        <p className="text-xs leading-5 text-zinc-500">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </form>
    </div>
  );
}

function QuickHelpCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-[24px] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f2e9e6] text-[#b58f8b]">
          <Icon className="h-5 w-5" />
        </div>

        <div>
          <h3 className="font-serif text-2xl leading-tight text-zinc-800">{title}</h3>
          <p className="mt-2 max-w-[18rem] text-sm leading-7 text-zinc-600">{text}</p>
        </div>
      </div>
    </div>
  );
}

function QuickHelpSection() {
  return (
    <section className="mt-16">
      <div className="text-center">
        <h2 className="font-serif text-3xl text-zinc-800 sm:text-4xl">
          Need Quick Help?
        </h2>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {quickHelpItems.map((item, index) => (
          <QuickHelpCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

function WhatsAppBanner() {
  return (
    <section className="mt-10">
      <div className="relative overflow-hidden rounded-[28px] border border-[#e7e0da] bg-[#efefea] px-5 py-8 shadow-sm sm:px-8">
        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-green-600 shadow-sm">
          <MessageCircle className="h-5 w-5" />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base text-zinc-700 sm:text-lg">
            Need instant help? Chat with us on{" "}
            <span className="font-semibold">WhatsApp</span> for quick order
            support.
          </p>

          <button
            type="button"
            className="mt-6 inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#9eaf9a] px-8 text-base font-semibold text-white transition hover:bg-[#8fa18b]"
          >
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#fbf8f7] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(251,248,247,0.75),transparent_75%)]" />
      <div className="pointer-events-none absolute right-0 top-0 hidden h-[340px] w-[300px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),rgba(245,239,236,0.3),transparent_70%)] lg:block" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading />

        <div className="mt-12 rounded-[32px] bg-white/70 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur sm:p-5 lg:p-7">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.25fr]">
            <ContactInfoCard />
            <ContactFormCard />
          </div>
        </div>

        <QuickHelpSection />
        <WhatsAppBanner />
      </div>
    </section>
  );
}
