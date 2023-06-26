import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Navigate } from 'react-router-dom';
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

export default function ResetPass() {
  const [mailMensage, setMailMensage] = React.useState(false);
  const [logar, setLogar] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Validação de campos vazios
    if (!data.get('email')) {
      setErrorEmail(true);
      }
      // Acessar página de login
    else {
      setMailMensage(true);
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
          {logar && (
            <Navigate to="/" replace={true} />
          )}
          {errorEmail && (
            <div>
              <Dialog open={errorEmail} onClose={() => setErrorEmail(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
              <Stack  sx={{ width: '100%' }} spacing={2}>
                <Alert onClose={() => {setErrorEmail(false)}} severity="warning">E-mail deve ser preenchido</Alert>
              </Stack>
              </Dialog>
            </div>
          )}
          {mailMensage && (
            <Dialog open={mailMensage} onClose={() => setMailMensage(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
            <DialogTitle id='dialog-title'>Nova senha enviada</DialogTitle>
            <DialogContent>
              <DialogContentText id='dialog-description'>
                Confira sua caixa de entrada do e-mail informado, caso não encontre verifique sua caixa de spam 
                ou entre em contato conosco pelo e-mail <b>suporte@organnize.com.br</b>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setMailMensage(false)}>Cancelar</Button>
              <Button autoFocus onClick={() => setLogar(true)}>Logar</Button>
            </DialogActions>
          </Dialog>
          )}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Redefinir senha"s
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar
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