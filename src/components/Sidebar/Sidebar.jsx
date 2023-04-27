import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListemItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';

import useStyles from './styles';

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Link to="/" className={classes.imageLink}>
      <img />
    </Link>
  );
};

export default Sidebar;
