"use client";

import { Inter } from "next/font/google";
import React from "react";
import { Divider, PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import CustomAppBar from "./components/CustomAppBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ThemeProvider theme={defaultTheme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CssBaseline />
            <CustomAppBar mode={mode} toggleColorMode={toggleColorMode} />
            {children}
            <Divider />
            <Footer />
          </LocalizationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
