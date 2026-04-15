import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Style Slings | Sale Upto 70% Off - Women & Ladies Bags",
  description:
    "Shop stylish women and ladies bags at Style Slings. Enjoy sale upto 70% off on handbags, totes, and everyday essentials. Limited time offer.",
  metadataBase: new URL("https://styleslings.com"),
  openGraph: {
    title: "Style Slings | Women & Ladies Bags in Pakistan",
    description:
      "Shop stylish women and ladies bags at Style Slings. Discover handbags, totes, shoulder bags, and everyday essentials.",
    url: "https://styleslings.com",
    siteName: "Style Slings",
    images: [
      {
        url: "/images/logo-ss.png",
        width: 1200,
        height: 630,
        alt: "Style Slings Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Style Slings | Women & Ladies Bags in Pakistan",
    description:
      "Shop stylish women and ladies bags at Style Slings. Discover handbags, totes, shoulder bags, and everyday essentials.",
    images: ["/images/logo-ss.png"],
  },
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Style Slings",
  url: "https://styleslings.com",
  logo: {
    "@type": "ImageObject",
    url: "https://styleslings.com/images/logo-ss.png",
    width: 600,
    height: 60,
  },
  sameAs: [
    "https://www.instagram.com/yourprofile",
    "https://www.facebook.com/yourprofile",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Style Slings",
  url: "https://styleslings.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://styleslings.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Style Slings",
  url: "https://styleslings.com",
  description:
    "Shop stylish women and ladies bags at Style Slings. Discover handbags, totes, shoulder bags, and everyday essentials.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://styleslings.com",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11361089409"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1DX7X8GKN2"
          strategy="afterInteractive"
        />

        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'AW-11361089409');
            gtag('config', 'G-1DX7X8GKN2');
          `}
        </Script>

        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(organizationSchema)}
        </Script>

        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(websiteSchema)}
        </Script>

        <Script
          id="webpage-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(webpageSchema)}
        </Script>

        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(breadcrumbSchema)}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}