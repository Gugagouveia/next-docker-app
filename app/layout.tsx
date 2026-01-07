import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gustavo Gouveia",
  description: "Portfólio de Gustavo Gouveia — Engenharia de Software",
  icons: {
    icon: "/icon.png",
  },
  metadataBase: new URL('https://gustavogouveia.dev'),
  openGraph: {
    title: "Gustavo Gouveia — Engenharia de Software",
    description: "Desenvolvedor de software focado em criar experiências digitais modernas, performáticas e bem estruturadas — do backend ao frontend.",
    url: 'https://gustavogouveia.dev',
    siteName: 'Gustavo Gouveia',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Gustavo Gouveia — Engenharia de Software",
    description: "Desenvolvedor de software focado em criar experiências digitais modernas, performáticas e bem estruturadas — do backend ao frontend.",
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
