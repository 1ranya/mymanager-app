import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useHistory, Navigate } from 'react-router-dom';
import UserDescription from './UserDescription';
import UserInformations from './UserInformations';
import { BsFillPersonCheckFill } from "react-icons/bs";
// import { Redirect } from 'react-router'
export default function UserProfil({id}) {

    let params = useParams();
    const [userDescription, setUserDescription] = useState()
    const [userInformations, setUserInformations] = useState()
    const [userDetails, setUserDetails] = useState()
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        async function getUsers () {
            const res = await (await fetch(`http://localhost:8000/api/user/6`)).json();
            console.log('now ', res.first_name)
            setUserDetails(res)
        }
        getUsers();
    }, []);
   
    console.log("props ", params.id)

    const handleDescription = (description) => {
        setUserDescription(description)
    }

    const handleInformations = (informations) => {
        setUserInformations(informations)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            ...userDescription,
            ...userInformations
        }
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // };
        // const res = await fetch('http://localhost:8000/api/users/', requestOptions);
        setRedirect(true)
        // console.log('from child info ', userInformations)
    }
    if (redirect) {
        return <Navigate to='/users-list'/>;
    }
    return (
        <form id="user-profil-container" onSubmit={handleSubmit}>
            <div style={{textAlign: '-webkit-center'}}>
                <button style={{justifyContent:'center'}} 
                    className='alignIcon input' 
                    type="submit" 
                    value="Sauvegarder">Sauvegarder <BsFillPersonCheckFill color='#b3b3b3'/>
                </button>
            </div>
            <UserDescription 
                handleDescription={handleDescription}
                userDetails={userDetails}
            />
            <UserInformations 
                handleInformations={handleInformations}
                userDetails={userDetails}
            />
        </form>
    )
}
