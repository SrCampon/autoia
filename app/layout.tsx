import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: "AutoIA - Automatización e Inteligencia Artificial para Negocios",
    template: "%s | AutoIA",
  },
  description:
    "Transformamos tu negocio con automatización e IA. Chatbots WhatsApp, generación de contenido, automatización administrativa y análisis inteligente. Consulta gratuita.",
  keywords: [
    "automatización",
    "inteligencia artificial",
    "IA",
    "chatbots WhatsApp",
    "automatización de procesos",
    "n8n",
    "ChatGPT",
    "automatización administrativa",
    "generación de contenido IA",
    "análisis de datos",
    "Miguel Ángel",
    "AutoIA",
    "negocios locales",
    "productividad",
    "transformación digital",
  ],
  authors: [{ name: "Miguel Ángel", url: "https://autoia.com" }],
  creator: "Miguel Ángel - AutoIA",
  publisher: "AutoIA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://autoia.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AutoIA - Automatización e Inteligencia Artificial para Negocios",
    description:
      "Transformamos tu negocio con automatización e IA. Chatbots WhatsApp, generación de contenido, automatización administrativa. Consulta gratuita.",
    url: "https://autoia.com",
    siteName: "AutoIA",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AutoIA - Automatización e Inteligencia Artificial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoIA - Automatización e IA para Negocios",
    description:
      "Transformamos tu negocio con automatización e IA. Chatbots WhatsApp, generación de contenido, automatización administrativa.",
    images: ["/twitter-image.jpg"],
    creator: "@autoia_es",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
    yandex: "tu-codigo-de-verificacion-yandex",
  },
  category: "technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#059669" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
