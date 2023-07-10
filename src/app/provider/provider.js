"use client";
import { ThemeProvider, useTheme } from "next-themes";

export default function Providers({ children }) {
  const { theme } = useTheme();

  return (
    <ThemeProvider defaultTheme={theme} attribute="class">
      {children}
    </ThemeProvider>
  );
}
