import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SearchMenu from "./SearchMenu";

export default function Hero() {
  const theme = useTheme();

  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
        height: "100vh",
        background:
          theme.palette.mode === "light"
            ? "linear-gradient(270deg, #d0ca76, #57a47c, #5987d0, #ffffff)"
            : "linear-gradient(270deg, #7a7530, #184c31, #182c4c, #000000)",
        backgroundSize: "400% 400%",
        animation: "gradient 20s ease infinite",
        "@keyframes gradient": {
          "0%": { backgroundPosition: "0% 50%" },
          "25%": { backgroundPosition: "50% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "75%": { backgroundPosition: "50% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          pt: { xs: 8, sm: 12 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              whiteSpace: { xs: "normal", sm: "nowrap" },
              textAlign: "center",
            }}
          >
            Consulta Processual em um clique
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{ width: { xs: "100%", md: "80%" } }}
          >
            Pesquise por CNJ, tribunal, partes ou intervalo de datas. Inclua
            mais de um desses campos em sua pesquisa para refinar a busca.
          </Typography>
          <SearchMenu />
        </Stack>
      </Container>
    </Box>
  );
}
