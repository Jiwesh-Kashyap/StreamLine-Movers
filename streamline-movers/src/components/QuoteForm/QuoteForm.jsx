"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema, step2Schema, step3Schema, combinedSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Success from "./Success";
import { cn } from "@/lib/utils";

const steps = [
    { id: 1, title: "Move Size" },
    { id: 2, title: "Locations & Date" },
    { id: 3, title: "Contact Info" },
];

export default function QuoteForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSuccess, setIsSuccess] = useState(false);

    const methods = useForm({
        resolver: zodResolver(combinedSchema),
        mode: "onChange",
        defaultValues: {
            moveSize: '',
            movingFrom: '',
            movingTo: '',
            moveDate: '',
            urgency: '',
            fullName: '',
            phone: '',
            email: ''
        }
    });

    const { handleSubmit, trigger, formState: { isValid } } = methods;

    const handleNext = async () => {
        let fieldsToValidate;
        if (currentStep === 1) {
            fieldsToValidate = ['moveSize'];
        } else if (currentStep === 2) {
            fieldsToValidate = ['movingFrom', 'movingTo', 'moveDate', 'urgency'];
        }

        const isStepValid = await trigger(fieldsToValidate);
        if (isStepValid) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const onSubmit = async (data) => {
        try {
            // allows you to send data to your separate backend
            const response = await fetch('http://localhost:3001/api/quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to submit quote');
            }

            console.log("Form Submitted Successfully:", data);
            setIsSuccess(true);
        } catch (error) {
            console.error("Error submitting form:", error);
            // Optional: Set an error state here to show a message to the user
            alert("Failed to submit quote. Please try again.");
        }
    };

    if (isSuccess) {
        return <Success />;
    }

    return (
        <section id="quote-form" className="py-20 bg-white dark:bg-slate-950 scroll-mt-20">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Get Your Free Quote</h2>
                    <p className="text-slate-600 dark:text-slate-400">Takes less than 2 minutes. No credit card required.</p>
                </div>

                <div className="mb-8">
                    <div className="flex justify-between mb-2">
                        {steps.map((step) => (
                            <span
                                key={step.id}
                                className={cn(
                                    "text-sm font-medium",
                                    currentStep >= step.id ? "text-primary" : "text-slate-400 dark:text-slate-600"
                                )}
                            >
                                {step.title}
                            </span>
                        ))}
                    </div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary transition-all duration-300 ease-in-out"
                            style={{ width: `${(currentStep / steps.length) * 100}%` }}
                        />
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm p-6 md:p-8">
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {currentStep === 1 && <Step1 />}
                            {currentStep === 2 && <Step2 />}
                            {currentStep === 3 && <Step3 />}

                            <div className="mt-8 flex justify-between pt-6 border-t border-slate-200 dark:border-slate-700">
                                {currentStep > 1 && (
                                    <Button type="button" variant="outline" onClick={handleBack}>
                                        Back
                                    </Button>
                                )}

                                {currentStep < 3 ? (
                                    <Button type="button" onClick={handleNext} className="ml-auto w-full md:w-auto">
                                        Continue
                                    </Button>
                                ) : (
                                    <Button type="submit" className="ml-auto w-full md:w-auto">
                                        Get My Quote
                                    </Button>
                                )}
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </section>
    );
}
