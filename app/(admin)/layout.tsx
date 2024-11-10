import { CmsNavigation } from "@/components/layout/CmsNavigation";
import { ThemeProvider } from "@/components/layout/Theme";
import "../globals.css";
import { type Metadata } from "next";

export const metadata: Metadata = {
    description: "Create your own tools to display content in a unique way,",
}

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
            </head>
            <body>
                <ThemeProvider
                    attribute={"class"}
                    defaultTheme="system"
                >
                    <CmsNavigation />
                    <main className="my-2 mx-auto">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    )
}