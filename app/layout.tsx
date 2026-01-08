import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gustavo Gouveia — Desenvolvedor Full Stack",
  description: "Desenvolvedor de software focado em criar experiências digitais modernas, performáticas e bem estruturadas — do backend ao frontend.",
  icons: {
    icon: "/icon.png",
  },
  metadataBase: new URL('https://gustavogouveia.lat'),
  openGraph: {
    title: "Gustavo Gouveia — Desenvolvedor Full Stack",
    description: "Desenvolvedor de software focado em criar experiências digitais modernas, performáticas e bem estruturadas — TypeScript, React, Next.js, Node.js",
    url: 'https://gustavogouveia.lat',
    siteName: 'Gustavo Gouveia',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Gustavo Gouveia — Desenvolvedor Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Gustavo Gouveia — Desenvolvedor Full Stack",
    description: "Desenvolvedor de software focado em criar experiências digitais modernas, performáticas e bem estruturadas — do backend ao frontend.",
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
