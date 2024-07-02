"use client";

import * as React from "react";
import Divider from "@mui/material/Divider";
import Hero from "./components/Hero";
import { Box, Stack } from "@mui/material";
import Features from "./components/About";

export default function LandingPage() {
  return (
    <Stack>
      <Hero />
      <Divider />
      <Box>
        <Features />
      </Box>
    </Stack>
  );
}
