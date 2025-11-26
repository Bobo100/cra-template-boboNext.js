import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.scss";
import { getThemeClassName } from "@/utils/commonFunction";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <select
        className={`${styles.themeToggle} ${getThemeClassName(
          "themeToggle",
          styles,
          theme
        )}`}
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        title="Change theme"
      >
        <option value="system">🖥️ System</option>
        <option value="light">☀️ Light</option>
        <option value="dark">🌙 Dark</option>
      </select>
    </div>
  );
};

export default ThemeToggle;
