import type { Metadata } from "next";
import "./globals.css";
import { SITE_INFO } from "@/constants/content";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const siteTitle = `${SITE_INFO.name} — ${SITE_INFO.title}`;
const siteDescription = `${SITE_INFO.description} Experiência em aplicações web e mobile, APIs REST e mensageria. Recife, PE.`;

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg" },
  metadataBase: new URL(SITE_INFO.website),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: SITE_INFO.website,
    siteName: "Gustavo Gouveia",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteTitle }],
  },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescription, images: ["/opengraph-image"] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
