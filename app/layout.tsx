import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gustavo Gouveia",
  description: "Portfólio de Gustavo Gouveia — Engenharia de Software",
  icons: {
    icon: "/icon.png",
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
