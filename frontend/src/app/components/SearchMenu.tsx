import React from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useRouter } from "next/navigation";
import { useSearchContext } from "../contexts/SearchContext";
import axios from "axios";

export default function SearchMenu() {
  const {
    cnj,
    setCnj,
    court,
    setCourt,
    plaintiff,
    setPlaintiff,
    defendant,
    setDefendant,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    warning,
    setWarning,
    setReturnedData,
    setHasSearched,
  } = useSearchContext();

  const router = useRouter();

  const query = `
    query lawsuit($cnj: String, $court: String, $startDateInterval: Date, $endDateInterval: Date, $plaintiff: String, $defendant: String) {
      lawsuit(cnj: $cnj, court: $court, startDateInterval: $startDateInterval, endDateInterval: $endDateInterval, plaintiff: $plaintiff, defendant: $defendant) {
        cnj
        court
        startDate
        plaintiff
        defendant
        movements {
          movementDate
          description
        }
      }
    }
  `;

  // Ao rodar pelo Docker Compose, a variável de ambiente backendUrl é definida como o endereço do backend na rede do Docker
  // Senão, ao rodar localmente, o endereço padrão é http://localhost:8000
  const apiUrl = process.env.backendUrl || "http://localhost:8000";

  const fetchData = async () => {

    // Monta-se um objeto com as variáveis que estão não nulas:
    const variables = {
      ...(cnj && { cnj }),
      ...(court && { court }),
      ...(startDate && { startDateInterval: startDate.format("YYYY-MM-DD") }),
      ...(endDate && { endDateInterval: endDate.format("YYYY-MM-DD") }),
      ...(plaintiff && { plaintiff }),
      ...(defendant && { defendant }),
    };

    try {

      const response = await axios.post(
        apiUrl + "/graphql",
        {
          query,
          variables,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.data.errors) {
        console.error(
          response.data.errors.map((err) => err.message).join(", "),
        );
      } else {
        console.log(response.data.data.lawsuit);
        const data = response.data.data.lawsuit;
        console.log(data)

        setReturnedData(data)
      }
    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  function processSearch() {
    if (!cnj && !court && !plaintiff && !defendant && !startDate && !endDate) {
      setWarning(true);
    } else {
      setWarning(false);
      setHasSearched(true);
      fetchData();
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
        width="100%"
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
            onChange={(e) => setCourt(e.target.value.toUpperCase())}
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
      {
        warning ?
        <Typography textAlign="center" marginTop="10px">
          Preencha ao menos um campo para realizar a busca
        </Typography>
        : null
      }
    </LocalizationProvider>
  );
}
