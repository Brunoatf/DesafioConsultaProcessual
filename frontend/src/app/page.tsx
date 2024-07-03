"use client";

import * as React from "react";
import Divider from "@mui/material/Divider";
import Hero from "./components/Hero";
import { Box, Stack } from "@mui/material";
import About from "./components/About";

export default function LandingPage() {
  return (
    <Stack>
      <Hero />
      <Divider />
      <Box>
        <About />
      </Box>
    </Stack>
  );
}
