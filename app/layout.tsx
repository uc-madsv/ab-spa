"use client";

import "./globals.css";

import localFont from "next/font/local";
import { useSearchParams } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams();

  const isLocalHost = searchParams.get("localhost") === "true"; 
  
  const abScriptSrc = isLocalHost
    ? "http://localhost:4445/autoblocker.js"
    : "https://web.cmp.usercentrics-sandbox.eu/ui/modules/autoblocker.js";

  const cmpScriptSrc = isLocalHost
    ? "http://localhost:1111/loader.js"
    : "https://web.cmp.usercentrics-sandbox.eu/ui/loader.js";

  return (
    <html lang="en">
      <head>
        {/* Inject external scripts using next/head */}
        <head>
          {/* eslint-disable-next-line */}
          <script src={abScriptSrc}></script>
          <script
            src={cmpScriptSrc}
            data-settings-id="H8UPjXU8uQQ7GP"
            id="usercentrics-cmp"
            async
          ></script>
        </head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
