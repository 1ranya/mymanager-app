import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UserDescription from './UserDescription';
import UserInformations from './UserInformations';
import { AiOutlineEdit } from "react-icons/ai"

export default function UserProfil() {

    let params = useParams();
    const [userDetails, setUserDetails] = useState([])
    useEffect(() => {
        async function getUsers () {
            const res = await (await fetch(`http://localhost:8000/api/user/${params.id}`)).json();
            console.log('res', res)
            setUserDetails(res)
        }
        getUsers(); 
    }, []);
    
    console.log("props ", params.id)
    return (
        <div id="user-profil-container">
            <div style={{textAlign: '-webkit-right'}}>
                <Link to='/new-profil' className='navbar-item'><AiOutlineEdit size={30} /></Link>
            </div>
            <UserDescription
                firstName={userDetails.first_name}
                lastName={userDetails.last_name}
                position={userDetails.position}
            />
            <UserInformations userDetails={userDetails}/>
        </div>
    )
}
