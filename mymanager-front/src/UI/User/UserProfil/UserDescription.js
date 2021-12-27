import React from 'react'
import '../../../App.css';
import profilPic from '../../../Assets/ProfilPic.jpg'
export default function UserDescription() {
    return (
        <div id="user-description-container">
            <div id='user-image'>
                <img src={profilPic} alt="Profil pic"/>
            </div>
            <div id='user-name'>
                TOUNSI Rania
            </div>
            <div id='user-description'>
                FullStack developer
            </div>
        </div>
    )
}
