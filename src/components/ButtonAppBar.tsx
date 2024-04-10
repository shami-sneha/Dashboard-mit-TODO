import React from 'react';
import Box from '@mui/material/Box';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import RegisterPage from './RegisterPage';
import Tasks from '../Pages/Tasks';
export default function PositionedPopper() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const handleClick = (newPlacement: PopperPlacementType) => (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      {/* <Sidebar/> */} TeamWork
          </Typography>
          <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
  <Button color="inherit" onClick={handleClick('right-start')}>
    Register
  </Button>
  </Link>
  <Link to="/tasks" style={{ textDecoration: 'none', color: 'inherit' }}>
  <Button color="inherit" onClick={handleClick('right-start')}>
    Task
  </Button>
  </Link>
  <Link to="/daily" style={{ textDecoration: 'none', color: 'inherit' }}>
  <Button color="inherit" onClick={handleClick('right-start')}>
    DailyTask
  </Button>
  </Link>
          
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
  
     
      </Box>
    );
  }

