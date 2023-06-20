import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, IconButton, Grid, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Tarefas = () => {
  const [nomeDiaSemana, setNomeDiaSemana] = useState('');
  const [outrosDiasSemana, setOutrosDiasSemana] = useState([]);
  const { date } = useParams();

  const [day, month] = date.split("-");

  const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

  const obterDiaSemana = () => {
    const partesData = date.split('-');
    const dia = partesData[0];
    const mes = partesData[1] - 1;

    const data = new Date();
    data.setDate(dia);
    data.setMonth(mes);

    const nomeDia = obterNomeDiaSemana(data.getDay());
    const outrosDias = obterOutrosDiasSemana(data);

    setNomeDiaSemana(nomeDia);
    setOutrosDiasSemana(outrosDias);
  };
  
  const obterNomeDiaSemana = (diaSemana) => {
    return daysOfWeek[diaSemana];
  };

  const padEsquerda = (valor, tamanho) => {
    let valorString = valor.toString();
    while (valorString.length < tamanho) {
      valorString = '0' + valorString;
    }
    return valorString;
  };

  const obterOutrosDiasSemana = (data) => {
    const diaSemanaAtual = data.getDay();
    const diasSemana = [];
  
    const formatarData = (data) => {
      const dia = String(data.getDate()).padStart(2, '0');
      const mes = String(data.getMonth() + 1).padStart(2, '0');
      return `${dia}/${mes}`;
    };
  
    for (let i = 0; i < 7; i++) {
      const dia = new Date(data.getTime());
      dia.setDate(data.getDate() + i - diaSemanaAtual);
      diasSemana.push(formatarData(dia));
    }
  
    return diasSemana;
  };

  const handlePreviousDay = () => {
    const currentDate = new Date(2023, month - 1, day);
    currentDate.setDate(currentDate.getDate() - 1);

    const dayPrevious = String(currentDate.getDate()).padStart(2, "0");
    const monthPrevious = String(currentDate.getMonth() + 1).padStart(2, "0");

    const newDate = `${dayPrevious}-${monthPrevious}`;

    window.location.href = `/app/tarefas-pendentes/${newDate}`;
  };

  const handleNextDay = () => {
    const currentDate = new Date(2023, month - 1, day);
    currentDate.setDate(currentDate.getDate() + 1);

    const dayNext = String(currentDate.getDate()).padStart(2, "0");
    const monthNext = String(currentDate.getMonth() + 1).padStart(2, "0");

    const newDate = `${dayNext}-${monthNext}`;

    window.location.href = `/app/tarefas-pendentes/${newDate}`;
  };

  useEffect(() => {
    obterDiaSemana();
  }, []);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box display="flex" alignItems="center" mb={2}>
        <IconButton onClick={handlePreviousDay}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5">{`${day}/${month}`}</Typography>
        <IconButton onClick={handleNextDay}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
      <Box width="80%" border="1px solid #ccc" p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Calendário semanal - {nomeDiaSemana}
            </Typography>
          </Grid>
          {daysOfWeek.map((dia, x = 0) => (
            <Grid item xs={12} sm={1.7} key={dia}>
              <Paper elevation={12}>
                <Grid>
                  <Typography variant="h6" gutterBottom>
                    {daysOfWeek[x]} - {outrosDiasSemana[x]}
                  </Typography>
                </Grid>
                {/* Place your content or activities for Sunday here */}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Tarefas;
