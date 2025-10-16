import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Les Saveurs du Cameroun | Restaurant Camerounais Authentique",
  description:
    "Découvrez les saveurs authentiques du Cameroun dans notre restaurant. Cuisine traditionnelle, plats emblématiques et ambiance chaleureuse.",
  keywords: "restaurant camerounais, cuisine africaine, plats traditionnels, Cameroun, restaurant authentique",
  openGraph: {
    title: "Les Saveurs du Cameroun",
    description: "Restaurant camerounais authentique",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${inter.variable} ${cormorant.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
