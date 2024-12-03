import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
export const metadata: Metadata = {
  title: "Cabane des Pyrénées",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn("bg-white text-black")}>{children}</body>
    </html>
  );
}
