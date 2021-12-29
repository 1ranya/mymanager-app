import React from 'react';
import ProfilPic from '../../Assets/ProfilPic.jpg';
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div id='header-container'>
            <div>
                <Link to="/users-list" className='navbar-item'>Employés</Link>
            </div>
            <div>
                <Link to="/new-profil" className='navbar-item'>Créer un nouveau profile</Link>
            </div>
            <div>
                <Link to="/new-profil" className='navbar-item'>Fiches de paies</Link>
            </div>
            <div>
                <Link to="/new-profil" className='navbar-item'>Contactes</Link>
            </div>
            <Link to="/new-profil" className='navbar-item'>
                <img src={ProfilPic} alt='Profil Pic'/>
            </Link>
        </div>
    )
}
