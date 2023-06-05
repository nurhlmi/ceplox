import { useEffect, useState } from 'react';
import { MenuRounded } from '@mui/icons-material';
import { AppBar, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import Logo from '../components/Logo';

const menu = ['Home', 'Features', 'FAQ'];

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      color={scrollPosition > 10 ? 'inherit' : 'transparent'}
      sx={{ transition: '0.2s', boxShadow: scrollPosition < 10 && 'none' }}
    >
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" py={2}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton>
              <MenuRounded
                sx={{ display: { xs: 'flex', md: 'none' }, color: scrollPosition < 10 ? '#fff' : 'inherit' }}
              />
            </IconButton>
            <Logo white={!(scrollPosition > 10)} />
          </Stack>
          <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {menu.map((value, index) => (
              <Typography
                key={index}
                variant="body2"
                fontWeight="bold"
                component={Button}
                color={scrollPosition > 10 ? 'inherit' : 'white'}
              >
                {value}
              </Typography>
            ))}
          </Stack>
          <Button variant="contained" color={scrollPosition > 10 ? 'primary' : 'inherit'}>
            Download
          </Button>
        </Stack>
      </Container>
    </AppBar>
  );
}
