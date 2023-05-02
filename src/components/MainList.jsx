import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import GradeIcon from '@mui/icons-material/Grade';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <CalendarMonthIcon />
      </ListItemIcon>
      <ListItemText primary="Calendário" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <WorkHistoryIcon />
      </ListItemIcon>
      <ListItemText primary="Tarefas pendentes" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <GradeIcon />
      </ListItemIcon>
      <ListItemText primary="Notas" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <TextSnippetIcon />
      </ListItemIcon>
      <ListItemText primary="Bloco de notas" />
    </ListItemButton>
  </React.Fragment>
);