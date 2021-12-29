import React, { useEffect, useState} from 'react'
import profilPic from '../Assets/ProfilPic.jpg'
import { BiPhone } from  "react-icons/bi";
import { IoIosMail } from  "react-icons/io";
import { Link } from 'react-router-dom';

export default function UsersList() {

    const [users, setUsersList] = useState([])
    useEffect(() => {
        async function getUsers () {
            const res = await (await fetch('http://localhost:8000/api/users')).json();
            console.log("res", res)
            setUsersList(res)
        }
        getUsers();
    }, []);

    const userBox = users.map((user, key) => (
        <div id='user-box' key={key}>
            <div id='user-box-img'>
                <img src={profilPic} alt="Profil pic"/>
            </div>
            <div className='thin-text'>
                <Link to={`/profile/${user.id}`} className='bold-text navbar-item'>{user.first_name} {user.last_name}</Link> <br/>
                <span>{user.position}</span><br/><br/>
                <div className='alignIcon'>
                    <IoIosMail size={15}/> 
                    {user.email}
                </div>
                <div className='alignIcon'>
                    <BiPhone size={15}/> 
                    {user.phone}
                </div>
            </div>
        </div>)
)
    return (
        <div id='user-list-container'>
            {userBox}
        </div>
    )
}
