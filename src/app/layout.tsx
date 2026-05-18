import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victor Giovani | Desenvolvedor Júnior e AI Automation Builder",
  description:
    "Portfólio de Victor Giovani, desenvolvedor júnior focado em IA, automações, integrações, MVPs e desenvolvimento web com fluxo AI-first.",
  keywords: [
    "Victor Giovani",
    "Desenvolvedor Júnior",
    "AI Automation Builder",
    "IA",
    "automações",
    "integrações",
    "MVPs",
    "Next.js",
    "TypeScript",
    "Tailwind CSS"
  ],
  authors: [{ name: "Victor Giovani" }],
  creator: "Victor Giovani",
  openGraph: {
    title: "Victor Giovani | Desenvolvedor Júnior e AI Automation Builder",
    description:
      "Portfólio de Victor Giovani, desenvolvedor júnior focado em IA, automações, integrações, MVPs e desenvolvimento web com fluxo AI-first.",
    type: "website",
    locale: "pt_BR",
    siteName: "Portfólio Victor Giovani"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
