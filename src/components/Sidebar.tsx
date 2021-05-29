import React from 'react';
import { FiArrowLeft, FiBarChart2, FiPlusSquare } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Logo from '../images/MAVIS-LOGO.svg';

import { Link } from 'react-router-dom';

import '../styles/components/sidebar.css';



export default function Sidebar() {

  const { goBack } = useHistory();

  return (

    <aside className="app-sidebar">

      <Link to="/InfectionsMap">
        <img src={Logo} alt="Logo" />
      </Link>


      <ul className="Buttons">
        <li>
          <Link to="/charts">
            <FiBarChart2 size={32} color="#FFF" />
          </Link>
        </li>

        <li>
          <Link to="/charts">
            <FiPlusSquare size={32} color="#FFF" />
          </Link>
        </li>

      </ul>

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>


  );
}