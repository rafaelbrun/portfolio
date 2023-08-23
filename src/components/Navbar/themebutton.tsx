import { useTheme } from "next-themes";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleTheme = useCallback(() => {
    theme == "dark" ? setTheme("light") : setTheme("dark");
  }, [setTheme, theme]);

  const CurrentIcon = useMemo(() => {
    return theme == "dark" ? (
      <FiMoon onClick={toggleTheme} className="h-8 w-8 my-4 cursor-pointer" />
    ) : (
      <BsSun
        onClick={toggleTheme}
        className="h-8 w-8 my-4 cursor-pointer text-darkred"
      />
    );
  }, [theme, toggleTheme]);

  return isClient ? CurrentIcon : null;
}
