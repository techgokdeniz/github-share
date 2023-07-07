"use client";
import { ThemeProvider, useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider defaultTheme={theme} attribute="class">
      {children}
    </ThemeProvider>
  );
}
