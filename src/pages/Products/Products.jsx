import { Box, Typography, Grid, Button, CardContent } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AndroidIcon from '@mui/icons-material/Android';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StarIcon from '@mui/icons-material/Star';

function Products() {
    return (
        <>
        <NuestrosProducts />
        <ProductoWeb />
        <Tecnologías />
        </> 
    );
}





function NuestrosProducts (){
  return (
    <>
    <Box sx={{ pt: 10, textAlign: "center"}}>
        <div className="title-nav">
          <h3>Nuestros Productos</h3>
          <p>
            Descubre nuestras soluciones diseñadas para impulsar tu negocio.
          </p>
        </div>
      </Box>
      <Grid container  sx={{  p: 5, justifyContent: "center", alignItems: "center", textAlign: "center", gap: 5 }}>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
         <AndroidIcon sx={{ fontSize: 90, color:'#386641'}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            App Móvil
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' , textAlign: "center"}}>
            Aplicaciones móviles personalizadas para Android que impulsan tu negocio.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
         <VerifiedUserIcon sx={{ fontSize: 80, color:'#023e8a'}}/>
         <br></br>
         <StarIcon sx={{ fontSize: 20, color:'#ffb703'}}/>
         <StarIcon sx={{ fontSize: 20, color:'#ffb703'}}/>
         <StarIcon sx={{ fontSize: 30, color:'#ffb703'}}/>
         <StarIcon sx={{ fontSize: 20, color:'#ffb703'}}/>
         <StarIcon sx={{ fontSize: 20, color:'#ffb703'}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Calidad Premium
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' , textAlign: "center"}}>
            Aplicaciones móviles personalizadas para Android que impulsan tu negocio.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
         <LaptopChromebookIcon sx={{ fontSize: 90, color:'#03045e'}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            App Móvil
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' , textAlign: "center"}}>
            Aplicaciones móviles personalizadas para Android que impulsan tu negocio.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      
      <Grid container  sx={{  p: 5, justifyContent: "left", alignItems: "left", textAlign: "left" }}>
      <Grid item xs={12} md={6} sm={4} >
        <Box sx={{
            display: "flex",
            flexDirection: "container",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "justify",
            margin:5
          }}>
          <img src="./img/app3.png" alt="Producto 2" style={{ maxWidth: "15%", borderRadius: 10 }} />
          <img src="./img/app2.png" alt="Producto 2" style={{ maxWidth: "10%", borderRadius: 10 }} />
           <Typography
            variant="h4"
            component="h4"
            gutterBottom
            sx={{ fontWeight: "bold", textAlign: "center", justifyContent: "left", alignItems: "left", pl: 5, pr:5 }}
            
          >
            App Móvil Personalizada

          <Typography variant="body1" sx={{ color: "text.secondary", mt: 4, textAlign: "justify" }}>
              Aplicaciones móviles a medida para iOS y Android que se adaptan a las necesidades de tu negocio.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary",textAlign: "justify" }}>
              Desde comercio electrónico hasta aplicaciones de productividad, impulsamos tu éxito.
          </Typography>
          <Button variant="contained" color="button2" sx={{ mt: 4 }}>
              Más Información
          </Button>
          </Typography>
          
        </Box>
      </Grid>
      </Grid>
    </>
  );
}

function ProductoWeb (){
  return (
    <>
    
      <Grid container  sx={{  p:5, justifyContent: "left", alignItems: "left", textAlign: "left" }}>
      <Grid item xs={12} md={6} sm={4} >
        <Box sx={{
            display: "flex",
            flexDirection: "container",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "justify",
            margin:5
          }}><Typography
            variant="h4"
            component="h4"
            gutterBottom
            sx={{ fontWeight: "bold", textAlign: "center", justifyContent: "left", alignItems: "left", pl: 5, pr:5 }}
          >
            Aplicaciones Web a tu Medida
          <Typography variant="body1" sx={{ color: "text.secondary", mt: 4, textAlign: "justify" }}>
              Aplicaciones móviles a medida para iOS y Android que se adaptan a las necesidades de tu negocio.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary",textAlign: "justify" }}>
              Desde comercio electrónico hasta aplicaciones de productividad, impulsamos tu éxito.
          </Typography>
          <Button variant="contained" color="button2" sx={{ mt: 4 }}>
              Más Información
          </Button>
          </Typography>
          <img src="./img/app5.png" alt="Producto 2" style={{ maxWidth: "30%", borderRadius: 10 }} />
          <img src="./img/app6.png" alt="Producto 2" style={{ maxWidth: "15%", borderRadius: 10 }} />
        </Box>
      </Grid>
      </Grid>
    </>
  );
}

function Tecnologías(){
  return (
    <>
    <Box sx={{ pt: 10, textAlign: "center"}}>
        <div className="title-nav">
          <h3>Tecnologías</h3>
          <p>
            Herramientas y tecnologías que utilizamos para desarrollar soluciones innovadoras.
          </p>
        </div>
      </Box>
      <Grid container  sx={{  p: 5, justifyContent: "center", alignItems: "center", textAlign: "center" }}>
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
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Box key={item} sx={{ px: 2 }}>
                        <Box
                          component="img"
                          src={`./img/logos/${item}.png`}
                          alt={`Empresa ${item}`}
                          sx={{
                            height: 120,
                            width: 'auto',
                            maxWidth: 150,
                            transition: 'all 0.3s',
                            '&:hover': {
                              
                              
                              transform: 'scale(1.1)'
                            }
                          }}
                        />
                      </Box>
                    ))}
                  </Carousel>
      </Grid>
    </>
    
  );
}




export default Products;