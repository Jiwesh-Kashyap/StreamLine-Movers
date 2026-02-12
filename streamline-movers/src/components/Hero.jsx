"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight, Phone } from "lucide-react";

export default function Hero() {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative bg-slate-900 dark:bg-slate-950 text-white overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 bg-black/60 dark:bg-black/70 z-10" />

            {/* Background Image Placeholder - using a color gradient for now, specific image would go here */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop")', opacity: 0.4 }}
            />

            <div className="container relative z-20 mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
                {/* Trust Badges */}
                <div className="mb-6 flex flex-wrap justify-center gap-3 text-sm font-medium text-blue-200 dark:text-blue-300">
                    <span className="bg-blue-900/50 dark:bg-blue-800/40 px-3 py-1 rounded-full border border-blue-500/30 dark:border-blue-400/30">
                        ★ 4.8 Average Rating
                    </span>
                    <span className="bg-blue-900/50 dark:bg-blue-800/40 px-3 py-1 rounded-full border border-blue-500/30 dark:border-blue-400/30">
                        Fully Insured & Bonded
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                    Professional Movers <br className="hidden md:block" />
                    You Can <span className="text-primary">Trust</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-200 dark:text-slate-300 mb-8 max-w-2xl">
                    Transparent pricing. No hidden fees. We make your move stress-free with our uniformed expert team.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button
                        size="lg"
                        className="text-base h-12 px-8 font-semibold w-full sm:w-auto shadow-lg hover:scale-105 transition-transform"
                        onClick={() => handleScroll("quote-form")}
                    >
                        Get Your Free Quote
                        <MoveRight className="ml-2 h-5 w-5" />
                    </Button>

                    <Button size="lg" variant="outline" className="text-base h-12 px-8 font-semibold w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
                        <Phone className="mr-2 h-5 w-5" />
                        Call: 306-540-5626
                    </Button>
                </div>

                <p className="mt-6 text-sm text-slate-400 dark:text-slate-500">
                    ⚡ Get a quote in less than 2 minutes
                </p>
            </div>
        </section>
    );
}
