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
            console.log("res", res[0].pk)
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
                <Link to={`/profile/${user.pk}`} className='bold-text'>{user.fields.first_name} {user.fields.last_name}</Link> <br/>
                <span>{user.fields.position}</span><br/><br/>
                <div className='alignIcon'>
                    <IoIosMail size={15}/> 
                    {user.fields.email}
                </div>
                <div className='alignIcon'>
                    <BiPhone size={15}/> 
                    {user.fields.phone}
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
