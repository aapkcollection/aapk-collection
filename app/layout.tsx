import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AAPK Collection | Contemporary Pakistani Fashion",
  description: "Premium embroidered ladies and gents collections by AAPK Collection.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
