import { Box, Typography, Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


function Contacto() {
    return (
       <>
       <Equipo />
        <Contactanos />
        <Proyecto />
       </>
    );
}

function Equipo(){
  return(
    <>
    <Box sx={{ pt: 10, textAlign: "center"}}>
        <div className="title-nav">
          <h3>Contáctanos</h3>
          <p>
Estamos aquí para ayudarte. Ponte en contacto 
con nosotros y hablemos sobre tu proyecto          </p>
        </div>
      </Box>
    <Grid container sx={{ p: 5, justifyContent: "center", alignItems: "center", textAlign: "center", gap: 15}}>
      <Card sx={{ maxWidth: 300, border: 'none', boxShadow: 'none' }}>
        
        <Typography gutterBottom variant="h5" component="div">
          Teléfono
        </Typography>
        <LocalPhoneIcon sx={{ fontSize: 50, color:'#2c99cb'}}/>
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' , textAlign: "center"}}>
            + 52 488-444-546: Celular<br />
            + 52 488-444-546: Télefono
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300, border:'none', boxShadow:'none' }}>
        <Typography gutterBottom variant="h5" component="div" >
          Ubicación
        </Typography>
        <LocationOnIcon sx={{ fontSize: 50, color: '#2c99cb'}} />
        <CardContent>
          <Typography variant="body2" sx={{ textAlign: "center"}}>
           Av. Del Olvido N° 403, Col, El olvido del olvido. León GTO; México
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300, border: 'none', boxShadow: 'none' }}>
        <Typography gutterBottom variant="h5" component="div">
          Horario
        </Typography>
        <AccessTimeIcon sx={{ fontSize: 50, color:'#2c99cb'}} />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' , textAlign: "center"}}>
            Lunes a Viernes 9:00 am a 6:00 pm <br />
            Sábado y Domingo Cerrado
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    </>
  );
}

function Contactanos (){
const equipoContacto = [
    {
      nombre: "Ana García",
      puesto: "Directora de Ventas",
      telefono: "+1 (555) 123-4567",
      email: "ana.garcia@empresa.com"
    },
    {
      nombre: "Carlos López",
      puesto: "Jefe de Proyectos",
      telefono: "+1 (555) 123-4568",
      email: "carlos.lopez@empresa.com"
    },
    {
      nombre: "María Rodríguez",
      puesto: "Soporte Técnico",
      telefono: "+1 (555) 123-4569",
      email: "maria.rodriguez@empresa.com"
    }
  ];

  return (
    <>
      {/* Equipo de Contacto */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{  textAlign: "center"}}>
        <div className="title-nav">
          <p>
Déjanos tus datos y un asesor te atenderá al instante</p>
        </div>
      </Box>
          <Grid container sx={{ p: 5, justifyContent: "center", alignItems: "center", textAlign: "center", gap: 15}}>
            {equipoContacto.map((persona, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ p: 3 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: "bold" }}>
                    {persona.nombre}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {persona.puesto}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    📞 {persona.telefono}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ✉️ {persona.email}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
    </>
  );
}



function Proyecto(){
  return(
    <>
    <Box sx={{  textAlign: "center"}}>
        <div className="title-nav">
          <h3>Historico</h3>
          <p>
Estamos aquí para ayudarte. Ponte en contacto 
con nosotros y hablemos sobre tu proyecto          </p>
        </div>
      </Box>
     <Grid container sx={{ p: 3, justifyContent: "center", alignItems: "center", textAlign: "center", gap: 12}}>
      <Card sx={{  border:'none', boxShadow:'none' }}>
        <Typography gutterBottom variant="h2" component="div" sx={{color:'#1d7aac'}} >
         50+
        </Typography>
        <CardContent>
          <Typography variant="body2" sx={{ textAlign: "center", fontSize: 20, color:'#2c99cb'}}>
           Proyectos Completados
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{  border:'none', boxShadow:'none' }}>
        <Typography gutterBottom variant="h2" component="div" sx={{color:'#1d7aac'}} >
         30+
        </Typography>
        <CardContent>
          <Typography variant="body2" sx={{ textAlign: "center", fontSize: 20, color:'#1d7aac'}}>
           Clientes satisfechos
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{  border:'none', boxShadow:'none' }}>
        <Typography gutterBottom variant="h2" component="div" sx={{color:'#1d7aac'}} >
         5+
        </Typography>
        <CardContent>
          <Typography variant="body2" sx={{ textAlign: "center", fontSize: 20, color:'#1d7aac'}}>
           Años de trayectoria
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{  border:'none', boxShadow:'none' }}>
        <Typography gutterBottom variant="h2" component="div" sx={{color:'#1d7aac'}}>
         15+
        </Typography>
        <CardContent>
          <Typography variant="body2" sx={{ textAlign: "center", fontSize: 20, color:'#1d7aac'}}>
           Profesionales en el área
          </Typography>
        </CardContent>
      </Card>
      
      
      
    </Grid>
    </>
   
  );
}


export default Contacto;