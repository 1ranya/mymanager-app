import React, { useEffect, useState} from 'react';
import UserDescription from './UserDescription';
import UserInformations from './UserInformations';

export default function UserProfil() {

    return (
        <div id="user-profil-container">
            <UserDescription/>
            <UserInformations/>
        </div>
    )
}
