import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/app/components/layout/Navbar'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-br from-indigo-50 via-white to-cyan-100'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
