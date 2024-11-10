import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { ThemeProvider } from "@/components/layout/Theme";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { Archivo_Black, SUSE } from "next/font/google";
import dynamic from "next/dynamic";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const archBlack = Archivo_Black({
  variable: "--font-arch-black",
  weight: ["400"],
  preload: true,
  subsets: ["latin"],
});

const suse = SUSE({
  variable: "--font-suse",
  weight: ["400", "100", "200", "500", '600', '700', '800'],
  preload: true,
  fallback: ["sans-serif"],
  subsets: ["latin"],
});

const AppSidebar = dynamic(() => import("@/components/layout/sidebar/app-sidebar").then((mod) => mod.AppSidebar));


export const metadata: Metadata = {
  title: "Exo",
  description: "A blog site with a canvas to create your own tools to display content.",
};

export const revalidate = 60;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archBlack.variable} ${suse.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger className="ml-3 mt-2 z-10" />
            <Topbar />
            <main className="mx-auto my-20">
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>

  );
}
