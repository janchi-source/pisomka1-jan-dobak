// src/components/NavBar.tsx

'use client';  // Mark this component as a Client Component

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import { usePathname, useRouter } from 'next/navigation';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import Login from '@/app/auth/prihlasenie/page';
import LoginIcon from '@mui/icons-material/Login';
// import LogoutIcon from '@mui/icons-material/Logout';

const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const pathname = usePathname();
  const router = useRouter();

  React.useEffect(() => {
    switch (pathname) {
      case '/':
        setValue(0);
        break;
      case '/notifikacie':
        setValue(1);
        break;
      case '/profile':
        setValue(2);
        break;
      default:
        setValue(0);
        break;
    }
  }, [pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push('/');
        break;
      case 1:
        router.push('/auth/signup');
        break;
      case 2:
        router.push('/auth/signin');
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Sign Up" icon={<LoginIcon />} />
        <BottomNavigationAction label="Sign In" icon={<LoginIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default NavBar;
