import "../css/Calender.css";
import Container from "@mui/material/Container";
import { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
} from "@mui/material";

function Calender() {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const [selectedDay, setSelectedDay] = useState(null);
  const monthIndex = new Date().getMonth();
  const [currentMonthIndex, setCurrentMonthIndex] = useState(monthIndex);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleCloseDialog = () => {
    setSelectedDay(null);
  };

  const handlePrevMonth = () => {
    if (currentMonthIndex === 0) return; // Bloqueia ir para o ano anterior
    setCurrentMonthIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextMonth = () => {
    if (currentMonthIndex === 11) return; // Bloqueia ir para o ano seguinte
    setCurrentMonthIndex((prevIndex) => prevIndex + 1);
  };

  const currentMonth = months[currentMonthIndex];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(2023, currentMonthIndex);

  const daysOfMonth = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const firstDayOfMonth = new Date(2023, currentMonthIndex, 1).getDay();
  let teste;
  if (
    currentMonth === "Abril" ||
    currentMonth === "Julho" ||
    currentMonth === "Dezembro"
  ) {
    teste = Array.from(Array(42).keys());
  } else {
    teste = Array.from(Array(35).keys());
  }

  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid className="buttonsMonths">
          <Button
            variant="contained"
            onClick={handlePrevMonth}
            disabled={currentMonthIndex === 0}
          >
            Mês Anterior
          </Button>
          <Typography variant="h5" align="center" gutterBottom>
            {currentMonth} 2023
          </Typography>
          <Button
            variant="contained"
            onClick={handleNextMonth}
            disabled={currentMonthIndex === 11}
          >
            Próximo Mês
          </Button>
        </Grid>
        {/* Começa aqui a tela */}

        <Grid container spacing={2} className="tableCalender">
          <Grid className="diasSemana">
            {daysOfWeek.map((day) => (
              <Grid item key={day} style={{ width: 1150 }}>
                <Typography
                  variant="h6"
                  align="center"
                  style={{ width: "100%", paddingLeft: 10 }}
                >
                  {day}
                </Typography>
              </Grid>
            ))}
          </Grid>
          {teste.map((day) => {
            const currentDay = day;
            if (
              currentDay >= firstDayOfMonth &&
              currentDay <= daysInMonth + firstDayOfMonth - 1
            ) {
              return (
                <Grid item xs={1.7} key={day} className="tableInside">
                  <Paper
                    elevation={2}
                    sx={{ padding: 2 }}
                    onClick={() =>
                      handleDayClick(currentDay - firstDayOfMonth + 1)
                    }
                    style={{ backgroundColor: "#e0e0e0" }}
                  >
                    <Typography variant="h6" align="center">
                      {currentDay - firstDayOfMonth + 1}
                    </Typography>
                  </Paper>
                </Grid>
              );
            } else {
              return (
                <Grid item xs={1.7} key={day} className="tableInside"></Grid>
              );
            }
          })}
        </Grid>

        <Dialog open={selectedDay !== null} onClose={handleCloseDialog}>
          <DialogTitle>
            {selectedDay !== null ? `Dia ${selectedDay}` : ""}
          </DialogTitle>
          <DialogContent>
            {/* Conteúdo do dialog */}
            <Typography variant="body1" align="center">
              Este é o conteúdo do dia {selectedDay}.
            </Typography>
          </DialogContent>
        </Dialog>
      </Grid>
    </Container>
  );
}

export default Calender;
