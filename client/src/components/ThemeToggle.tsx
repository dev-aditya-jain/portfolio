import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Sun className="w-4 h-4 text-muted-foreground" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        data-testid="switch-theme-toggle"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      />
      <Moon className="w-4 h-4 text-muted-foreground" />
    </div>
  );
}