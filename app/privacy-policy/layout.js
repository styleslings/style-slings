import Script from "next/script";

export const metadata = {
  title: "New Arrivals - Upto 70% Off Women & Girls Bags Online Sale",
  description:
    "Shop stylish ladies bags and handbags for women and girls with upto 70% off. Discover purses, backpacks, and clutches perfect for every look.",
  metadataBase: new URL("https://styleslings.com"),
  openGraph: {
    title: "New Arrivals - Women & Girls Bags | Style Slings",
    description:
      "Shop stylish ladies bags and handbags for women and girls with upto 70% off. Discover purses, backpacks, and clutches perfect for every look.",
    url: "https://styleslings.com/products",
    siteName: "Style Slings",
    images: [
      {
        url: "/images/logo-ss.png",
        width: 1200,
        height: 630,
        alt: "Style Slings New Arrivals",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Arrivals - Women & Girls Bags | Style Slings",
    description:
      "Shop stylish ladies bags and handbags for women and girls with upto 70% off. Discover purses, backpacks, and clutches perfect for every look.",
    images: ["/images/logo-ss.png"],
  },
  alternates: {
    canonical: "/products",
  },
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Products",
      item: "https://styleslings.com/products",
    },
  ],
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "New Arrivals - Women & Girls Bags",
  url: "https://styleslings.com/products",
  description:
    "Shop stylish ladies bags and handbags for women and girls with upto 70% off. Discover purses, backpacks, and clutches perfect for every look.",
};

export default function ProductsLayout({ children }) {
  return (
    <>
      <Script
        id="products-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <Script
        id="products-collection-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(collectionPageSchema)}
      </Script>

      {children}
    </>
  );
}