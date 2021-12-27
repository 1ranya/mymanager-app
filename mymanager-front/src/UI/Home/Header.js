import React from 'react';
import ProfilPic from '../../Assets/ProfilPic.jpg';
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div id='header-container'>
            <div>
                <Link to="/users-list">Employés</Link>
            </div>
            <div>Créer un nouveau profile</div>
            <div>Fiches de paies</div>
            <div>Contactes</div>
            <img src={ProfilPic} alt='Profil Pic'/>
        </div>
    )
}
