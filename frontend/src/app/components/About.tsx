import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import CommentIcon from "@mui/icons-material/Comment";
import DataObjectIcon from "@mui/icons-material/DataObject";

export default function Features() {
  return (
    <Container
      id="about"
      sx={{
        py: 12,
        height: { xs: "auto", sm: "100vh" },
        width: "90%",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={4}
        justifyContent="space-between"
        alignItems={{ xs: "center", sm: "stretch" }}
      >
        <Stack width={{ xs: "90%", sm: "45%" }} alignItems="flex-start" justifyContent="space-between">
          <Typography component="h2" variant="h2" color="text.primary">
            Sobre
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="justify"
            sx={{ mb: { xs: 2, sm: 4 } }}
          >
            Esta é minha submissão para o desafio de recrutamento da Jusbrasil.
            O projeto completo foi desenvolvido sob o prazo de 1 semana e
            implementa uma aplicação web simples para consulta de processos
            judiciais.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="justify"
            sx={{ mb: { xs: 2, sm: 4 } }}
          >
            Detalhes sobre a implementação podem ser encontrados no arquivo
            COMMENTS.md localizado na raiz do repositório do projeto.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="justify"
            sx={{ mb: { xs: 2, sm: 4 } }}
          >
            Para que o avaliador possa melhor testar a aplicação e realizar
            consultas, recomenda-se checar quais processos existem na base de
            dados e, em seguida, realizar buscas utilizando os filtros
            disponíveis.
          </Typography>
        </Stack>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          width={{ xs: "90%", sm: "45%" }}
        >
          <Card
            variant="outlined"
            sx={{
              p: 3,
              height: "fit-content",
              width: "100%",
              background: "none",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                textAlign: "left",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { md: "center" },
                gap: 2.5,
                pb: 2,
              }}
            >
              <Box>
                <GitHubIcon />
              </Box>
              <Box sx={{ textTransform: "none" }}>
                <Typography
                  color="text.primary"
                  variant="body2"
                  fontWeight="bold"
                >
                  Repositório do projeto
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                  sx={{ my: 0.5 }}
                >
                  Código fonte do projeto disponível no GitHub.
                </Typography>
                <Link
                  color="primary"
                  variant="body2"
                  fontWeight="bold"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    "& > svg": { transition: "0.2s" },
                    "&:hover > svg": { transform: "translateX(2px)" },
                  }}
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                  href="https://github.com/Brunoatf/DesafioConsultaProcessual/tree/main"
                  target="_blank"
                >
                  <span>Acessar</span>
                  <ChevronRightRoundedIcon
                    fontSize="small"
                    sx={{ mt: "1px", ml: "2px" }}
                  />
                </Link>
              </Box>
            </Box>
          </Card>
          <Card
            variant="outlined"
            sx={{
              p: 3,
              height: "fit-content",
              width: "100%",
              background: "none",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                textAlign: "left",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { md: "center" },
                gap: 2.5,
                pt: 2,
              }}
            >
              <Box>
                <CommentIcon />
              </Box>
              <Box sx={{ textTransform: "none" }}>
                <Typography
                  color="text.primary"
                  variant="body2"
                  fontWeight="bold"
                >
                  COMMENTS.md
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                  sx={{ my: 0.5 }}
                >
                  Comentários sobre a implementação do projeto e informações
                  adicionais.
                </Typography>
                <Link
                  color="primary"
                  variant="body2"
                  fontWeight="bold"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    "& > svg": { transition: "0.2s" },
                    "&:hover > svg": { transform: "translateX(2px)" },
                  }}
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                  href="https://github.com/Brunoatf/DesafioConsultaProcessual/blob/main/COMMENTS.md"
                  target="_blank"
                >
                  <span>Acessar</span>
                  <ChevronRightRoundedIcon
                    fontSize="small"
                    sx={{ mt: "1px", ml: "2px" }}
                  />
                </Link>
              </Box>
            </Box>
          </Card>
          <Card
            variant="outlined"
            sx={{
              p: 3,
              height: "fit-content",
              width: "100%",
              background: "none",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                textAlign: "left",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { md: "center" },
                gap: 2.5,
                pt: 2,
              }}
            >
              <Box>
                <DataObjectIcon />
              </Box>
              <Box sx={{ textTransform: "none" }}>
                <Typography
                  color="text.primary"
                  variant="body2"
                  fontWeight="bold"
                >
                  Base de dados de processos
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                  sx={{ my: 0.5 }}
                >
                  Arquivo .json utilizado pelo backend para simular uma base de
                  dados de processos. A partir desse arquivo é possível checar
                  quais processos estão disponíveis para consulta e realizar
                  testes na aplicação.
                </Typography>
                <Link
                  color="primary"
                  variant="body2"
                  fontWeight="bold"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    "& > svg": { transition: "0.2s" },
                    "&:hover > svg": { transform: "translateX(2px)" },
                  }}
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                  href="https://github.com/Brunoatf/DesafioConsultaProcessual/blob/main/backend/data/lawsuits.json"
                  target="_blank"
                >
                  <span>Acessar</span>
                  <ChevronRightRoundedIcon
                    fontSize="small"
                    sx={{ mt: "1px", ml: "2px" }}
                  />
                </Link>
              </Box>
            </Box>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
}
