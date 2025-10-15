import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import NavBar from './pages/NavBar/NavBar'
import Home from './pages/Home/Home'
import Contacto from './pages/Contact/Contact'
import Empresa from './pages/Empresa/Empresa'
import Products from './pages/Products/Products'
import Footer from './pages/Footer/Footer'
import './App.css'



const theme = createTheme({
  palette: {
    primary: {
      main: '#115faeff',
    },
    secondary: {
      main: '#dc004e',
    },
    navegacion: {
      main: '#49494aff',
    },
    button1: {
      main: '#3e6b8a',
      contrastText: '#fff',
    },
    button2: {
      main: '#2a3f50',
      contrastText: '#fff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover':{
            backgroundColor: '#2a3f50',
            color: '#ffffff'
          }
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#2a3f50',
            boxShadow: 'none',
          },
        },
        outlined: {
          borderColor: '#3e6b8a',
          '&:hover': {
            borderColor: '#3e6b8a',
            backgroundColor: '#cfdee8',
            color: '#2a3f50'
          },
        },
      },
    },
}});


function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
    
    </>
  )
}

export default App

