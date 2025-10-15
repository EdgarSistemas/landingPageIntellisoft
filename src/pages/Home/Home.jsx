import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LanguageIcon from "@mui/icons-material/Language";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import Container from "@mui/material/Container";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import "./home.css";
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
    <ImagenPrincipal />
    <ContainerTecnologias />
    <Servicios />
    <TestimoniosSection />
      <Box sx={{ pt: 15,  textAlign: "center", mt: 16,
                  backgroundColor: "#7ac3e73a",
                  width: "100%",
                  minHeight: "100vh",
                  }}>
        <div className="title-nav">
          <h3>Innovación tecnológica</h3>
          <p>
            Desarrollamos soluciones digitales que transforman tu negocio.
            <br />
            Especialistas en aplicaciones móviles y web de alta calidad.
          </p>
          <Button variant="contained" style={{ marginRight: 20 }}
          component={Link}
          to="/products"
          color="button1"
          >
            Conocer más
          </Button>
          <Button variant="outlined"
          component={Link}
          to="/products"
          >Sobre nosotros</Button>
        </div>
      </Box>
      
    </>
  );
}



  function Servicios() {
    return (
                  <Box
                sx={{
                  mt: 16,
                  backgroundColor: "#7ac3e73a",
                  width: "100%",
                  minHeight: "100vh",
                  py: 4,
                }}
              >
                <Container 
                  maxWidth={false}
                  sx={{ 
                    px: { xs: 2, sm: 3, md: 4 },
                  }}
                ></Container>
                    <Typography
                      variant="h3"
                      component="h3"
                      align="center"
                      gutterBottom
                      sx={{ mb: 4, mt: 4, fontWeight: "bold" }}
                    >
                      Nuestros Servicios
                    </Typography>

                    <Grid
                      container
                      spacing={3}
                      justifyContent="center"
                      sx={{ maxWidth: 1200, margin: "0 auto" }}
                    >
                      <Grid item xs={12} md={6}>
                        <Card
                          sx={{
                            maxWidth: 500,
                            margin: "0 auto",
                            boxShadow: 3,
                            "&:hover": {
                              boxShadow: 6,
                              transform: "translateY(-4px)",
                              transition: "all 0.3s ease",
                            },
                          }}
                        >
                          <CardContent>
                            <Typography style={{ textAlign: "left" }}>
                              <LanguageIcon color="primary" fontSize="large" />
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              align="left"
                              mt={2}
                              ml={1}
                              mb={2}
                            >
                              Desarrollo Web
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{ color: "text.secondary", textAlign: "left", mb: 2 }}
                              ml={1}
                            >
                              Creación de sitios web atractivos y funcionales que capturan la
                              esencia de tu marca. Desarrollamos experiencias digitales únicas
                              y responsive.
                              <List
                                sx={{
                                  width: "100%",
                                  maxWidth: 360,
                                  bgcolor: "background.paper",
                                }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                              >
                                <ListItem>
                                  <ListItemIcon>
                                    <ElectricBoltIcon color="primary" />
                                  </ListItemIcon>
                                  <ListItemText primary="Tecnologías modernas" />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <ElectricBoltIcon color="primary" />
                                  </ListItemIcon>
                                  <ListItemText primary="Arquitectura escalable" />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <ElectricBoltIcon color="primary" />
                                  </ListItemIcon>
                                  <ListItemText primary="SEO optimizado" />
                                </ListItem>
                              </List>
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Card
                          sx={{
                            maxWidth: 500,
                            margin: "0 auto",
                            boxShadow: 3,
                            "&:hover": {
                              boxShadow: 6,
                              transform: "translateY(-4px)",
                              transition: "all 0.3s ease",
                            },
                          }}
                        >
                          <CardContent>
                            <Typography style={{ textAlign: "left" }}>
                              <SmartphoneIcon color="primary" fontSize="large" />
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              align="left"
                              mt={2}
                              ml={1}
                              mb={2}
                            >
                              Desarrollo Móvil
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{ color: "text.secondary", textAlign: "left", mb: 2 }}
                              ml={1}
                            >
                              Desarrollo de apps nativas y multiplataforma para iOS y Android.
                              Experiencias móviles fluidas y optimizadas para tus usuarios.
                              <List
                                sx={{
                                  width: "100%",
                                  maxWidth: 360,
                                  bgcolor: "background.paper",
                                }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                              >
                                <ListItem>
                                  <ListItemIcon>
                                    <ElectricBoltIcon color="primary" />
                                  </ListItemIcon>
                                  <ListItemText primary="Rendimiento optimizado" />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <ElectricBoltIcon color="primary" />
                                  </ListItemIcon>
                                  <ListItemText primary="Diseño intuitivo" />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <ElectricBoltIcon color="primary" />
                                  </ListItemIcon>
                                  <ListItemText primary="Integración completa" />
                                </ListItem>
                              </List>
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Box>
     );
}

function ContainerTecnologias() { 
  return (
    <Grid container spacing={2} mt={10}>
      <Grid size = {{ xs: 12, md: 6 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            padding: 4,
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            gutterBottom
            sx={{ fontWeight: "bold", mb: 4 , textAlign: "left"}}
          >
            Tecnología de Vanguardia
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", textAlign: "left", mb: 2 }}
          >
            Utilizamos las últimas tecnologías para garantizar que tus
            aplicaciones sean rápidas, seguras y escalables. Nuestro equipo está
            siempre actualizado con las tendencias del mercado.
          </Typography>
          </Box>
          </Grid>
      <Grid size = {{ xs: 12, md: 6 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            padding: 4,
          }}
        >
          <img src="./img/tecno.jpg" alt="Tecnologías" style={{ maxWidth: "100%", borderRadius: 10 }} /> 
          </Box>
          </Grid>
          
      </Grid>
  );
}

function ImagenPrincipal() {
  return (
    <Box
      sx={{
        marginTop: { 
          xs: 5,    // Celular: 40px
          sm: 6,    // Tablet pequeña: 48px  
          md: 8,    // Tablet: 64px
          lg: 5   // Desktop: 80px
        },
        display: 'flex',
        justifyContent: 'center',
        paddingX: { xs: 2, sm: 3, md: 4 }, // Padding lateral responsivo
      }}
    >
      <img
        src="./img/logo.gif"
        alt="Imagen Principal"
        style={{
          width: '80%',
          height: 'auto',
          maxWidth: { 
            xs: '280px',  // Celular
            sm: '350px',  // Tablet pequeña
            md: '400px',  // Tablet
            lg: '450px'   // Desktop
          },
        }}
      />
    </Box>
  );
}


function TestimoniosSection() {

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 5, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.6rem' } }}>
            Empresas que Confían en Nosotros
          </Typography>
          
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            centerMode={true}
            centerSlidePercentage={33.3}
          >
            {[1, 2, 3].map((item) => (
              <Box key={item} sx={{ px: 2 }}>
                <Box
                  component="img"
                  src={`./img/empresas/${item}.png`}
                  alt={`Empresa ${item}`}
                  sx={{
                    height: 120,
                    width: 'auto',
                    maxWidth: 150,
                    
                    opacity: 0.7,
                    transition: 'all 0.3s',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      opacity: 1,
                      transform: 'scale(1.1)'
                    }
                  }}
                />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
}








export default Home;
