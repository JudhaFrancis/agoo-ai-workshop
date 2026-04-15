import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI in Daily Work: Prompts, Productivity & Automation | Agoo Technology",
  description: "Join our 2-hour live interactive workshop and master AI tools for daily work success. Save hours daily with practical AI skills.",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "AI in Daily Work | Agoo Technology",
    description: "Master AI tools for daily work success. Join our Premiere Batch.",
    images: [{ url: '/logo.png', width: 900, height: 900, alt: 'Agoo Technology Logo' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI in Daily Work | Agoo Technology",
    description: "Master AI tools for daily work success.",
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter">{children}</body>
    </html>
  );
}

