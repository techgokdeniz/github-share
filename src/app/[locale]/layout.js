import "./globals.css";
import { Montserrat } from "next/font/google";
import Providers from "./provider/provider";
import { Toaster } from "react-hot-toast";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Github Adder - Add users to your github account",
  description: "Add users to your github account",
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={montserrat.className}>
        <Providers>
          <Toaster position="bottom-right" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
