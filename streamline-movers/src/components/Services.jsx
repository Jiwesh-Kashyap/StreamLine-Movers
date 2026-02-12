import { Home, Building2, Truck, Package } from "lucide-react";

const services = [
    {
        title: "Residential Moving",
        description: "Stress-free moving for apartments, condos, and houses. We handle your belongings with care.",
        icon: Home,
    },
    {
        title: "Commercial Moving",
        description: "Efficient office relocations with minimal downtime. We work around your schedule.",
        icon: Building2,
    },
    {
        title: "Long Distance",
        description: "Reliable inter-provincial moving services across Canada. GPS tracking included.",
        icon: Truck,
    },
    {
        title: "Packing Services",
        description: "Professional packing with high-quality materials to ensure damage-free transport.",
        icon: Package,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Our Services</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Comprehensive moving solutions tailored to your specific needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700"
                        >
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 text-primary">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{service.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
