import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AppsOutageIcon from '@mui/icons-material/AppsOutage';
import NotesIcon from '@mui/icons-material/Notes';
import { NavLink } from 'react-router-dom';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

export const mainListItems = (
  <React.Fragment>
    <NavLink to="/calendario">
      <ListItemButton>
        <ListItemIcon>
          <CalendarMonthIcon />
        </ListItemIcon>
        <ListItemText primary="Calendário" />
      </ListItemButton>
    </NavLink>

    <NavLink
      to="/tarefas-pendentes">
      <ListItemButton>
        <ListItemIcon>
          <AppsOutageIcon />
        </ListItemIcon>
        <ListItemText primary="Tarefas pendentes" />
      </ListItemButton>
    </NavLink>

    <NavLink
      to="/notas">
      <ListItemButton>
      <ListItemIcon>
        <NotesIcon />
      </ListItemIcon>
      <ListItemText primary="Notas" />
    </ListItemButton>
    </NavLink>

    <NavLink
      to="/bloco-de-notas">
      <ListItemButton>
      <ListItemIcon>
        <TextSnippetIcon />
      </ListItemIcon>
      <ListItemText primary="Bloco de notas" />
    </ListItemButton>
    </NavLink>

  </React.Fragment>
);