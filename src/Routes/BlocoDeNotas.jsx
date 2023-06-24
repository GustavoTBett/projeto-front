import { Button, Container, Paper, TextareaAutosize } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import "../css/BlocoDeNotas.css";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function BlocoDeNotas() {

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
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

{/* Cadastrar anotação */}
      <Paper
        style={{
        paddingTop: "0px",
        padding: "10px",
        width: "100%"}}>

  {/* Título do componente */}
          <div>
            <h1 style={{
            textAlign: "center",
            marginTop:"1px"
            }}>Bloco de Notas</h1>
          </div>

  {/* Input: Título da anotação */}
          <div>
            <TextareaAutosize
            value={titulo}
            onChange={handleChangeTitulo}
            placeholder="Digite o título da anotação..." 
            style={{ width: "100vh", resize: "none", minHeight: "20px" }}/>
          </div>

  {/* Input: Conteúdo da anotação e botão salvar */}
          <div style={{
          marginTop: "0.2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center"}}>

            <TextareaAutosize
              value={conteudo}
              onChange={handleChangeConteudo}
              placeholder="Digite o conteúdo da anotação..."
              variant="outlined"
              style={{ width: "140vh", resize: "none", minHeight: "60px" }}/>

            <Button variant="contained" color="primary" className="save" onClick={adicionarAnotacao}>
              <SaveIcon />
            </Button>
          </div>
        </Paper>

{/* Alerta de anotação salva */}
      <Snackbar open={alerta}  autoHideDuration={2000} onClose={fecharAlerta}>

        <Alert onClose={fecharAlerta} severity="success" variant="outlined" sx={{ width: '100%', backgroundColor: 'rgb(203,247,199)'}}>Anotação salva com sucesso!
        </Alert>
      </Snackbar>

{/* Adicionar anotações */}
      <ul 
      style={{
      listStyle: "none",
      padding: "0px"}}>

        {anotacoes.map((anotacao, index) => (
          <li key={index}>
            <Paper
              style={{
              padding: "10px",
              width: "100%",
              marginBottom:"10px"}}>
            <h2 style={{
            textAlign:"center",
            textDecoration:"underline",
            padding: "5px",
            wordBreak:"break-all",
            margin:"5px"
            }}>{anotacao.titulo}</h2>

            <div style={{display: "flex",
            flexDirection:"column"}}>
              <p style={{borderStyle: "solid",
              borderWidth:"1px",
              padding: "5px",
              wordBreak:"break-word",
              Width: "140vh",
              }}>{anotacao.conteudo}</p>

              <Button
                variant="contained"
                color="primary" onClick={() => excluirAnotacao(index)}>
                <CloseIcon />
              </Button>
            </div>
            </Paper>
          </li>
        ))}
      </ul>

    </Container>
  );
}

export default BlocoDeNotas;