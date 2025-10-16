import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const NavBar = () => {
  const location = useLocation();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Productos', path: '/products' },
    { label: 'Nosotros', path: '/empresa' },
    { label: 'Contacto', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box
      sx={{ 
        width: 250, 
        padding: 2,
        backgroundColor: 'background.paper',
        height: '100%'
      }}
      onClick={handleDrawerToggle}
    >
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.label} 
            component={Link}
            to={item.path}
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              backgroundColor: location.pathname === item.path ? 'action.selected' : 'transparent',
              borderRadius: 1,
              mb: 1,
              '&:hover': {
                backgroundColor: 'action.hover',
              }
            }}
          >
            <ListItemText 
              primary={item.label}
              sx={{
                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                color: location.pathname === item.path ? 'primary.main' : 'text.primary',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: '#ffff', 
          color: 'text.primary', 
          boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
          zIndex: theme.zIndex.drawer + 1
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img 
                src='/img/logho.png' 
                alt='logo' 
                height={50} 
                width={150} 
                style={{ marginTop: 0 }} 
              /> 
            </Box>
          </Link>

          {/* Desktop Navigation */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            gap: 2,
            alignItems: 'center'
          }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                  color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'action.hover',
                  },
                  borderBottom: location.pathname === item.path ? '2px solid' : 'none',
                  borderColor: 'primary.main',
                  borderRadius: 1,
                  px: 2,
                  py: 1,
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { xs: 'block', md: 'none' },
              color: 'text.primary'
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250,
            backgroundColor: 'background.paper'
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed AppBar */}
      <Toolbar />
    </>
  );
}

export default NavBar;