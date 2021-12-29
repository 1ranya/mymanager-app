import React, {useState} from 'react'
import '../../../App.css';
import profilPic from '../../../Assets/ProfilPic.jpg'
export default function UserDescription({handleDescription, userDetails}) {
    console.log("userDetails", userDetails)
    const [firstName, setFirstName] = useState(userDetails ? userDetails.first_name : "");
    const [lastName, setlastName] = useState(userDetails ? userDetails.last_name : "");
    const [position, setPosition] = useState(userDetails ? userDetails.position : "");
    
    const handleChange = (e) => {
        console.log("fist ", firstName)
        console.log("last ", lastName)
        console.log("pos ", position)

        const name = e.target.name   
        const value = e.target.value   
        if (name === 'firstName')
            setFirstName(value)
        else if (name === 'lastName') 
            setlastName(value)
        else
            setPosition(value)

        const description = {
            'first_name': firstName, 
            'last_name': lastName, 
            'position': position
        }
        handleDescription(description)
    }

    return (
        <div id="user-description-form-container">
            <div id='user-image' className='round-size'>
                <img src={profilPic} alt="Profil pic"/>
            </div>  
            <div id="form-name">
                <div>
                    <p className='label'>Nom:</p>
                    <p className='label'>Prénom:</p>
                    <p className='label'>Position:</p>
                </div>
                <div>
                    <p><input 
                        className='input' 
                        name='firstName'
                        type='text' 
                        placeholder="..."
                        value={firstName}
                        onChange={handleChange}
                    /></p>
                    <p><input 
                        className='input' 
                        name='lastName'
                        type='text' 
                        placeholder="..."
                        value={lastName}
                        onChange={handleChange}
                    /></p>
                    <p><input 
                        className='input'
                        name='position'
                        type='text' 
                        placeholder="..."
                        value={position}
                        onChange={handleChange}
                    /></p>
                </div>
            </div>
        </div>
    )
}
