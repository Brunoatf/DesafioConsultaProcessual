"use client";

import * as React from "react";
import Divider from "@mui/material/Divider";
import Hero from "./components/Hero";
import { Box, Stack } from "@mui/material";
import Features from "./components/Features";

export default function LandingPage() {
  return (
    <Stack>
      <Hero />
      <Divider />
      <Box sx={{ bgcolor: "background.default" }}>
        <Features />
      </Box>
    </Stack>
  );
}
