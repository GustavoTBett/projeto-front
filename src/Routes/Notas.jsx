import { useState } from "react";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { positions } from '@mui/system';

function Notas() {
  const [grades, setGrades] = useState([]);
  const [totalGrade, setTotalGrade] = useState(0);
  const [result, setResult] = useState("");
  const [newGrade, setNewGrade] = useState("");
  const [calcular, setCalcular] = useState(false);

  const handleGradeChange = (index, event) => {
    const newGrades = [...grades];
    newGrades[index] = parseFloat(event.target.value) || 0;
    setGrades(newGrades);
  };

  const handleNewGradeChange = (event) => {
    setNewGrade(event.target.value);
  };

  const addGrade = () => {
    if (grades.length === 5) {
      setNewGrade("");
      return;
    }

    const grade = parseFloat(newGrade) || 0;
    setGrades([...grades, grade]);
    setNewGrade("");
  };

  const calculateTotalGrade = () => {
    const sum = grades.reduce(
      (accumulator, currentValue) =>
        accumulator + parseFloat(currentValue || 0),
      0
    );
    let remainingGrade;

    if (grades.length <= 3 & sum < 18) {
      remainingGrade = 18 - sum;
      setResult(
        `Faltam ${remainingGrade.toFixed(2)} pontos para ser aprovado`
      );
    } else if (grades.length <= 3 & sum >= 18) {
      setResult(
        'Parabéns você está aprovado!'
      );
    }else if (grades.length === 4 & sum < 24) {
      remainingGrade = 24 - sum;
      setResult(
        `Faltam ${remainingGrade.toFixed(2)} pontos para ser aprovado`
      );
    } else if (grades.length === 4 & sum >= 24) {
      setResult(
        `Parabéns você está aprovado!`
      );
    } 
    else if (grades.length === 5 & sum >= 30) {
      setResult(
        `Parabéns você está aprovado!`
      );
    } else {
      remainingGrade = 30 - sum;
      setResult(
        `Faltam ${remainingGrade.toFixed(2)} pontos para ser aprovado`
      );
    }

    setTotalGrade(sum);
    setCalcular(true);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" align="center" gutterBottom>
            Calculadora de Notas da Faculdade
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Insira as notas das provas ou trabalhos:
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            gap: "10px",
            my: 4,
          }}
        >
          {grades.map((grade, index) => (
            <TextField
              key={index}
              label={`Nota ${index + 1}`}
              type="number"
              value={grade || ""}
              onChange={(event) => handleGradeChange(index, event)}
              fullWidth
              sx={{ mb: 2 }}
            />
          ))}
          {grades.length < 5 && (
            <TextField
              label="Nova Nota"
              type="number"
              value={newGrade || ""}
              onChange={handleNewGradeChange}
              fullWidth
              sx={{ mb: 2 }}
            />
          )}
          <Button variant="contained" onClick={addGrade} disabled={!newGrade}>
            Adicionar Nota
          </Button>
          <Button
            variant="contained"
            onClick={calculateTotalGrade}
            disabled={grades.length === 0}
          >
            Calcular
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setGrades([]), setTotalGrade(0), setResult("");
            }}
          >
            Resetar Notas
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
      {calcular && (
        <div>
          <Dialog
            open={calcular}
            onClose={() => setCalcular(false)}
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
          >
            <DialogTitle id="dialog-title" align="center">Notas Calculadas!</DialogTitle>
            <DialogContent>
              <DialogContentText id="dialog-description">
                <Typography variant="h6" align="flex-start" gutterBottom>
                  <b>Total de Notas:</b> {grades.length}
                </Typography>
                <Typography variant="h6" align="flex-start" gutterBottom>
                  <b>Soma das Notas:</b> {totalGrade.toFixed(2)} pontos
                </Typography>
                <Typography variant="h6" align="flex-start" gutterBottom>
                  <b>Resultado:</b> {result}
                </Typography>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setCalcular(false)}>OK</Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
      </Grid>
    </Container>
  );
}
export default Notas;
