/* eslint-disable no-unused-vars */

import { React } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';


// Importando componentes: 
import Home from './pages/home/Home';

//? USARÉ APP PARA ENRUTADOR
function App() {

 

  return (
    <>
    <BrowserRouter>
      <Routes>

        {/*---------------- Rutas publicas start ---------------------*/ }
          <Route path='/' element={<Home/>}></Route>
        {/*---------------- Rutas publicas end ---------------------*/ }

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
