import { FileText, DollarSign, CheckCircle } from "lucide-react";

const steps = [
    {
        title: "1. Request a Quote",
        description: "Fill out our simple form or call us directly. It takes less than 2 minutes.",
        icon: FileText,
    },
    {
        title: "2. Get Your Estimate",
        description: "Receive a transparent, flat-rate pricing quote within 2 hours. No hidden fees.",
        icon: DollarSign,
    },
    {
        title: "3. We Handle the Rest",
        description: "Our uniformed team arrives on time, packs, loads, and moves you safely.",
        icon: CheckCircle,
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">How It Works</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Simple, transparent, and efficient. We make moving easy.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 dark:bg-slate-700 z-0" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-white dark:bg-slate-900 rounded-full border-4 border-slate-50 dark:border-slate-800 flex items-center justify-center mb-6 shadow-sm">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
                                    <step.icon className="h-8 w-8" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{step.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 w-3/4 mx-auto">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
