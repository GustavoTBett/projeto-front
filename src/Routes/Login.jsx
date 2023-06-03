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

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Validação de campos vazios
    if (!data.get('email') && !data.get('password')) {
      alert("Informe seu e-mail e senha");
    }
    else if (!data.get('email')) {
      alert("Informe seu e-mail");
    }
    else if (!data.get('password')) {
      alert("Informe sua senha");
    }
    // Validação usuários cadastrados
    else if (data.get('email') === database.username) {
      if (data.get('password') !== database.password) {
        // Invalid password
        alert("Senha incorreta");
      } 
      else {
        setLogin(true);
      }
    } 
    else {
      // Username not found
      alert("Usuário não encontrado");
      console.log(user);
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
          {login && (
            <Navigate to="app/calendario" replace={true} />
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
                  <Link href="EsqueceuSenha" variant="body2">
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
