import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { Raleway } from "next/font/google";
import Navbar from "@/components/Navebr";
import ThemeProvider from "@/context/Theme";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Rental.",
  description:
    "car rental service, KIA Honda Toyota BMW all big brands car for rent service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ThemeProvider>
        <html lang="en">
          <head>
            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
            <meta name="theme-color" content="#f5f2ef" />
          </head>
          <body className={`${inter.className}  `}>
            <Navbar />
            <div className="flex mx-auto w-[90%] justify-center">
              <ApolloWrapper>{children}</ApolloWrapper>
            </div>
          </body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  );
}
