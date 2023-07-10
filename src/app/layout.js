import "./globals.css";
import { Montserrat } from "next/font/google";
import Providers from "./provider/provider";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Github Adder - Add users to your github account",
  description: "Add users to your github account",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body className={montserrat.className}>
        <Providers>
          <Toaster position="bottom-right" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
