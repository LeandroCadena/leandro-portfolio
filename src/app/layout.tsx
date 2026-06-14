import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leandro Cadena | Full Stack Developer",
  description:
    "Portfolio of Leandro Cadena, Full Stack Developer focused on React, Node.js, TypeScript, APIs, payroll systems and cloud technologies.",
  keywords: [
    "Leandro Cadena",
    "Full Stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Portfolio",
    "Software Developer",
  ],
  authors: [{ name: "Leandro Cadena" }],
  openGraph: {
    title: "Leandro Cadena | Full Stack Developer",
    description:
      "Full Stack Developer portfolio with GitHub projects, resume and professional experience.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}