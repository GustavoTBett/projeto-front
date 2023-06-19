import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AppsOutageIcon from '@mui/icons-material/AppsOutage';
import NotesIcon from '@mui/icons-material/Notes';
import { NavLink } from 'react-router-dom';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

const currentDate = new Date();
const day = currentDate.getDate().toString().padStart(2, '0');
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const currentDayMonth = `${day}-${month}`;

export const mainListItems = (
  <React.Fragment>
    <NavLink to="calendario" style={{textDecorationLine: 'none', color: 'rgb(25,118,210)'}}>
      <ListItemButton sx={{'&:hover': {backgroundColor: 'rgb(189,190,189)'}}}>
        <ListItemIcon>
          <CalendarMonthIcon />
        </ListItemIcon>
        <ListItemText primary="Calendário" />
      </ListItemButton>
    </NavLink>

    <NavLink
      to={`tarefas-pendentes/${currentDayMonth}`} style={{textDecorationLine: 'none', color: 'rgb(25,118,210)'}}>
      <ListItemButton sx={{'&:hover': {backgroundColor: 'rgb(189,190,189)'}}}>
        <ListItemIcon>
          <AppsOutageIcon />
        </ListItemIcon>
        <ListItemText primary="Tarefas pendentes" />
      </ListItemButton>
    </NavLink>

    <NavLink
      to="notas" style={{textDecorationLine: 'none', color: 'rgb(25,118,210)'}}>
      <ListItemButton sx={{'&:hover': {backgroundColor: 'rgb(189,190,189)'}}}>
      <ListItemIcon>
        <NotesIcon />
      </ListItemIcon>
      <ListItemText primary="Notas" />
    </ListItemButton>
    </NavLink>

    <NavLink
      to="bloco-de-notas" style={{textDecorationLine: 'none', color: 'rgb(25,118,210)'}}>
      <ListItemButton sx={{'&:hover': {backgroundColor: 'rgb(189,190,189)'}}}>
      <ListItemIcon>
        <TextSnippetIcon />
      </ListItemIcon>
      <ListItemText primary="Bloco de notas" />
    </ListItemButton>
    </NavLink>

  </React.Fragment>
);