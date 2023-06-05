import { Box, Link, Container, Divider, Grid, Stack, Typography, IconButton, Tooltip } from '@mui/material';
import { FacebookRounded, Instagram, Twitter } from '@mui/icons-material';
import Logo from '../components/Logo';

export default function Footer() {
  return (
    <Box component="footer" bgcolor="#101820" color="#fff" pt={10} pb={5}>
      <Container>
        <Grid container spacing={{ xs: 5, md: 3 }} pb={5}>
          <Grid item xs={12} md={3}>
            <Logo white />
            <Typography mt={2.2}>Eat Simple. Talk Possible.</Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant="h6" mb={2}>
              Menu
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="none">
                Home
              </Link>
              <Link href="#" color="inherit" underline="none">
                Features
              </Link>
              <Link href="#" color="inherit" underline="none">
                FAQ
              </Link>
              <Link href="#" color="inherit" underline="none">
                Download
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant="h6" mb={2}>
              About
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="none">
                Privacy Policy
              </Link>
              <Link href="#" color="inherit" underline="none">
                Terms & Condition
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant="h6" mb={1}>
              Social Media
            </Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Instagram">
                <IconButton>
                  <Instagram />
                </IconButton>
              </Tooltip>
              <Tooltip title="Facebook">
                <IconButton>
                  <FacebookRounded />
                </IconButton>
              </Tooltip>
              <Tooltip title="Twitter">
                <IconButton>
                  <Twitter />
                </IconButton>
              </Tooltip>
            </Stack>
          </Grid>
        </Grid>
        <Divider />
        <Typography variant="caption" color="text.secondary">
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
