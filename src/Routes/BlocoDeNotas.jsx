import { Button, Container, Paper, TextareaAutosize, Grid, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import "../css/BlocoDeNotas.css";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function BlocoDeNotas() {

  const [titulo, setTitulo] = useState('');

  const [conteudo, setConteudo] = useState('');

  const [anotacoes, setAnotacoes] = useState([]);

  const [alerta, setAlerta] = useState(false);

  const handleChangeTitulo = (event) => {
    setTitulo(event.target.value);
  };

  const handleChangeConteudo = (event) => {
    setConteudo(event.target.value);
  };

  const adicionarAnotacao = () => {
    if (titulo && conteudo) {
      const novaAnotacao = {
        titulo: titulo,
        conteudo: conteudo,
      };
      setAnotacoes([...anotacoes, novaAnotacao]);
      setTitulo('');
      setConteudo('');
      setAlerta(true);
    }
  };

  const excluirAnotacao = (index) => {
    const novaLista = [...anotacoes];
    novaLista.splice(index, 1);
    setAnotacoes(novaLista);
  };

  const fecharAlerta = () => {
    setAlerta(false);
  };

  return (
    <Container maxWidth="lg" sx={{
      mt: 4, mb: 4 }}>

{/* Cadastrar anotação */}
      <Paper sx={{
        p: "1rem",
        width: "100%"}}>

  {/* Título do componente */}
          <Grid sx={{
            textAlign: "center",
            mt: "-1.5rem" }}>
            <h1>Bloco de Notas</h1>
          </Grid>

  {/* Input: Título da anotação */}
          <Grid>
            <TextareaAutosize style={{
              width: "50%",
              resize: "none",
              minHeight: "2rem",
              fontSize:"1.5rem"}}
            value={titulo}
            onChange={handleChangeTitulo}
            placeholder="Digite o título da anotação..." />
          </Grid>

  {/* Input: Conteúdo da anotação e botão salvar */}
          <Grid sx={{
          mt: "0.2rem",
          display: "flex",
          gap: "1rem",
          alignItems:"center" }}>

            <TextareaAutosize style={{
              width: "90%",
              resize: "none",
              minHeight: "20%",
              fontSize:"1.2rem" }}
              value={conteudo}
              onChange={handleChangeConteudo}
              placeholder="Digite o conteúdo da anotação..."
              variant="outlined"/>

            <Button variant="contained" color="primary"   className="save" onClick={adicionarAnotacao}>
              <SaveIcon />
            </Button>
          </Grid>
      </Paper>

{/* Alerta de anotação salva */}
      <Snackbar open={alerta} autoHideDuration={2000} onClose={fecharAlerta}>
        <Alert sx={{
          width: '100%',
          bgcolor: 'rgb(203,247,199)' }}
          onClose={fecharAlerta} severity="success" variant="outlined">Anotação salva com sucesso!
        </Alert>
      </Snackbar>

{/* Adicionar anotações */}
      <Grid>
      <ul style={{
        listStyle: "none",
        padding: "0%"}}>

        {anotacoes.map((anotacao, index) => (
          <li key={index}>
            <Paper sx={{
              p: "1rem",
              width: "100%",
              mb: "1rem",
              bgcolor: "#FFFFE0"}}>

            <h2>
              <Typography sx={{
                m: "-1rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
                textAlign:"center",
                textDecoration:"underline",
                wordBreak: "break-all",
                }}>{anotacao.titulo} 
              </Typography>
            </h2>

            <Grid style={{display: "flex",
            flexDirection:"column"}}>
              <p>
                <Typography sx={{
                  borderStyle: "solid",
                  borderWidth:"0.1rem",
                  borderColor: "#DCDCDC",
                  p: "0.4rem",
                  wordBreak:"break-word",
                  fontSize: "0.9rem",
                  Width: "100%",
                  minHeight: "4rem"
                  }}>{anotacao.conteudo}
                </Typography>
              </p>

              <Button
                variant="contained"
                color="primary" onClick={() => excluirAnotacao(index)}>
                <CloseIcon />
              </Button>
            </Grid>
            </Paper>
          </li>
        ))}
      </ul>
      </Grid>

    </Container>
  );
}