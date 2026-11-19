import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const siteTitle = "Gustavo Gouveia — Desenvolvedor Full Stack";
const siteDescription = "Desenvolvedor de software focado em criar experiências digitais modernas, performáticas e bem estruturadas — do backend ao frontend.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  icons: { icon: "/icon.png" },
  metadataBase: new URL("https://gustavogouveia.lat"),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://gustavogouveia.lat",
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
