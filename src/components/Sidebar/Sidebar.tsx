import React from 'react';
import { FiArrowLeft, FiBarChart2, FiPlusSquare } from 'react-icons/fi';
import { useAuth } from '../../hooks/AuthContext'
import Logo from '../../images/MAVIS-LOGO.svg';
import { Link } from 'react-router-dom';
import '../../styles/components/sidebar.css';


export default function Sidebar() {
  const { signOut } = useAuth()

  return (
    <aside className="app-sidebar">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <ul className="Buttons">
        <li>
          <Link to="/dashboard">
            <FiBarChart2 size={32} color="#FFF" />
          </Link>
        </li>

        <li>
          <Link to="/new-infection">
            <FiPlusSquare size={32} color="#FFF" />
          </Link>
        </li>

      </ul>

      <footer>
        <button type="button" onClick={signOut}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  );
}