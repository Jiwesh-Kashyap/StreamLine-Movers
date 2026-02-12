import Link from "next/link";
import { Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-slate-900 dark:bg-slate-950 text-slate-200 dark:text-slate-300 py-12">
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">StreamLine Movers</h3>
                    <p className="text-sm text-slate-400 dark:text-slate-500">
                        Professional residential and commercial moving services across Canada.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-white mb-4">Services</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:text-primary transition-colors">Residential Moving</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Commercial Moving</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Long Distance</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Packing Services</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-white mb-4">Company</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">How It Works</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-white mb-4">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-primary" /> <a href="tel:3065405626" className="hover:text-primary">306-540-5626</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-primary" /> <a href="mailto:support@streamlinemovers.co" className="hover:text-primary">support@streamlinemovers.co</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Instagram className="h-4 w-4 text-primary" /> <a href="https://www.instagram.com/streamlinemoversregina/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">@streamlinemoversregina</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800 dark:border-slate-900 text-center text-sm text-slate-500 dark:text-slate-600">
                © {new Date().getFullYear()} StreamLine Movers. All rights reserved.
            </div>
        </footer>
    );
}
