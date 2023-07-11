import "./globals.css";
import { Montserrat } from "next/font/google";
import Providers from "./provider/provider";
import { Toaster } from "react-hot-toast";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/react";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Github Adder - Add users to your github account",
  description: "Add users to your github account",
};

export default async function RootLayout({ children, params }) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={montserrat.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Toaster position="bottom-right" />
            {children}
            <Analytics />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
