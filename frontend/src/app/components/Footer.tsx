import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const logoStyle = {
  width: '140px',
  height: 'auto',
};

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 5 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
          Desenvolvido por Bruno Amaral Teixeira de Freitas
        </Typography>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/Brunoatf"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <GithubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/brunoatfreitas/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
    </Container>
  );
}
