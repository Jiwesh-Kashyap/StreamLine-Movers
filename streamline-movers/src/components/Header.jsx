"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    const navItems = [
        { label: "Services", href: "#services" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                    <span>📦</span> StreamLine Movers
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={(e) => handleScroll(e, item.href.substring(1))}
                            className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="tel:3065405626" aria-label="Call Us">
                        <Button variant="outline" className="flex items-center gap-2 text-sm font-semibold">
                            <Phone className="h-4 w-4" />
                            <span>306-540-5626</span>
                        </Button>
                    </a>
                    <ThemeToggle />
                    <Button onClick={(e) => handleScroll(e, "quote-form")}>Get Quote</Button>
                </div>

                {/* Mobile Actions */}
                <div className="flex items-center gap-2 md:hidden">
                    <a href="tel:3065405626" aria-label="Call Now">
                        <Button size="icon" variant="outline" className="rounded-full">
                            <Phone className="h-4 w-4 text-primary" />
                        </Button>
                    </a>
                    <button
                        onClick={toggleMenu}
                        className="p-2 -mr-2 text-foreground"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t p-4 bg-background absolute w-full shadow-lg">
                    <nav className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={(e) => handleScroll(e, item.href.substring(1))}
                                className="text-base font-medium p-2 hover:bg-muted rounded-md transition-colors text-left"
                            >
                                {item.label}
                            </button>
                        ))}
                        <div className="pt-4 border-t flex items-center gap-3">
                            <ThemeToggle />
                            <Button
                                className="flex-1 justify-center"
                                onClick={(e) => handleScroll(e, "quote-form")}
                            >
                                Get Free Quote
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
