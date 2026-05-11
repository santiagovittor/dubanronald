import "./globals.css"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { Suspense } from "react"
import MetaPixelPageView from "@/components/MetaPixelPageView"
import MeshGradient from "@/components/MeshGradient"

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://dubanronald.com"),
  title: "Duban Ronald | Growth systems for digital acquisition",
  description:
    "Digital marketing and growth systems for teams that treat marketing as a continuous system, not isolated campaigns.",
  robots: { index: true, follow: true },
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

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
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
    <html lang="en" className={cormorant.variable}>
      <body className={inter.className}>
        <MeshGradient />

        {/* Org schema */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />

        {/* Meta Pixel */}
        {metaPixelId ? (
          <>
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

            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>

            {/* REQUIRED for useSearchParams() inside MetaPixelPageView */}
            <Suspense fallback={null}>
              <MetaPixelPageView />
            </Suspense>
          </>
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

        {/* Typeform popup */}
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="//embed.typeform.com/next/css/popup.css" />
        <Script
          src="//embed.typeform.com/next/embed.js"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  )
}
