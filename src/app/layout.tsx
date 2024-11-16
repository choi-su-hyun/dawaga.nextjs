import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import "@/style/common.scss";
import Header from "@/components/common/Header/Header";
import Head from "next/head";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "다와가 | Dawaga",
  description: "약속 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body className={`${pretendard.variable}`}>
        <div id="modal"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
