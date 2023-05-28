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
        <Link color="inherit" href="https://github.com/GustavoTBett/projeto-front">
          GitHub Frontend
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const defaultTheme = createTheme();  
  
  export default function SignIn() {
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      // Validação de campos vazios
      if (!data.get('matricula') && !data.get('password')) {
        alert("Informe uma matrícula e senha");
      }
      else if (!data.get('matricula')) {
        alert("Informe uma matrícula");
      }
      else if (!data.get('password')) {
        alert("Informe uma senha");
      }
      // Validação usuários cadastrados
      else if (data.get('matricula') === database.username) {
        if (data.get('password') !== database.password) {
          // Invalid password
          alert("Senha incorreta");
        } 
        else {
          return <Navigate href="http://localhost:5173/calender"/>
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
        <Container component="main" maxWidth="xs">
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
                <img src="./public/bookmark.png" alt="" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Organnize
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="matricula"
                label="Matrícula"
                name="matricula"
                autoComplete="matricula"
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
                    <Link href="#" variant="body2">
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
                  <Link href="/SignUp" variant="body2">
                    {"Não possui uma matrícula? Cadastrar"}
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