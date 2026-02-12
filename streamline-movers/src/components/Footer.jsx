import Link from "next/link";

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
                            <span>📞</span> <a href="tel:+15551234567" className="hover:text-primary">1-555-123-4567</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <span>📧</span> <a href="mailto:info@streamlinemovers.ca" className="hover:text-primary">info@streamlinemovers.ca</a>
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
