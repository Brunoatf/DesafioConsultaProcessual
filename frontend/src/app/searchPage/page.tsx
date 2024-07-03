"use client";

import * as React from "react";
import SearchMenu from "../components/SearchMenu";
import { Stack, Typography, Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import GavelIcon from "@mui/icons-material/Gavel";
import EventIcon from "@mui/icons-material/Event";
import PersonIcon from "@mui/icons-material/Person";
import Divider from "@mui/material/Divider";
import { useSearchContext } from "../contexts/SearchContext";
import { useTheme } from "@mui/material/styles";
import { format } from "date-fns";



export default function SearchPage() {
  const { returnedData, hasSearched } = useSearchContext();
  const theme = useTheme();

  return (
    <Stack spacing={3} height="auto">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py={{ xs: 13, sm: 16 }}
        paddingX="5%"
        spacing={3}
        sx={{
          background:
            theme.palette.mode === "light"
              ? "linear-gradient(270deg, #497fd6, #42b378, #d0ca76, #ffffff)"
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
        <Box width={{ xs: "90%", sm: "45%" }} justifyContent="center">
          <Typography component="h1" variant="h2" color="text.primary">
            Consulta Processual
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ my: 2 }}>
            Pesquise por CNJ, tribunal, partes ou intervalo de datas. Inclua
            mais de um desses campos em sua pesquisa para refinar a busca.
          </Typography>
        </Box>
        <Box width={{ xs: "90%", sm: "45%" }}>
          <SearchMenu />
        </Box>
      </Stack>
      {hasSearched ? (
        returnedData && returnedData.length > 0 ? (
          <Stack spacing={3} width="100%" paddingX="5%">
            <Typography alignSelf="center" variant="h4" color="text.primary">
              Mostrando {returnedData.length} resultados para a sua consulta
            </Typography>
            <Divider />
            {returnedData.map((data, index) => (
              <React.Fragment key={index}>
                <Typography variant="h4">Processo n. {data.cnj}</Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <List sx={{ width: { xs: "100%", sm: "50%" } }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "primary.main" }}>
                          <EventIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Data de início"
                        secondary={format(
                          data.startDate.toString(),
                          "dd/MM/yyyy",
                        )}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "primary.main" }}>
                          <GavelIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Tribunal" secondary={data.court} />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "primary.main" }}>
                          <PersonIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Autor"
                        secondary={data.plaintiff}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "primary.main" }}>
                          <PersonIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Réu" secondary={data.defendant} />
                    </ListItem>
                  </List>
                  <TableContainer
                    component={Paper}
                    sx={{ width: { xs: "100%", sm: "50%" } }}
                  >
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Movimentações</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.movements.map((movement, index) => (
                          <TableRow key={index}>
                            <TableCell align="left">
                              <Typography variant="body1">
                                {format(
                                  movement.movementDate.toString(),
                                  "dd/MM/yyyy",
                                )}
                              </Typography>
                              <Typography variant="body2">
                                {movement.description}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Stack>
                <Divider />
              </React.Fragment>
            ))}
          </Stack>
        ) : (
          <Typography
            alignSelf="center"
            variant="h4"
            color="text.primary"
            textAlign="center"
            paddingX="5%"
            paddingY="1%"
          >
            Sua consulta não gerou resultados
          </Typography>
        )
      ) : null}
    </Stack>
  );
}
