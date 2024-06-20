/* eslint-disable no-unused-vars */

import { React } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';


// Importando componentes: 
import Home from './pages/home/Home';
import Nosotros from './pages/nosotros/Nosotros';
import Servicios from './pages/servicios/Servicios';
import Contactos from './pages/contactos/Contactos';



//? USARÉ APP PARA ENRUTADOR
function App() {

 

  return (
    <>
    <BrowserRouter>
      <Routes>

        {/*---------------- Rutas publicas start ---------------------*/ }
          <Route path='/' element={<Home/>}></Route>
          <Route path='/nosotros' element={<Nosotros/>}></Route>
          <Route path='/servicios' element={<Servicios/>}></Route>
          <Route path='/contactos' element={<Contactos/>}></Route>
        {/*---------------- Rutas publicas end ---------------------*/ }

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
