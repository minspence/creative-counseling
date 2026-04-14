import type { Metadata } from "next";
import { Gelasio, Noto_Sans } from "next/font/google";

const gelasio = Gelasio({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
import "./globals.css";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
import Navigation from "@/components/ui/navigation";

export const metadata: Metadata = {
  title: "Creative Counseling",
  description: "Professional counseling services tailored to your needs.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gelasio.className} ${notoSans.className} bg-white text-gray-900`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        {children}
        <SanityLive />
        {(await draftMode()).isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
