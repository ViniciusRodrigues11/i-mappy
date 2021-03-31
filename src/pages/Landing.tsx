import React from 'react';
import { FiArrowRight } from 'react-icons/fi'
import {Link} from 'react-router-dom'

import '../styles/pages/landing.css'
import Logo from '../images/Logo.svg'

function Landing() {

    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={Logo} alt="Happy" />

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </main>

                <div className="location">
                    <strong>Porto Velho</strong>
                    <span>Rondônia</span>
                </div>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0,0,0, 0.6)" ></FiArrowRight>
                </Link>

            </div>
        </div>
    )
}

export default Landing;