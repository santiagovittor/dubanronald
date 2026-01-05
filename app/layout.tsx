import "./globals.css"
import type { Metadata } from "next"
import Script from "next/script"
import { Inter } from "next/font/google"

export const metadata: Metadata = {
  title: "Duban Ronald | Growth systems for digital acquisition",
  description:
    "Digital marketing and growth systems for teams that treat marketing as a continuous system, not isolated campaigns.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Duban Ronald — growth systems for digital acquisition",
    description:
      "Digital acquisition, paid media, and performance infrastructure for teams that treat marketing as a system, not a campaign.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duban Ronald — growth systems for digital acquisition",
    description:
      "Digital acquisition, paid media, and performance infrastructure for teams that treat marketing as a system, not a campaign.",
  },
  alternates: {
    languages: { en: "/", es: "/es" },
  },
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="en">
      <body className={inter.className}>
        {gaId ? (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}

        {children}
      </body>
    </html>
  )
}
