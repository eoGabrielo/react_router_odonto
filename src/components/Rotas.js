import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaContato from './paginas/PaginaContato/PaginaContato';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';

const Rotas = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PaginaInicial />}/>
                <Route path="/contato" element={<PaginaContato />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Rotas