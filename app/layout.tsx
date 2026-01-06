import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const url = process.env.NEXT_BASE_URL;
const title = "Walloquence - HD Wallpapers";
const description = "Discover and download high-quality wallpapers";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Walloquence",
  },
  description,
  keywords: [
    "wallpapers",
    "hd wallpapers",
    "desktop backgrounds",
    "4k wallpapers",
  ],
  authors: [{ name: "Ahmed Yasser" }, { name: "SnowCoding" }],
  creator: "Ahmed Yasser - SnowCoding",
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    images: [
      {
        url: "/images/opengraph.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/opengraph.png"],
  },
  // Disable automatic viewport scaling
  metadataBase: new URL(url as string),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};
console.log(url)

const plustJakartaSans = localFont({
  src: "../public/fonts/PlusJakartaSans.ttf",
  variable: "--font-plus-jakarta-Sans",
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Arial",
    "sans-serif",
  ],
  adjustFontFallback: "Arial",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://w.wallhaven.cc"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://th.wallhaven.cc"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://wallhaven.cc" />
        <link rel="preconnect" href={"https://wallhaven.cc"} />
        {/* Preload critical resources */}
        {/* Only if you have custom fonts in /public */}
        <link
          rel="preload"
          href="/fonts/PlusJakartaSans.ttf"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${plustJakartaSans.variable} bg-background-light dark:bg-background-dark antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] h-[50%] w-[50%] rounded-full bg-blue-500/10 mix-blend-multiply blur-[120px] dark:mix-blend-screen" />
            <div className="absolute top-[20%] -right-[10%] h-[40%] w-[40%] rounded-full bg-purple-500/10 mix-blend-multiply blur-[120px] dark:mix-blend-screen" />
            <div className="absolute -bottom-[10%] left-[20%] h-[40%] w-[40%] rounded-full bg-pink-500/10 mix-blend-multiply blur-[120px] dark:mix-blend-screen" />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
