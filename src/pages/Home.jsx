import { Box, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import Page from '../components/Page';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import CustomCard from '../components/CustomCard';
import CustomButton from '../components/CustomButton';

export default function Home() {
  return (
    <Page title="Eat Simple. Talk Possible.">
      <Navbar />
      <Stack
        sx={{
          color: '#fff',
          //  background: '#185a9d',
          //  background: '-webkit-linear-gradient(to right, #43cea2, #185a9d)',
          background: 'linear-gradient(to right, #43cea2, #185a9d)',
        }}
      >
        <Container>
          <Grid container alignItems="center" justifyContent="center" pt={15} pb={10}>
            <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'left' }} order={{ xs: 2, md: 1 }}>
              <Typography variant="h1">Eat Simple.</Typography>
              <Typography variant="h1">Talk Possible.</Typography>
              <Stack direction="row" justifyContent={{ xs: 'center', md: 'left' }} spacing={2} mt={5}>
                <CustomButton img="google-play.png" subtitle="Get it on" title="Google Play" />
                <CustomButton img="apple.png" subtitle="Download on the" title="App Store" />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={8} md={6} order={{ xs: 1, md: 2 }}>
              <img
                src="https://mockuuups-web.ams3.cdn.digitaloceanspaces.com/web/images/header-iphone-mockups-2.png"
                alt="Download on the App Store"
                width="100%"
              />
            </Grid>
          </Grid>
        </Container>
      </Stack>
      <Container sx={{ pt: 10 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Why order from us?
        </Typography>
        <Typography color="text.secondary" align="center">
          There are several reasons why you should order through our application. <br />
          Here are some of the benefits you can get:
        </Typography>
        <Grid container spacing={3} mt={0}>
          <Grid item xs={12} md={4}>
            <CustomCard
              src="https://i.gojekapi.com/darkroom/gofood-id/v2/images/uploads/c5f6714a-ede0-48a5-88ab-9b3a4ce40fdf_why-gofood-delivery.png?auto=format"
              title="Easy Ordering"
              description="You can easily find the product or service you want, add it to your shopping cart, and make payments quickly and securely."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomCard
              src="https://i.gojekapi.com/darkroom/gofood-id/v2/images/uploads/6bf66475-00fc-4a41-92f3-65fc37e5eddd_why-gofood-deals.png?auto=format"
              title="Wider Choice"
              description="You can explore a wider selection and compare different options before making a buying decision."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomCard
              src="https://i.gojekapi.com/darkroom/gofood-id/v2/images/uploads/80cb711b-d5c1-4c1e-a1a2-92069eb0a859_why-gofood-order.png?auto=format"
              title="Special  Discounts"
              description="You can take advantage of this opportunity to get more affordable prices or other additional benefits."
            />
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ pt: 10, mb: 10 }}>
        {/* <Typography variant="h3" align="center" mb={3}>
          Features
        </Typography> */}
        <Grid container alignItems="center" spacing={3} mb={3}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography variant="h3" gutterBottom>
              Order Food
            </Typography>
            <Typography>
              Fitur ini memungkinkan pengguna untuk memesan makanan dari restoran atau penjual makanan yang terdaftar
              dalam aplikasi. Pengguna dapat menjelajahi menu, memilih makanan yang diinginkan, menambahkannya ke
              keranjang belanja, dan memproses pembayaran melalui aplikasi. Setelah itu, pesanan akan dikirim ke
              restoran atau penjual makanan untuk diproses dan diantar ke lokasi pengguna.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6} order={{ xs: 1, md: 2 }}>
            <img
              src="https://mockuuups-web.ams3.cdn.digitaloceanspaces.com/web/images/header-iphone-mockups-2.png"
              alt="Download on the App Store"
              width="100%"
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center" spacing={3} mb={3}>
          <Grid item xs={12} sm={8} md={6}>
            <img
              src="https://mockuuups-web.ams3.cdn.digitaloceanspaces.com/web/images/header-iphone-mockups-2.png"
              alt="Download on the App Store"
              width="100%"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Sell Food
            </Typography>
            <Typography>
              Fitur ini memungkinkan pemilik restoran atau penjual makanan untuk memasarkan dan menjual produk makanan
              mereka melalui aplikasi. Mereka dapat membuat profil bisnis, mengunggah menu makanan, mengatur harga,
              mengelola persediaan, dan menerima pesanan dari pelanggan. Fitur ini memberikan platform bagi pemilik
              bisnis makanan untuk memperluas jangkauan mereka dan meningkatkan penjualan.
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" spacing={3} mb={3}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography variant="h3" gutterBottom>
              Talks (Open & by Topics)
            </Typography>
            <Typography>
              Fitur ini memungkinkan pengguna untuk berpartisipasi dalam percakapan yang terfokus pada topik tertentu
              yang berkaitan dengan makanan. Misalnya, topik seperti "Resep dan Masakan Rumahan," "Restoran Terbaik di
              Kota," atau "Makanan Sehat dan Gizi." Pengguna dapat bergabung dengan talks yang menarik bagi mereka,
              mengajukan pertanyaan, memberikan saran, atau berbagi pengetahuan mereka.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6} order={{ xs: 1, md: 2 }}>
            <img
              src="https://mockuuups-web.ams3.cdn.digitaloceanspaces.com/web/images/header-iphone-mockups-2.png"
              alt="Download on the App Store"
              width="100%"
            />
          </Grid>
        </Grid>
        <Card
          sx={{
            mt: 10,
            color: '#fff',
            background: 'linear-gradient(to right, #43cea2, #185a9d)',
          }}
        >
          <CardContent sx={{ px: { xs: 1, md: 2 } }}>
            <Typography variant="h3" textAlign={{ xs: 'center', md: 'left' }}>
              Download aplikasi CeploX sekarang!
            </Typography>
            <Stack direction="row" justifyContent={{ xs: 'center', md: 'left' }} spacing={{ xs: 1, md: 2 }} mt={2}>
              <CustomButton img="google-play.png" subtitle="Get it on" title="Google Play" />
              <CustomButton img="apple.png" subtitle="Download on the" title="App Store" />
            </Stack>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                position: 'absolute',
                top: 20,
                right: 0,
                width: 800,
                height: 800,
                background:
                  'url(https://mockuuups-web.ams3.cdn.digitaloceanspaces.com/web/images/header-iphone-mockups-2.png)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </CardContent>
        </Card>
      </Container>
      <Footer />
    </Page>
  );
}
