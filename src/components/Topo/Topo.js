import React from 'react'
import "./Topo.css"

const Topo = () => {
    return (
        <div className='topo'>

            <div className='logoTexto'>
                <img src="./dente.png" alt="" />
                <h1>Dentes Saudáveis</h1>
            </div>

            <div className='lista'>
                <li><a href="/">HOME</a></li>
                <li><a href="/contato">CONTATO</a></li>
            </div>
        </div>
    )
}

export default Topo