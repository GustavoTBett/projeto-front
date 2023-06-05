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
        <Link color="inherit" target="_blank" href="https://github.com/GustavoTBett/projeto-front">
          GitHub Frontend
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const defaultTheme = createTheme();  

export default function SignIn() {
  const [login, setLogin] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState(false);
  const [errorPass, setErrorPass] = React.useState(false);
  const [incorrectPass, setIncorrectPass] = React.useState(false);
  const [findUser, setFindUser] = React.useState(false); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Validação de campos vazios
    if (!data.get('email') && !data.get('password')) {
      setError(true);
    }
    else if (!data.get('email')) {
      setErrorEmail(true);
    }
    else if (!data.get('password')) {
      setErrorPass(true);
    }
    // Validação usuários cadastrados
    else if (data.get('email') === database.username) {
      if (data.get('password') !== database.password) {
        // Invalid password
        setIncorrectPass(true);
      } 
      else {
        setLogin(true);
      }
    } 
    else {
      // Username not found
      setFindUser(true);
    }
};
  const user = "user1"
  const database =
    {
      username: "user1",
      password: "pass1"
    }
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
          {/* Ir para a tela de login */}
          {login && (
            <Navigate to="app/calendario" replace={true} />
          )}
          {/* Error campos de login vazios */}
          {error && (
            <div>
              <Dialog open={error} onClose={() => setError(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
              <Stack  sx={{ width: '100%' }} spacing={2}>
                <Alert onClose={() => {setError(false)}} severity="warning">E-mail e senha devem ser preenchidos</Alert>
              </Stack>
              </Dialog>
            </div>
          )}
          {/* Erro e-mail vazio */}
          {errorEmail && (
            <div>
              <Dialog open={errorEmail} onClose={() => setErrorEmail(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
              <Stack  sx={{ width: '100%' }} spacing={2}>
                <Alert onClose={() => {setErrorEmail(false)}} severity="warning">E-mail deve ser preenchido</Alert>
              </Stack>
              </Dialog>
            </div>
          )}
          {/* Erro senha vazia */}
          {errorPass && (
            <div>
              <Dialog open={errorPass} onClose={() => setErrorPass(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
              <Stack  sx={{ width: '100%' }} spacing={2}>
                <Alert onClose={() => {setErrorPass(false)}} severity="warning">Senha deve ser preenchida</Alert>
              </Stack>
              </Dialog>
            </div>
          )}
          {/* Senha incorreta */}
          {incorrectPass && (
            <div>
              <Dialog open={incorrectPass} onClose={() => setIncorrectPass(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
              <Stack  sx={{ width: '100%' }} spacing={2}>
                <Alert onClose={() => {setIncorrectPass(false)}} severity="error">Senha incorreta</Alert>
              </Stack>
              </Dialog>
            </div>
          )}
          {/* Usuário não encontrado */}
          {findUser && (
            <div>
              <Dialog open={findUser} onClose={() => setFindUser(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
              <Stack  sx={{ width: '100%' }} spacing={2}>
                <Alert onClose={() => {setFindUser(false)}} severity="error">Usuário incorreto</Alert>
              </Stack>
              </Dialog>
            </div>
          )}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid container>
              <Grid item xs>
                  <Link href="redefinir-senha" variant="body2">
                    Esqueceu sua senha?
                  </Link>
              </Grid>
            </Grid>
            <Button
              type="Submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Acessar
            </Button>
            <Grid container>
              <Grid item>
                <Link href="cadastrar" variant="body2">
                  {"Não possui uma conta? Cadastrar"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
