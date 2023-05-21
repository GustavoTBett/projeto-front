import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import '../css/App.css';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems} from './MainList';
import { useState } from 'react';
import { Grid, Paper, Typography, Dialog, DialogTitle, DialogContent, Button } from '@mui/material';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function App() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const [selectedDay, setSelectedDay] = useState(null);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(4);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleCloseDialog = () => {
      setSelectedDay(null);
  };

  const handlePrevMonth = () => {
    if (currentMonthIndex === 0) return; // Bloqueia ir para o ano anterior
    setCurrentMonthIndex(prevIndex => prevIndex - 1);
  };

  const handleNextMonth = () => {
    if (currentMonthIndex === 11) return; // Bloqueia ir para o ano seguinte
    setCurrentMonthIndex(prevIndex => prevIndex + 1);
  };

  const currentMonth = months[currentMonthIndex];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(2023, currentMonthIndex);

  const daysOfMonth = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Calendário
            </Typography>
            <Avatar alt="Remy Sharp" src="/images/avatar.jpg"/>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid className='buttonsMonths'>
                <Button variant="contained" onClick={handlePrevMonth} disabled={currentMonthIndex === 0}>
                  Mês Anterior
                </Button>
                <Typography variant="h5" align="center" gutterBottom>
                  {currentMonth} 2023
                </Typography>
                <Button variant="contained" onClick={handleNextMonth} disabled={currentMonthIndex === 11}>
                  Próximo Mês
                </Button>
              </Grid>
              {/* Começa aqui a tela */}
              
              <Grid container spacing={2} className='tableCalender'>
                <Grid className='diasSemana'>
                  {daysOfWeek.map((day) => (
                    <Grid item key={day}>
                      <Typography variant="h6" align="center">
                        {day}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
                  {daysOfMonth.map((day) => (
                    <Grid item xs={2} key={day} className='tableInside'>
                      <Paper elevation={2} sx={{ padding: 2 }} onClick={() => handleDayClick(day)}>
                        <Typography variant="h6" align="center">
                          {day}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
              </Grid>

              <Dialog open={selectedDay !== null} onClose={handleCloseDialog}>
                <DialogTitle>{selectedDay !== null ? `Dia ${selectedDay}` : ''}</DialogTitle>
                <DialogContent>
                  {/* Conteúdo do dialog */}
                  <Typography variant="body1" align="center">
                    Este é o conteúdo do dia {selectedDay}.
                  </Typography>
                </DialogContent>
              </Dialog>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App
