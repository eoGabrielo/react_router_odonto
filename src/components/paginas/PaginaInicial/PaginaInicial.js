import React from 'react'
import "./PaginaInicial.css"

import { Link } from "react-router-dom"

const PaginaInicial = () => {
    return (
        <div className='paginaInicial'>
            {/*BANNER AZUL*/}
            <section className='banner'>
                <div className='TituloEsubTitulo'>
                    <h1><span>OS MELHORES</span> APARELHOS DENTÁRIOS!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, molestias?</p>
                </div>

                <div className='denteTextoPai'>
                    <div className='denteTexto'>
                        <img src="./dente.png" alt="dente" />
                        <p>Pré-avaliação</p>
                    </div>

                    <div className='denteTexto'>
                        <img src="./dente.png" alt="dente" />
                        <p>Aparelhos Dentários</p>
                    </div>

                    <div className='denteTexto'>
                        <img src="./dente.png" alt="dente" />
                        <p>Raio-x Digital</p>
                    </div>

                    <div className='denteTexto'>
                        <img src="./dente.png" alt="dente" />
                        <p>Clareamento Dental</p>
                    </div>
                </div>
            </section>
            {/*POR QUE USAR APARELHO*/}
            <section className='pqDentes'>
                <div className='tituloFoto'>
                    <h1>POR QUE USAR <span>APARELHO?</span></h1>
                    <img src="./aparelho.png" alt="aparelho" />
                </div>

                <div className='dicasAparelho'>
                    <div>
                        <h4>Dentes alinhados</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias officiis error tenetur labore quisquam animi totam provident doloribus! Blanditiis quas vel nesciunt eius. Sapiente quasi vitae dicta facilis, nesciunt fugit.</p>
                    </div>

                    <div>
                        <h4>Melhora a dicção e a higiene dentária</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum illo a dignissimos quod pariatur offidus ducimus consequuntur adipisci minus, laudantium dicta culpa.</p>
                    </div>

                    <div>
                        <h4>Corrige espaço entre os dentes</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, quam molestiae doloribus quaerat inventore beatae odit incidunt reiciendis in minima debitis quibusdam.</p>
                    </div>
                </div>
            </section>
            {/*VEJA OQUE NOSSOS CLIENTES...*/}
            <section className='vejaOque'>
                <h1 className='tituloVejaOque'>VEJA OQUE NOSSOS <span>CLIENTES</span> ESTÃO FALANDO...</h1>
                <div className='clientes'>
                    <div>
                        <img src="./cliente01.png" alt="cliente1" />
                        <h1>Alberto</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, commodi!</p>
                    </div>

                    <div>
                        <img src="./cliente02.png" alt="cliente2" />
                        <h1>Eliana</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vero, ut quibusdam rerum nisi recusandae.</p>
                    </div>

                    <div>
                        <img src="./cliente03.png" alt="cliente3" />
                        <h1>Carla</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, commodi!</p>
                    </div>
                </div>

                <a href="/contato">ENTRAR EM CONTATO</a>

            </section>
        </div>
    )
}

export default PaginaInicial