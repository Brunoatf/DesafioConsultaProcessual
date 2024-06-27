"use client";

import * as React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppBar from './components/CustomAppBar';
import Hero from './components/Hero';

import Features from './components/Features';

export default function LandingPage() {

  return (
    <>
      <Hero />
      <Divider />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Features />
      </Box>
    </>
  );
}
