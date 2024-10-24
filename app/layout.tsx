import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  weight: '400',
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: "mvp-tasker",
  description: "mvp-tasker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
