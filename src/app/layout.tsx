import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osra Almousavi ",
  description: "Here is my portfolio, you can see my projects and contact me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image1.png" />
      </head>
      <body className={inter.className}>
        {children} 
      </body>
    </html>
  );
}