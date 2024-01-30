import type { Metadata } from "next";
import "@/common/globals.css";
import { Providers } from "@/common/providers";
import { inter, roboto } from "@/common/fonts";
import { i18n, type Locale } from "../../../i18n-config";

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
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={`${inter.className} ${roboto.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
