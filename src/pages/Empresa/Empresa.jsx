import { Box, Typography, Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import GroupIcon from '@mui/icons-material/Group';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function Empresa() {
    return (
        <>
        <ProductosImage />
        <MisionVisionValores />
        <NuestrosValores />
        <Proyectos />
        </>
    );
}
 
function ProductosImage() {
  return (
    <Grid container spacing={2} mt={10}>
      {/* Imagen a la izquierda */}
      <Grid item xs={12} md={6}>
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
          <img 
            src="./img/IntelliSoft.png" 
            alt="Tecnologías" 
            style={{ 
              maxWidth: "100%", 
              borderRadius: 10, 
              
              
            }} 
          /> 
        </Box>
      </Grid>

      {/* Texto a la derecha */}
      <Grid item xs={12} md={6}>
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
            sx={{ fontWeight: "bold", mb: 4, textAlign: "left" }}
          >
            IntelliSoft
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", textAlign: "left",  lineHeight: 1.6 }}
          >
            Porque no solamente escribir código, es crear soluciones que transforman ideas en realidades digitales.
            Nuestro equipo de expertos trabaja contigo para diseñar, desarrollar e implementar aplicaciones innovadoras que impulsan tu éxito.
            Descubre cómo podemos ayudarte a llevar tu empresa al siguiente nivel con tecnología de vanguardia y un enfoque centrado en ti.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

function NuestrosValores() {
  return (
   <Box sx={{ p: 4, textAlign: "center", mt: 16,
                backgroundColor: "#f5f5f5",
                width: "100%",
                
                }}>
      <Typography variant="h4" component="h4" gutterBottom sx={{ fontWeight: "bold", mb: 4 }}>
        Nuestra filosofía
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", textAlign: "center", maxWidth: 800, margin: "0 auto", lineHeight: 1.6 }}>
        En IntelliSoft, nuestros valores fundamentales guían cada aspecto de nuestro trabajo y definen quiénes somos como empresa.
        La innovación es el corazón de lo que hacemos, impulsándonos a buscar constantemente nuevas formas de resolver desafíos y crear soluciones tecnológicas avanzadas.
        La calidad es nuestra promesa, asegurando que cada línea de código y cada proyecto entregado cumpla con los más altos estándares.
        La colaboración es clave en nuestro enfoque, trabajando estrechamente con nuestros clientes para entender sus necesidades y objetivos.
        La integridad es la base de nuestras relaciones, actuando con transparencia y honestidad en todas nuestras interacciones.
        Finalmente, la pasión por la tecnología y el compromiso con el éxito de nuestros clientes nos motiva a superar expectativas y lograr resultados excepcionales.
      </Typography>
    </Box>
  );
}

function MisionVisionValores() {
  return (
     <Grid container sx={{ p: 5, justifyContent: "center", alignItems: "center", textAlign: "center", gap: 15, mb:5 }}>
      <Card sx={{ maxWidth: 300, border: 'none', boxShadow: 'none' }}>
        
        <Typography gutterBottom variant="h5" component="div">
          MISIÓN
        </Typography>
        <AutoGraphIcon sx={{ fontSize: 90, color:'#2c99cb'}}/>
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' , textAlign: "center"}}>
            Aplicaciones móviles personalizadas para Android que impulsan tu negocio.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300, border:'none', boxShadow:'none' }}>
        <Typography gutterBottom variant="h5" component="div" >
          VISIÓN
        </Typography>
        <BarChartIcon sx={{ fontSize: 90, color: '#2c99cb'}} />
        <CardContent>
          <Typography variant="body2" sx={{ textAlign: "center"}}>
            Aplicaciones móviles personalizadas para Android que impulsan tu negocio.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300, border: 'none', boxShadow: 'none' }}>
        <Typography gutterBottom variant="h5" component="div">
          VALORES
        </Typography>
        <FavoriteBorderIcon sx={{ fontSize: 90, color:'#ffafcc'}} />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' , textAlign: "center"}}>
            Aplicaciones móviles personalizadas para Android que impulsan tu negocio.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

function Proyectos (){
  return (
    <>
    <Typography sx={{mt: 10, fontSize: 40, }}>
      Principios de IntelliSoft
    </Typography>
     <Grid container sx={{ p: 5, justifyContent: "center", alignItems: "center",  gap: 5, mb:5 }}>
      <Card sx={{ maxWidth: 200, padding: 1, boxShadow: 10, textAlign: 'left'}}>
        
            <FavoriteBorderIcon sx={{backgroundColor: '#f2f9fd', color: '#52b2de', fontSize: 50, borderRadius:2 ,padding: 1, ml:1.5}}/>
        <CardContent>
          <Typography sx={{ mb:1}}>
            Pasión
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary'}}>
            Aplicaciones móviles personalizadas para Android que impulsan tu negocio.
          </Typography>
        </CardContent>
    
      </Card>
      <Card sx={{ maxWidth: 200, padding: 1, boxShadow: 10, textAlign: 'left'}}>
       
            <WorkspacePremiumIcon sx={{backgroundColor: '#f2f9fd', color: '#52b2de', fontSize: 50, borderRadius:2 ,padding: 1, ml:1.5}}/>
        <CardContent>
          <Typography sx={{ mb:1}}>
            Excelencia
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary'}}>
            Aplicaciones móviles personalizadas para Android que impulsan tu negocio.
          </Typography>
        </CardContent>
       
      </Card>
      <Card sx={{ maxWidth: 200, padding: 1, boxShadow: 10, textAlign: 'left'}}>
       
            <GroupIcon sx={{backgroundColor: '#f2f9fd', color: '#52b2de', fontSize: 50, borderRadius:2 ,padding: 1, ml:1.5}}/>
        <CardContent>
          <Typography sx={{ mb:1}}>
            Colaboración
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary'}}>
            Aplicaciones móviles personalizadas para Android que impulsan tu negocio.
          </Typography>
        </CardContent>
     
      </Card>
      <Card sx={{ maxWidth: 200, padding: 1, boxShadow: 10, textAlign: 'left'}}>
      
            <RemoveRedEyeIcon sx={{backgroundColor: '#f2f9fd', color: '#52b2de', fontSize: 50, borderRadius:2 ,padding: 1, ml:1.5}}/>
        <CardContent>
          <Typography sx={{ mb:1}}>
           Innovación
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary'}}>
            Aplicaciones móviles personalizadas para Android que impulsan tu negocio.
          </Typography>
        </CardContent>
     
      </Card>
 
    </Grid>
    </>
   
    
  );
}




export default Empresa;