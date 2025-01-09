import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import {Lato} from "next/font/google"
export const metadata: Metadata = {
  title: "Marvio",
  description: "A Digital webstore",
};

const lato = Lato({
  subsets:["latin"],
  weight:["400" , "700"]
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={lato.className}suppressHydrationWarning lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}