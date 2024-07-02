"use client";
import React from "react";
import { Divider, PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import CustomAppBar from "./components/CustomAppBar";
import Footer from "./components/Footer";
import { SearchProvider } from "./contexts/SearchContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={defaultTheme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CssBaseline />
            <CustomAppBar mode={mode} toggleColorMode={toggleColorMode} />
            <SearchProvider>{children}</SearchProvider>
            <Divider />
            <Footer />
          </LocalizationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
