import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah T.",
        location: "Toronto",
        quote: "StreamLine moved our 3-bedroom condo in under 4 hours. Not a single scratch. The price they quoted was exactly what we paid.",
        date: "Oct 2025",
    },
    {
        name: "Mike R.",
        location: "Vancouver",
        quote: "Best moving experience I've ever had. Usually moving is a nightmare, but these guys made it look easy. Highly recommended!",
        date: "Sep 2025",
    },
    {
        name: "Jessica L.",
        location: "Calgary",
        quote: "Professional, polite, and punctual. They handled my antique furniture with extreme care. Will definitely use them again.",
        date: "Nov 2025",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">What Our Customers Say</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Real reviews from real moves.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700 relative">
                            <div className="flex gap-1 mb-4 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 italic mb-6">"{testimonial.quote}"</p>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">{testimonial.name}</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.location} | {testimonial.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
