import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "@/components/cart-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ventexshop.nl"),
  title: {
    default: "VENTEX | Digital, done beautifully.",
    template: "%s | VENTEX",
  },
  description:
    "Shop Nitro, boosts and digital extras at VENTEX. Browse products, check out securely and follow your orders in one place.",
  applicationName: "VENTEX",
  openGraph: {
    title: "VENTEX | Digital, done beautifully.",
    description:
      "Shop Nitro, boosts and digital extras at VENTEX. Browse products, check out securely and follow your orders in one place.",
    url: "https://ventexshop.nl",
    siteName: "VENTEX",
    type: "website",
  },
  icons: {
    icon: "/ventex-logo.png",
    shortcut: "/ventex-logo.png",
    apple: "/ventex-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full bg-[#070707] text-white">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
