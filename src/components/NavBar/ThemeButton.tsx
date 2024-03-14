import { useTheme } from "next-themes";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";

const ThemeButton = () => {
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
      <FiMoon
        onClick={toggleTheme}
        className="my-4 h-4 w-4 cursor-pointer sm:h-6 sm:w-6"
        role="button"
      />
    ) : (
      <BsSun
        onClick={toggleTheme}
        className="my-4 h-4 w-4 cursor-pointer text-darkred sm:h-6 sm:w-6"
        role="button"
      />
    );
  }, [theme, toggleTheme]);

  return isClient ? CurrentIcon : null;
};

export default ThemeButton;
