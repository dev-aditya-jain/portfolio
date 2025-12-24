import ThemeToggle from "../ThemeToggle";

export default function ThemeToggleExample() {
  return (
    <div className="flex items-center gap-4">
      <ThemeToggle />
      <span className="text-sm text-muted-foreground">Click to toggle theme</span>
    </div>
  );
}
