import type { Metadata } from "next";
import { dir } from 'i18next';

import { inter, roboto } from "@/common/fonts";
import "@/common/globals.css";

const languages = ['en', 'es'];

export const metadata: Metadata = {
  title: {
    template: '%s | Teloa',
    default: 'Teloa Landings',
  },
  description: 'insert description here',
  // metadataBase: new URL('https://teloa.com'),
  /* themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	], */
  /* icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	}, */
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: 'es' | 'en' };
}) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <body className={`${inter.className} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
