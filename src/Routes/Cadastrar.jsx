import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/GustavoTBett/projeto-front">
        GitHub Frontend
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const [login, setLogin] = React.useState(false);
  const [errorCadastro, setErrorCadastro] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState(false);
  const [errorNome, setErrorNome] = React.useState(false);
  const [errorSobrenome, setErrorSobrenome] = React.useState(false);
  const [errorPass, setErrorPass] = React.useState(false);
  const [cadastro, setCadastro] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Validação de campos vazios
    if (!data.get('email') && !data.get('password') && !data.get('nome') && !data.get('sobrenome')) {
        setErrorCadastro(true);
      }
      else if (!data.get('nome')) {
        setErrorNome(true);
      }
      else if (!data.get('sobrenome')) {
        setErrorSobrenome(true);
      }
      else if (!data.get('email')) {
        setErrorEmail(true);
      }
      else if (!data.get('password')) {
        setErrorPass(true);
      }
      // Acessar página de login
      else {
        setCadastro(true);
      } 
      
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" className='mainLogin'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: 'transparent' }}>
                <img src="./bookmark.png" alt="" />
            </Avatar>
          <Typography component="h1" variant="h5">
            Organnize
          </Typography>
          {login && (
            <Navigate to="/" replace={true} />
          )}
          {/* Erro cadastro vazio */}
          {errorCadastro && (
            <div>
              <Dialog open={errorCadastro} onClose={() => setErrorCadastro(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
              <Stack  sx={{ width: '100%' }} spacing={2}>
                <Alert onClose={() => {setErrorCadastro(false)}} severity="warning">O cadastro não pode estar vazio</Alert>
              </Stack>
              </Dialog>
            </div>
          )}
          {/* Erro nome vazio */}
          {errorNome && (
            <div>
              <Dialog open={errorNome} onClose={() => setErrorNome(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
              <Stack  sx={{ width: '100%' }} spacing={2}>
                <Alert onClose={() => {setErrorNome(false)}} severity="warning">O nome deve ser preenchido</Alert>
              </Stack>
              </Dialog>
            </div>
          )}
          {/* Erro sobrenome vazio */}
          {errorSobrenome && (
            <div>
              <Dialog open={errorSobrenome} onClose={() => setErrorSobrenome(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
              <Stack  sx={{ width: '100%' }} spacing={2}>
                <Alert onClose={() => {setErrorSobrenome(false)}} severity="warning">O sobrenome deve ser preenchido</Alert>
              </Stack>
              </Dialog>
            </div>
          )}
          {/* Erro e-mail vazio */}
          {errorEmail && (
            <div>
              <Dialog open={errorEmail} onClose={() => setErrorEmail(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
              <Stack  sx={{ width: '100%' }} spacing={2}>
                <Alert onClose={() => {setErrorEmail(false)}} severity="warning">O e-mail deve ser preenchido</Alert>
              </Stack>
              </Dialog>
            </div>
          )}
          {/* Erro senha vazia */}
          {errorPass && (
            <div>
              <Dialog open={errorPass} onClose={() => setErrorPass(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
              <Stack  sx={{ width: '100%' }} spacing={2}>
                <Alert onClose={() => {setErrorPass(false)}} severity="warning">A senha deve ser preenchida</Alert>
              </Stack>
              </Dialog>
            </div>
          )}
          {/* Cadastro sucesso */}
          {cadastro && (
            <div>
              <Dialog open={cadastro} onClose={() => setLogin(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
              <Stack  sx={{ width: '100%' }} spacing={2}>
                <Alert
                  action={
                    <Button color="inherit" size="small" onClick={() => setLogin(true)}>
                      Seguir
                    </Button>
                  }
                >
                Cadastro realizado com sucesso
                </Alert>
              </Stack>
              </Dialog>
            </div>
          )}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="nome"
                  required
                  fullWidth
                  id="nome"
                  label="Nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="sobrenome"
                  label="Sobrenome"
                  name="sobrenome"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => {setUsername(event.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(event) => {setPassword(event.target.value)}}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2" underline="hover">
                  Já possui uma conta? Acessar
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}