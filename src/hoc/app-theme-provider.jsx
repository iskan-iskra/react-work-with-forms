import { ThemeContext } from "@/context";
import { useAppTheme } from "@/use";

export const appThemeProvider = (WrappedComponent) => {
  return function WithAppThemeProvider() {
    const { theme, toggleTheme } = useAppTheme();
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <WrappedComponent />
      </ThemeContext.Provider>
    );
  };
};
