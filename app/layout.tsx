import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "./globals.css";

const font = Bitter({ subsets: ["latin"], variable: '--font-bitter' });

export const metadata: Metadata = {
  title: "Full Stack Developer | Available For Hire | Cristian Giordano",
  description: "A highly experienced, consistent full stack developer combining a deep, extensive knowledge of the latest break-through techniques and technologies with strong problem solving skills to create solutions that deliver greater impact and increased efficiency for clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable} font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover md:bg-gray-100`}>{children}</body>
    </html>
  );
}
