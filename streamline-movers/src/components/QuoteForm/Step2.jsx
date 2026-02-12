import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Clock, MapPin, CalendarDays } from "lucide-react";

export default function Step2() {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Where and when are you moving?</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <MapPin className="h-4 w-4 text-primary" /> Moving From (Postal Code)
                    </label>
                    <Input
                        placeholder="e.g. M5V 2H1"
                        {...register("movingFrom")}
                        className={errors.movingFrom ? "border-red-500" : ""}
                    />
                    {errors.movingFrom && <p className="text-red-500 dark:text-red-400 text-xs">{errors.movingFrom.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <MapPin className="h-4 w-4 text-primary" /> Moving To (Postal Code)
                    </label>
                    <Input
                        placeholder="e.g. L4B 3K9"
                        {...register("movingTo")}
                        className={errors.movingTo ? "border-red-500" : ""}
                    />
                    {errors.movingTo && <p className="text-red-500 dark:text-red-400 text-xs">{errors.movingTo.message}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <CalendarDays className="h-4 w-4 text-primary" /> Preferred Move Date
                </label>
                <Input
                    type="date"
                    {...register("moveDate")}
                    className={errors.moveDate ? "border-red-500" : ""}
                />
                {errors.moveDate && <p className="text-red-500 dark:text-red-400 text-xs">{errors.moveDate.message}</p>}
            </div>

            <div className="space-y-3">
                <label className="text-sm font-medium leading-none flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Clock className="h-4 w-4 text-primary" /> How soon do you need to move?
                </label>
                <div className="grid grid-cols-2 gap-3">
                    {["urgent", "soon", "flexible", "browsing"].map((option) => (
                        <label
                            key={option}
                            className="flex items-center space-x-2 border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700/50 p-3 rounded-md cursor-pointer hover:bg-slate-100 hover:border-slate-300 dark:hover:bg-slate-700 dark:hover:border-slate-500 transition-colors"
                        >
                            <input
                                type="radio"
                                value={option}
                                {...register("urgency")}
                                className="text-primary focus:ring-primary h-4 w-4"
                            />
                            <span className="capitalize text-sm font-medium text-slate-900 dark:text-white">{option}</span>
                        </label>
                    ))}
                </div>
                {errors.urgency && <p className="text-red-500 dark:text-red-400 text-xs">{errors.urgency.message}</p>}
            </div>
        </div>
    );
}
