"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch by only rendering after mount
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button variant="outline" size="icon" className="rounded-full">
                <Sun className="h-5 w-5" />
            </Button>
        );
    }

    const cycleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else if (theme === "dark") {
            setTheme("system");
        } else {
            setTheme("light");
        }
    };

    const getIcon = () => {
        if (theme === "dark") {
            return <Moon className="h-5 w-5" />;
        } else if (theme === "system") {
            return <Monitor className="h-5 w-5" />;
        } else {
            return <Sun className="h-5 w-5" />;
        }
    };

    const getTooltip = () => {
        if (theme === "dark") {
            return "Dark mode";
        } else if (theme === "system") {
            return "System mode";
        } else {
            return "Light mode";
        }
    };

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={cycleTheme}
            className="rounded-full"
            title={getTooltip()}
            aria-label={`Switch to ${theme === "light" ? "dark" : theme === "dark" ? "system" : "light"} mode`}
        >
            {getIcon()}
        </Button>
    );
}
