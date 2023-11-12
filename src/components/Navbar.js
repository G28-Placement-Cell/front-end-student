import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { SidebarData } from '../Sidebared/Sidebar';
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';

export default function TemporaryDrawer({ logoutHandler }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300, height: 1000 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: '#2B2442' }}
    >
      {SidebarData.map((item, index) => (
        <li key={index} className={item.cName}>
          <Link to={item.path} onClick={item.title === 'Logout' ? logoutHandler : undefined}>
            {item.icon}
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {<FaIcons.FaBars style={{ color: 'white', alignSelf: 'center', fontSize: 25, justifySelf: 'center', marginBottom: 4 }} />}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor, logoutHandler)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}