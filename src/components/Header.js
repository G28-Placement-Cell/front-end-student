import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../Sidebared/Sidebar';
import '../Sidebared/Navbar.css';
import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/student/authslice';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/student/studentApislice';
import TemporaryDrawer from './Navbar';



function Header() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  const [logoutapicall] = useLogoutMutation();

  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      await logoutapicall().unwrap();
      dispatch(logout());
      navigate('/');
    }
    catch (err) {
      console.log(err);
    }
  }

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <AppBar position="sticky" style={{ backgroundColor: "#2B2442" }}>
      <Toolbar>
          < TemporaryDrawer />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2 }}>
          Placement Cell
        </Typography>
        <Button color="inherit">Contact us</Button>
        <Button color="inherit">About Us</Button>
        <Button color="inherit" onClick={logoutHandler}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;