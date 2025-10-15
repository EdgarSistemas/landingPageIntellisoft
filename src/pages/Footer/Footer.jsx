import { Box, Typography } from "@mui/material"

 function Footer(){
    return ( 
    
    <Box sx={{   p:2,  textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h6" align="center" gutterBottom sx={{ mt: 4 }}>
        Mapa del sitio | Términos y condiciones | Política de privacidad | Contacto
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
        123 Calle Principal, Ciudad, País | Tel: (123) 456-7890 | Email: IntelliSoft@li.com
        </Typography>
      <p>&copy; {new Date().getFullYear()} IntelliSoft. All rights reserved.</p>
    </Box>
    )
 }
       
export default Footer;