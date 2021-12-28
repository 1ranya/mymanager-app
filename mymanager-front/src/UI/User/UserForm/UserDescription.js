import React from 'react'
import '../../../App.css';
import profilPic from '../../../Assets/ProfilPic.jpg'
export default function UserDescription({firstName, lastName, position}) {
    // console.log(props)
    return (
        <div id="user-description-container">
            <div id='user-image'>
                <img src={profilPic} alt="Profil pic"/>
            </div>
            <div id='user-name'>
                {firstName } {lastName}
            </div>
            <div id='user-description'>
                {position}
            </div>
        </div>
    )
}
