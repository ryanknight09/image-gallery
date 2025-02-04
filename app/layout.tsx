import { AppHeader } from "@/components/AppHeader";
import { TailwindIndicator } from "@/components/theme/TailwindIndicator";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Ruda } from "next/font/google";
import "./globals.css";

const ruda = Ruda({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ablum Search",
  description: "Generated by create rk-stack",
  appleWebApp: {
    capable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="mobile-web-app-capable" content="yes" />
      <body
        className={`${ruda.className} antialiased scroll-smooth min-h-dvh h-screen`}
      >
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <AppHeader />
          {children}
          <Toaster />
        </ThemeProvider>
        <TailwindIndicator />
      </body>
    </html>
  );
}
