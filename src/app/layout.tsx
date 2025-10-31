import type { Metadata } from "next";
import { Averia_Libre, Rubik_Dirt } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Formatie Simulatie - Politieke Gesprekken",
  description:
    "Maak je eigen formatiegesprek en ontdek hoe politieke partijen tot een compromis kunnen komen.",
  keywords: [
    "formatie",
    "gesprekken",
    "politiek",
    "compromis",
    "partijen",
    "Nederland",
  ],
  openGraph: {
    title: "Formatie Simulatie - Politieke Gesprekken",
    description:
      "Maak je eigen formatiegesprek en ontdek hoe politieke partijen tot een compromis kunnen komen.",
    type: "website",
    siteName: "Formatie Simulatie",
    locale: "nl_NL",
    url: baseUrl,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Formatie Simulatie - Politieke Gesprekken",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formatie Simulatie - Politieke Gesprekken",
    description:
      "Maak je eigen formatiegesprek en ontdek hoe politieke partijen tot een compromis kunnen komen.",
    images: ["/og-image.png"],
  },
};

const rubikDirt = Rubik_Dirt({
  variable: "--font-comic",
  subsets: ["latin"],
  weight: ["400"],
});

const funnelDisplay = Averia_Libre({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={cn(
          "bg-radial bg-background-end from-background-start to-background-end min-h-screen",
          rubikDirt.variable,
          funnelDisplay.className
        )}
      >
        <Analytics />
        <Toaster richColors position="top-center" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
