import { Button, Container, Grid, Paper, TextareaAutosize } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import "../css/BlocoDeNotas.css";

function BlocoDeNotas() {
  const [grids, setGrids] = useState([1]);

  const addGrid = () => {
    setGrids((prevGrids) => [...prevGrids, {}]);
  };

  const removeGrid = (index) => {
    setGrids((prevGrids) => {
      const newGrids = [...prevGrids];
      newGrids.splice(index, 1);
      return newGrids;
    });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {grids.map((grid, index) => (
        <Grid container spacing={3} key={index} style={{ marginBottom: "20px" }}>
          <Paper
            style={{
              padding: "10px",
              margin: "10px",
              width: "100%",
              display: "flex",
            }}
          >
            <TextareaAutosize
              variant="outlined"
              style={{ width: "700vh", resize: "none", minHeight: "60px" }}
            />
            <Container
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                gap: "10px",
                maxHeight: "64px",
                alignItems: "center",
              }}
            >
              <Button variant="contained" color="primary" className="save">
                <SaveIcon />
              </Button>
              {index === grids.length - 1 && grids.length > 1 ? ( 
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => removeGrid(index)}
                  className="close"
                >
                  <CloseIcon />
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  disabled
                  style={{  backgroundColor: "#bbbbbb", cursor: "not-allowed" }}
                >
                  <CloseIcon />
                </Button>
              )}
            </Container>
          </Paper>
        </Grid>
      ))}
      <Grid container justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          onClick={addGrid}
          style={{ height: "48px", width: "86px" }}
        >
          <AddIcon />
        </Button>
      </Grid>
    </Container>
  );
}

export default BlocoDeNotas;
