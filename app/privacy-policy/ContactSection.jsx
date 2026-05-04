"use client";

import React from "react";

function SectionHeading() {
  return (
    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl text-zinc-800 sm:text-5xl lg:text-6xl">
        Privacy Policy
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
        Your privacy matters to us. This page explains how we collect, use, and
        protect your personal information when you use our website and services.
      </p>
    </div>
  );
}

function PolicyCard({ title, children }) {
  return (
    <div className="rounded-[28px] bg-white p-6 shadow-sm sm:p-8">
      <h2 className="font-serif text-2xl text-zinc-800">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-zinc-600">{children}</div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <section className="relative overflow-hidden bg-[#fbf8f7] py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading />

        <div className="mt-12 space-y-6">
          <PolicyCard title="1. Information We Collect">
            We may collect personal details such as your name, email address,
            phone number, and shipping details when you place an order or
            contact us. We also collect non-personal data like browser type,
            device information, and website usage statistics.
          </PolicyCard>

          <PolicyCard title="2. How We Use Your Information">
            Your information is used to process orders, provide customer
            support, improve our services, and send updates related to your
            purchases. We may also use your email for promotional offers if you
            opt in.
          </PolicyCard>

          <PolicyCard title="3. Data Protection">
            We take appropriate security measures to protect your personal
            data from unauthorized access, alteration, disclosure, or
            destruction. However, no online transmission is 100% secure.
          </PolicyCard>

          <PolicyCard title="4. Sharing of Information">
            We do not sell or rent your personal information. We may share
            data with trusted third-party services (such as delivery partners
            or payment processors) only when necessary to complete your order.
          </PolicyCard>

          <PolicyCard title="5. Your Rights">
            You may request access, correction, or deletion of your personal
            data by contacting us. You can also opt out of marketing emails at
            any time.
          </PolicyCard>

          <PolicyCard title="6. Changes to This Policy">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </PolicyCard>

          <PolicyCard title="7. Contact Us">
            If you have any questions about this Privacy Policy, you can
            contact us via email or WhatsApp through our support channels.
          </PolicyCard>
        </div>

        <div className="mt-12 text-center text-xs text-zinc-500">
          Last updated: May 2026
        </div>
      </div>
    </section>
  );
}