import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import LenisScroll from "@/components/ui/lenis-component";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Wira Ananda - Web Developer",
  description:
    "Web Developer yang fokus membangun aplikasi web modern dengan UI konsisten, struktur semantik yang baik, serta performa dan integrasi sistem yang efisien.",
};

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <body className={`antialiased `} style={{ backgroundColor: "#ffffffea" }}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="light">
          <LenisScroll />
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
