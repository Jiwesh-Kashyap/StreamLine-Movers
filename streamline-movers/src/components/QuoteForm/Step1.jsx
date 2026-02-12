import { useFormContext } from "react-hook-form";
import { Home, Building, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

const moveSizes = [
    { id: "studio", label: "Studio / Bachelor", icon: Home },
    { id: "1bed", label: "1 Bedroom", icon: Home },
    { id: "2bed", label: "2 Bedrooms", icon: Home },
    { id: "3plus", label: "3+ Bedrooms", icon: Home },
    { id: "office", label: "Office / Commercial", icon: Building },
];

export default function Step1() {
    const { register, watch, formState: { errors } } = useFormContext();
    const selectedSize = watch("moveSize");

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">What size is your move?</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {moveSizes.map((size) => (
                    <label
                        key={size.id}
                        className={cn(
                            "relative flex flex-col items-center justify-center p-6 border-2 rounded-xl cursor-pointer transition-all",
                            "hover:bg-slate-100 hover:border-slate-300 dark:hover:bg-slate-700 dark:hover:border-slate-600",
                            selectedSize === size.id
                                ? "border-primary bg-primary/10 dark:bg-primary/20 ring-1 ring-primary"
                                : "border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700/50"
                        )}
                    >
                        <input
                            type="radio"
                            value={size.id}
                            className="sr-only"
                            {...register("moveSize")}
                        />
                        <size.icon className={cn("h-8 w-8 mb-3", selectedSize === size.id ? "text-primary" : "text-slate-400 dark:text-slate-500")} />
                        <span className="font-medium text-slate-900 dark:text-white">{size.label}</span>
                    </label>
                ))}
            </div>
            {errors.moveSize && <p className="text-red-500 dark:text-red-400 text-sm mt-2">{errors.moveSize.message}</p>}
        </div>
    );
}
