import * as React from "react";
import { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useRouter } from "next/navigation";

export default function SearchMenu() {
  const [cnj, setCnj] = useState("");
  const [court, setCourt] = useState("");
  const [plaintiff, setPlaintiff] = useState("");
  const [defendant, setDefendant] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [warning, setWarning] = useState(false);

  const router = useRouter();

  function processSearch() {
    if (!cnj && !court && !plaintiff && !defendant && !startDate && !endDate) {
      setWarning(true);
    } else {
      setWarning(false);
      router.push("/searchPage");
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack
        direction="column"
        spacing={1}
        alignItems="center"
        justifyContent="center"
        width={{ xs: "90%", sm: "100%" }}
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <TextField
            id="outlined-basic"
            hiddenLabel
            size="small"
            variant="outlined"
            aria-label="cnj"
            placeholder="CNJ (NNNNNNN-NN.NNNN.N.NN.NNNN)"
            value={cnj}
            onChange={(e) => setCnj(e.target.value)}
            inputProps={{
              autoComplete: "off",
              "aria-label": "cnj",
            }}
            sx={{ width: "50%" }}
          />
          <TextField
            id="outlined-basic"
            hiddenLabel
            size="small"
            variant="outlined"
            aria-label="court"
            placeholder="Tribunal (Ex.: TJSP)"
            value={court}
            onChange={(e) => setCourt(e.target.value)}
            inputProps={{
              autoComplete: "off",
              "aria-label": "court",
            }}
            sx={{ width: "50%" }}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%", pt: 0.5 }}
        >
          <TextField
            id="outlined-basic"
            hiddenLabel
            size="small"
            variant="outlined"
            aria-label="plaintiff"
            placeholder="Nome do autor"
            value={plaintiff}
            onChange={(e) => setPlaintiff(e.target.value)}
            inputProps={{
              autoComplete: "off",
              "aria-label": "plaintiff",
            }}
            sx={{ width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            hiddenLabel
            size="small"
            variant="outlined"
            aria-label="defendant"
            placeholder="Nome do réu"
            value={defendant}
            onChange={(e) => setDefendant(e.target.value)}
            inputProps={{
              autoComplete: "off",
              "aria-label": "defendant",
            }}
            sx={{ width: "100%" }}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ width: "100%", pt: 0.5 }}
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="center"
            alignSelf="flex-start"
            sx={{ width: "50%" }}
          >
            <DatePicker
              label="De"
              value={startDate}
              format="DD/MM/YYYY"
              sx={{ width: "50%" }}
              onChange={(newValue) => setStartDate(newValue)}
            />
            <DatePicker
              label="Até"
              value={endDate}
              format="DD/MM/YYYY"
              sx={{ width: "50%" }}
              onChange={(newValue) => setEndDate(newValue)}
            />
          </Stack>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "50%", height: "100%" }}
            onClick={() => processSearch()}
          >
            Buscar
          </Button>
        </Stack>
      </Stack>
      <Typography>
        {warning ? "Preencha ao menos um campo para realizar a busca" : ""}
      </Typography>
    </LocalizationProvider>
  );
}
