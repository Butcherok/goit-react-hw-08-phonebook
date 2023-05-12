import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { UserMenu } from '../UserMenu/UserMenu';

export default function AppNavBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1, width: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
            <MobileMenu />
            <Navigation />
            <AuthNav />
            <UserMenu/>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
