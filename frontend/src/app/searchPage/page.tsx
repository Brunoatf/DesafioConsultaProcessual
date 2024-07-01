"use client";

import * as React from "react";
import SearchMenu from "../components/SearchMenu";
import { Card, Stack, Typography } from "@mui/material";
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

export default function SearchPage() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={3}
      alignItems="center"
      justifyContent="center"
      width="100%"
      height={{ xs: "auto", sm: "100vh" }}
      py={{ xs: 13, sm: 16 }}
    >
      <Stack
        direction="column"
        spacing={1}
        width={{ xs: "90%", sm: "45%" }}
        height={{ xs: "auto", sm: "100%" }}
        display="flex"
        justifyContent="space-between"
      >
        <div>
          <Typography component="h2" variant="h4" color="text.primary">
            Consulta Processual
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: { xs: 2, sm: 4 } }}
          >
            Pesquise por CNJ, tribunal, partes ou intervalo de datas. Inclua
            mais de um desses campos em sua pesquisa para refinar a busca.
          </Typography>
        </div>
        <SearchMenu />
        <Divider />
        <Typography component="h2" variant="h4" color="text.primary">
          Processo n. 0000000-00.0000.0.00.0000
        </Typography>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <EventIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Data de início" secondary="24/04/2003" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <GavelIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Tribunal" secondary="tjsp" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Autor"
              secondary="bruno amaral teixeira de freitas"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Réu"
              secondary="bruno amaral teixeira de freitas"
            />
          </ListItem>
        </List>
      </Stack>
      <Stack
        direction="column"
        spacing={1}
        alignItems="center"
        justifyContent="center"
        width={{ xs: "90%", sm: "45%" }}
        height={{ xs: "auto", sm: "100%" }}
      >
        <Card
          variant="outlined"
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            pointerEvents: "none",
            mt: { xs: 2, sm: 0 },
          }}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Movimentações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key="date1">
                  <TableCell align="left">
                    <Typography variant="body1">24/04/2003</Typography>
                    <Typography variant="body2">
                      Distribuição por sorteio
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow key="date2">
                  <TableCell align="left">
                    <Typography variant="body1">24/04/2003</Typography>
                    <Typography variant="body2">
                      Distribuição por sorteio
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow key="date3">
                  <TableCell align="left">
                    <Typography variant="body1">24/04/2003</Typography>
                    <Typography variant="body2">
                      Distribuição por sorteio
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow key="date4">
                  <TableCell align="left">
                    <Typography variant="body1">24/04/2003</Typography>
                    <Typography variant="body2">
                      Distribuição por sorteio
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow key="date5">
                  <TableCell align="left">
                    <Typography variant="body1">24/04/2003</Typography>
                    <Typography variant="body2">
                      escreva aqui um texto longo: Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nullam nec. meu nome é bruno
                      amaral teixeira de freitas, tenho
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow key="date6">
                  <TableCell align="left">
                    <Typography variant="body1">24/04/2003</Typography>
                    <Typography variant="body2">
                      escreva aqui um texto longo: Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nullam nec. meu nome é bruno
                      amaral teixeira de freitas, tenho
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow key="date7">
                  <TableCell align="left">
                    <Typography variant="body1">24/04/2003</Typography>
                    <Typography variant="body2">
                      escreva aqui um texto longo: Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nullam nec. meu nome é bruno
                      amaral teixeira de freitas, tenho
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow key="date8">
                  <TableCell align="left">
                    <Typography variant="body1">24/04/2003</Typography>
                    <Typography variant="body2">
                      escreva aqui um texto longo: Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nullam nec. meu nome é bruno
                      amaral teixeira de freitas, tenho
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow key="date9">
                  <TableCell align="left">
                    <Typography variant="body1">24/04/2003</Typography>
                    <Typography variant="body2">
                      escreva aqui um texto longo: Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nullam nec. meu nome é bruno
                      amaral teixeira de freitas, tenho
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow key="date10">
                  <TableCell align="left">
                    <Typography variant="body1">24/04/2003</Typography>
                    <Typography variant="body2">
                      escreva aqui um texto longo: Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nullam nec. meu nome é bruno
                      amaral teixeira de freitas, tenho
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow key="date11">
                  <TableCell align="left">
                    <Typography variant="body1">24/04/2003</Typography>
                    <Typography variant="body2">
                      escreva aqui um texto longo: Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nullam nec. meu nome é bruno
                      amaral teixeira de freitas, tenho
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow key="date12">
                  <TableCell align="left">
                    <Typography variant="body1">24/04/2003</Typography>
                    <Typography variant="body2">
                      escreva aqui um texto longo: Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nullam nec. meu nome é bruno
                      amaral teixeira de freitas, tenho
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Stack>
    </Stack>
  );
}
