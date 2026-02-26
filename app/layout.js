import './globals.css';

export const metadata = {
  title: 'Interior Design Dubai | Luxury Designers | We Do Interior',
  description:
    'Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.',
  metadataBase: new URL('https://wedointerior.ae/'),
  openGraph: {
    title: 'Interior Design Dubai | Luxury Designers | We Do Interior',
    description:
      'Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.',
    url: 'https://wedointerior.ae/',
    siteName: 'we do interior design',
    images: [
      {
        url: '/images/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Interior Blog Banner',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Dubai | Luxury Designers | We Do Interior',
    description:
      'Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.',
    images: ['/images/logo.svg'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag (gtag.js) for AW-11361089409 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11361089409"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11361089409');
            `,
          }}
        />

        {/* Google Analytics (gtag.js) for G-1DX7X8GKN2 */}
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-1DX7X8GKN2"
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-1DX7X8GKN2');
    `,
  }}
/>


        {/* Robots Meta Tag */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'we do interior design',
              url: 'https://wedointerior.ae/',
              logo: {
                '@type': 'ImageObject',
                url: 'https://wedointerior.ae/images/logo.svg',
                width: 600,
                height: 60,
              },
              sameAs: [
                'https://www.instagram.com/yourprofile',
                'https://www.facebook.com/yourprofile',
              ],
            }),
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'we do interior design',
              url: 'https://wedointerior.ae/',
              description:
                'Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.',
            }),
          }}
        />

        {/* BlogPosting Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: 'Modern Interior Design in Dubai',
              description:
                'Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.',
              url: 'https://wedointerior.ae/',
              author: {
                '@type': 'Organization',
                name: 'we do interior design',
              },
              publisher: {
                '@type': 'Organization',
                name: 'we do interior design',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://wedointerior.ae/images/logo.svg',
                  width: 600,
                  height: 60,
                },
              },
              mainEntityOfPage: 'https://wedointerior.ae/',
              image: {
                '@type': 'ImageObject',
                url: 'https://wedointerior.ae/images/logo.svg',
                width: 1200,
                height: 630,
              },
              datePublished: '2025-06-22',
            }),
          }}
        />

        {/* Site Navigation Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'SiteNavigationElement',
                  position: 1,
                  name: 'About Us',
                  url: 'https://wedointerior.ae/about-us',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 2,
                  name: 'Apartment Interior Design Dubai',
                  url: 'https://wedointerior.ae/apartment-interior-design-dubai',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 3,
                  name: 'Villa Interior Design Dubai',
                  url: 'https://wedointerior.ae/villa-interior-design-dubai',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 4,
                  name: 'Gallery',
                  url: 'https://wedointerior.ae/projects',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 5,
                  name: 'Contact Us',
                  url: 'https://wedointerior.ae/contact-us',
                },
              ],
            }),
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://wedointerior.ae/',
                },
              ],
            }),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Interior Design and Fit Out',
              provider: {
                '@type': 'Organization',
                name: 'we do interior design',
                url: 'https://wedointerior.ae',
              },
              areaServed: {
                '@type': 'Place',
                name: 'Dubai, UAE',
              },
              url: 'https://wedointerior.ae/',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}