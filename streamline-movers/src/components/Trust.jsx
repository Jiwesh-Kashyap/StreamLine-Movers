import { Shield, Receipt, Users, Award } from "lucide-react";

const features = [
    {
        title: "Transparent Pricing",
        description: "Flat-rate quotes with no hidden fees. The price we quote is the price you pay.",
        icon: Receipt,
    },
    {
        title: "Fully Insured & Bonded",
        description: "$2M liability coverage for peace of mind. Your belongings are protected.",
        icon: Shield,
    },
    {
        title: "Professional Team",
        description: "Background-checked, uniformed movers who handle your items with care.",
        icon: Users,
    },
    {
        title: "Damage-Free Promise",
        description: "Specialized equipment and techniques to ensure safe delivery of every item.",
        icon: Award,
    },
];

export default function Trust() {
    return (
        <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Why 500+ Canadians Choose StreamLine</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        We're setting a new standard for moving services.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center mb-6 text-primary">
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">{feature.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
