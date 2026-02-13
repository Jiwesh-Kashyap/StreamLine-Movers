import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone } from "lucide-react";

export default function Success() {
    return (
        <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-lg text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 dark:text-green-400">
                    <CheckCircle2 className="h-10 w-10" />
                </div>

                <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Thank You!</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                    Your quote request has been received. One of our moving specialists will contact you shortly.
                </p>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 mb-8 text-left transition-colors duration-300">
                    <h4 className="font-semibold mb-3 text-slate-900 dark:text-white">What happens next:</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">1.</span>
                            Confirmation email sent within 5 minutes
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">2.</span>
                            Specialist call within 2 hours
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">3.</span>
                            No commitment required until approval
                        </li>
                    </ul>
                </div>

                <Button className="w-full mb-4" onClick={() => window.location.reload()}>
                    Return to Homepage
                </Button>

                <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
                    Questions? Call us now: <a href="tel:3065405626" className="text-primary font-semibold hover:underline">306-540-5626</a>
                </p>
            </div>
        </section>
    );
}
