import React from 'react'
import "./PaginaContato.css"
import Iframe from 'react-iframe'

const PaginaContato = () => {
    return (
        <div className='contato'>
            {/*DOUTORES*/}
            <section>
                <div className='tituloNumero'>
                    <h1>HÓRARIOS DE <span>ATENDIMENTO</span></h1>
                    <p>Agende sua consulta pelo telefone: (011) 99999-9999</p>
                </div>

                <div className='medicos'>
                    <div className='cardMedico'>
                        <img src="./medico01.png" alt="medico1" />
                        <h4>Dr. Marcos</h4>
                        <p>Segunda a Quarta das 08:00 as 17:00</p>
                    </div>

                    <div className='cardMedico'>
                        <img src="./medico02.png" alt="medico2" />
                        <h4>Dr. Gabriel</h4>
                        <p>Quinta a Sexta das 08:00 as 17:00</p>
                    </div>

                    <div className='cardMedico'>
                        <img src="./medico03.png" alt="medico3" />
                        <h4>Dra. Suzana</h4>
                        <p>Sabado a Domingo das 07:00 as 12:00</p>
                    </div>
                </div>
            </section>
            {/*AONDE ESTAMOS LOCALIZADOS*/}
            <section className='mapa'>
                <div className='tituloEndereço'>
                    <h1>AONDE ESTAMOS <span>LOCALIZADOS?</span></h1>
                    <a href="https://www.google.com/maps/place/Blizzard+Entertainment+Brasil/@-23.6085267,-46.6969975,15z/data=!4m5!3m4!1s0x0:0x9118b48180fe0460!8m2!3d-23.6085267!4d-46.6969975" target="_blank"> Av. das Nações Unidas - Pinheiros, SP, 04578-903.</a>
                </div>
                <div className='caixaDoIframe'>
                <Iframe className='mapaIframe' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14623.532217871567!2d-46.6969975!3d-23.6085267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9118b48180fe0460!2sBlizzard%20Entertainment%20Brasil!5e0!3m2!1sen!2sbr!4v1671212979457!5m2!1sen!2sbr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                </div>
            </section>
        </div>
    )
}

export default PaginaContato