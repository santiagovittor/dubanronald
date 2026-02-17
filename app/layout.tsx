import "./globals.css"
import type { Metadata } from "next"
import Script from "next/script"
import { Inter } from "next/font/google"
import MetaPixelPageView from "@/components/MetaPixelPageView"

export const metadata: Metadata = {
  metadataBase: new URL("https://dubanronald.com"),
  title: "Duban Ronald | Growth systems for digital acquisition",
  description:
    "Digital marketing and growth systems for teams that treat marketing as a continuous system, not isolated campaigns.",
  robots: { index: true, follow: true },
  themeColor: "#0b0b0b",
  openGraph: {
    title: "Duban Ronald | Growth systems for digital acquisition",
    description:
      "Digital acquisition, paid media, and performance infrastructure for teams that treat marketing as a system, not a campaign.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duban Ronald | Growth systems for digital acquisition",
    description:
      "Digital acquisition, paid media, and performance infrastructure for teams that treat marketing as a system, not a campaign.",
  },
  alternates: {
    languages: {
      en: "https://dubanronald.com/",
      es: "https://dubanronald.com/es",
    },
  },
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim()

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Duban Ronald",
    url: "https://dubanronald.com",
    email: "hello@dubanronald.com",
    areaServed: "Worldwide",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "business inquiries",
        email: "hello@dubanronald.com",
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        {/* Debug helper: check this in view-source to confirm env is present */}
        <meta
          name="debug-meta-pixel-id"
          content={metaPixelId && metaPixelId.length ? metaPixelId : "MISSING"}
        />

        {/* Meta Pixel (load early) */}
        {metaPixelId ? (
          <Script id="meta-pixel" strategy="beforeInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', ${JSON.stringify(metaPixelId)});
              fbq('track', 'PageView');
            `}
          </Script>
        ) : null}

        {/* Google Analytics */}
        {gaId ? (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
      </head>

      <body className={inter.className}>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />

        {/* Meta Pixel noscript fallback */}
        {metaPixelId ? (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        ) : null}

        {/* PageView on client-side route changes */}
        <MetaPixelPageView />

        {children}
      </body>
    </html>
  )
}
