import React, {useState} from 'react'

export default function UserInformations({userDetails}) {
    const [isExterne, setIsExterne] = useState(true)
    // console.log(props)
    const { cin, securite_sociale, email, adresse, start_date, 
            is_admin, is_intern, phone, salary, contract } = userDetails;

    return (
        <div id="user-Informations-container">
            <div>
                <p><span>CIN:</span> {cin}</p>
                <p><span>Sécurité sociale:</span> {securite_sociale}</p>
                <p><span>Email:</span> {email}</p>
                <p><span>Adresse:</span> {adresse}</p>
                <p><span>Date début:</span> {start_date}</p>
            </div>
            <div>
                <p>
                    <span>Status:</span> {is_admin ? 'Admin' : 'Salarié'}
                </p>
                <p><span>Contrat:</span> {contract}</p>
                <p>
                    <span>Externe: </span> {is_intern ? 'non' : 'oui'}
                </p>
                <p><span>Téléphone:</span> {phone}</p>
                <p><span>Salaire:</span> {salary}€</p>
            </div>
        </div>
    )
}
