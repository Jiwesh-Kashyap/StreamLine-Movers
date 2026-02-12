import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { User, Phone, Mail } from "lucide-react";

export default function Step3() {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Almost done! Where should we send your quote?</h3>

            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <User className="h-4 w-4 text-primary" /> Full Name
                    </label>
                    <Input
                        placeholder="John Doe"
                        {...register("fullName")}
                        className={errors.fullName ? "border-red-500" : ""}
                    />
                    {errors.fullName && <p className="text-red-500 dark:text-red-400 text-xs">{errors.fullName.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <Phone className="h-4 w-4 text-primary" /> Phone Number
                    </label>
                    <Input
                        type="tel"
                        placeholder="306-540-5626"
                        {...register("phone")}
                        className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && <p className="text-red-500 dark:text-red-400 text-xs">{errors.phone.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <Mail className="h-4 w-4 text-primary" /> Email Address
                    </label>
                    <Input
                        type="email"
                        placeholder="john@example.com"
                        {...register("email")}
                        className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-red-500 dark:text-red-400 text-xs">{errors.email.message}</p>}
                </div>

                <div className="pt-4">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                        By clicking "Get My Quote", you agree to our Terms of Service and Privacy Policy.
                        We'll never share your data with third parties.
                    </p>
                </div>
            </div>
        </div>
    );
}
