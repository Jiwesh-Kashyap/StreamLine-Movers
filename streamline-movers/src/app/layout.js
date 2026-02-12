import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
    title: "StreamLine Movers - Professional Moving Services",
    description: "Trusted moving company in Canada. Transparent pricing, fully insured, 4.8★ rated. Get your free quote in 2 minutes.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={cn("min-h-screen bg-background text-foreground font-sans antialiased", outfit.variable)}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange={false}
                >
                    <Header />
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
