import "./globals.css";
import { Montserrat } from "next/font/google";
import Providers from "./provider/provider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Github Adder - Add users to your github account",
  description: "Add users to your github account",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={montserrat.className}>{children}</body>
      </Providers>
    </html>
  );
}
