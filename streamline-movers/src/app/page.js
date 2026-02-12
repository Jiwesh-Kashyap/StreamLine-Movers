import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Trust from "@/components/Trust";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm/QuoteForm";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <Services />
            <HowItWorks />
            <Trust />
            <Testimonials />
            <QuoteForm />
        </div>
    );
}
