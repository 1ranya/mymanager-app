import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserDescription from './UserDescription';
import UserInformations from './UserInformations';

export default function UserProfil({ match }) {

    let params = useParams();
    const [userDetails, setUserDetails] = useState([])
    useEffect(() => {
        async function getUsers () {
            const res = await (await fetch(`http://localhost:8000/api/user/${params.id}`)).json();
            setUserDetails(res[0].fields)
        }
        getUsers();
    }, []);
    
    console.log("props ", params.id)
    return (
        <div id="user-profil-container">
            <UserDescription
                firstName={userDetails.first_name}
                lastName={userDetails.last_name}
                position={userDetails.position}
            />
            <UserInformations userDetails={userDetails}/>
        </div>
    )
}
