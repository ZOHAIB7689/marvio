import type { Metadata } from "next";
import { fonts } from "../lib/chakra/font";
import { ChakraProvider } from "@/lib/chakra/ChakraProvider";
import "./globals.css";


export const metadata: Metadata = {
  title: "Marvio",
  description: "A Digital webstore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
