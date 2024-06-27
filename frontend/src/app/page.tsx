"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Hero from "./components/Hero";

import Features from "./components/Features";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Divider />
      <Box sx={{ bgcolor: "background.default" }}>
        <Features />
      </Box>
    </>
  );
}
