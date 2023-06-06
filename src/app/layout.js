import Banner from "@/components/Banner";
import "./globals.css";
import { Inter, Roboto_Flex as Roboto } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Talkdesk Exercise",
  description: "Exercise part of the Talkdesk recruitment process",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} bg-gray-50 pb-10 font-sans text-gray-900`}
      >
        <Banner />
        <div className="mx-auto max-w-[1360px] px-8">{children}</div>
      </body>
    </html>
  );
}
