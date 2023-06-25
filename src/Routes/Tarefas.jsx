import "../css/Calender.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Paper,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Tarefas = () => {
  const [nomeDiaSemana, setNomeDiaSemana] = useState("");
  const [outrosDiasSemana, setOutrosDiasSemana] = useState([]);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  const [nomeTarefa, setNomeTarefa] = useState("");
  const [newNomeTarefa, setNewNomeTarefa] = useState("");
  const [rowIndex, setRowIndex] = useState(0);
  const [colIndex, setColIndex] = useState(0);
  const [lista, setLista] = useState([
    [["teste"]],
    [],
    [["Trabalho front-end"]],
    [],
    [["Trabalho bd 2"]],
    [],
    [],
  ]);
  const [openDialogAdd, setOpenDialogAdd] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const { date } = useParams();

  const [day, month] = date.split("-");

  const daysOfWeek = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const obterDiaSemana = () => {
    const partesData = date.split("-");
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

  const obterOutrosDiasSemana = (data) => {
    const diaSemanaAtual = data.getDay();
    const diasSemana = [];

    const formatarData = (data) => {
      const dia = String(data.getDate()).padStart(2, "0");
      const mes = String(data.getMonth() + 1).padStart(2, "0");
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

  const handleClickOpenAdd = () => {
    setOpenDialogAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenDialogAdd(false);
  };

  const handleSaveAdd = () => {
    // Add the new task to the selected day's row in the lista array
    const dayIndex = daysOfWeek.indexOf(selectedDay);
    if (dayIndex !== -1) {
      setLista((prevLista) => {
        const updatedLista = [...prevLista];
        updatedLista[dayIndex].push([newNomeTarefa]);
        return updatedLista;
      });
    }

    // Close the dialog
    setOpenDialogAdd(false);
  };

  const handleClickOpenDelete = (nomeTarefa, rowIndex, colIndex) => {
    setNomeTarefa(nomeTarefa);
    setOpenDialogDelete(true);
    setRowIndex(rowIndex);
    setColIndex(colIndex);
  };

  const handleSaveDelete = () => {
    if (openDialogDelete) {
      setOpenDialogDelete(false);

      setLista((prevLista) => {
        const updatedLista = [...prevLista];
        const rowArray = updatedLista[rowIndex];

        if (rowArray) {
          rowArray.splice(colIndex, 1);
        }
        return updatedLista;
      });
    }
  };

  const handleCloseDelete = () => {
    setOpenDialogDelete(false);
  };

  const handleClickOpenDialog = (nomeTarefa, rowIndex, colIndex) => {
    setNomeTarefa(nomeTarefa);
    setOpenDialogEdit(true);
    setRowIndex(rowIndex);
    setColIndex(colIndex);
  };

  const handleCloseDialog = () => {
    setOpenDialogEdit(false);
  };

  const handleSaveEdit = () => {
    setLista((prevLista) => {
      const updatedLista = [...prevLista];

      const rowArray = updatedLista[rowIndex];

      if (rowArray) {
        rowArray[colIndex] = newNomeTarefa;
      }

      return updatedLista;
    });
    setOpenDialogEdit(false);
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
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h4" gutterBottom>
              Calendário semanal - {nomeDiaSemana}
            </Typography>
            <Button
              variant="contained"
              style={{
                paddingBottom: "0",
                paddingTop: "0",
                marginRight: "20px",
              }}
              onClick={handleClickOpenAdd}
            >
              Adicionar tarefa
            </Button>
          </Grid>
          {daysOfWeek.map((dia, rowIndex) => (
            <Grid item xs={12} sm={1.7} key={dia}>
              <Paper
                elevation={12}
                style={{ height: "600px", borderRadius: "10px" }}
              >
                <Grid
                  style={{
                    backgroundColor: "#378ee6",
                    borderRadius: "10px",
                    borderBottomRightRadius: "0",
                    borderBottomLeftRadius: "0",
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{
                      fontSize: "1.1rem",
                      padding: "5px 0 0 5px",
                      color: "#e9edf2",
                      borderRadius: "10px",
                    }}
                  >
                    {daysOfWeek[rowIndex]} - {outrosDiasSemana[rowIndex]}
                  </Typography>
                  <Divider style={{ marginBottom: "20px" }} />
                </Grid>
                {lista[rowIndex].map((item, colIndex) => (
                  <Paper
                    elevation={12}
                    style={{ margin: "8px", position: "relative" }}
                    key={colIndex}
                  >
                    <Grid
                      style={{
                        overflow: "hidden",
                        maxWidth: "80%",
                        maxHeight: "100px",
                        minHeight: "48px",
                        padding: "7px",
                      }}
                    >
                      {item}
                    </Grid>
                    <IconButton
                      aria-label="edit"
                      style={{ position: "absolute", top: "-7px", left: "81%" }}
                      onClick={() =>
                        handleClickOpenDialog(item, rowIndex, colIndex)
                      }
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      size="small"
                      style={{ position: "absolute", top: "20px", left: "82%" }}
                      onClick={() =>
                        handleClickOpenDelete(item, rowIndex, colIndex)
                      }
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Paper>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Dialog
          open={openDialogDelete}
          onClose={handleCloseDelete}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Deletar Tarefa?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Você tem certeza que deseja deletar a tarefa {nomeTarefa}?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDelete}>Cancelar</Button>
            <Button onClick={handleSaveDelete} autoFocus>
              Continuar
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={openDialogEdit}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Editar Tarefa</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              placeholder={nomeTarefa}
              id="editarTarefa"
              margin="dense"
              label="Editar Tarefa"
              type="text"
              fullWidth
              onChange={(e) => setNewNomeTarefa(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancelar</Button>
            <Button onClick={handleSaveEdit} autoFocus>
              Salvar
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={openDialogAdd}
          onClose={handleCloseAdd}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Adicionar Tarefa</DialogTitle>
          <DialogContent>
            <TextField
              select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              fullWidth
              label="Dia da Semana"
              margin="normal"
              SelectProps={{
                native: true,
              }}
            >
              <option disabled value="">
              </option>
              {daysOfWeek.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </TextField>
            <DialogContent>
            <TextField
              autoFocus
              placeholder={nomeTarefa}
              id="editarTarefa"
              label="Editar Tarefa"
              type="text"
              fullWidth
              onChange={(e) => setNewNomeTarefa(e.target.value)}
            />
          </DialogContent>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAdd}>Cancelar</Button>
            <Button onClick={handleSaveAdd} autoFocus>
              Adicionar
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Tarefas;
