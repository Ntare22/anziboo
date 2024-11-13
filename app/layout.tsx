import type { Metadata } from "next";
import "./globals.css";
import { ABeeZee } from 'next/font/google';

export const metadata: Metadata = {
  title: "Anziboo",
  description: "Anziboo official website",
};

const abeezee = ABeeZee({
  weight: ['400'],    
  subsets: ['latin'],   
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={abeezee.className}
      >
        {children}
      </body>
    </html>
  );
}
