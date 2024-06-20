/* eslint-disable no-unused-vars */

import { React } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';


// Importando componentes: 
import Home from './pages/home/Home';
import Nosotros from './pages/nosotros/Nosotros';
import Servicios from './pages/servicios/Servicios';
import Contactos from './pages/contactos/Contactos';
import P404 from './pages/404/P404';
import TerminosUso from './pages/terminos_uso/TerminosUso';
import PoliticasPrivacidad from './pages/politicas_privacidad/PoliticasPrivacidad';
import PreguntasFrecuentes from './pages/preguntas_frecuentes/PreguntasFrecuentes';

//? USARÉ APP PARA ENRUTADOR
function App() {

 

  return (
    <>
    <BrowserRouter>
      <Routes>

        {/*---------------- Rutas publicas start ---------------------*/ }
        
          <Route path='/' element={<Home/>}></Route>
          <Route path='*' element={<P404/>}></Route>
          <Route path='/nosotros' element={<Nosotros/>}></Route>
          <Route path='/servicios' element={<Servicios/>}></Route>
          <Route path='/contactos' element={<Contactos/>}></Route>
          <Route path='/terminos_uso' element={<TerminosUso/>}></Route>
          <Route path='/politicas_privacidad' element={<PoliticasPrivacidad/>}></Route>
          <Route path='/preguntas_frecuentes' element={<PreguntasFrecuentes/>}></Route>

        {/*---------------- Rutas publicas end ---------------------*/ }

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
