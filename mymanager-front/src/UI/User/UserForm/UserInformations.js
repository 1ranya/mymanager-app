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
                    <span>Status: </span> 
                    <select>
                        <option>Admin</option>
                        <option>Employé</option>
                    </select>
                </p>
                <p>
                    <span>Contrat: </span> 
                    <select>
                        <option>CDD</option>
                        <option>CDI</option>
                        <option>Stage</option>
                        <option>Alternance</option>
                    </select>
                </p>
                <p>
                    <span>Externe: </span>
                    <input
                        name="isExterne"
                        type="checkbox"
                        checked={isExterne}
                        // onChange={this.handleInputChange} 
                    /></p>
                <p><span>Téléphone:</span> 12345678912345</p>
                <p><span>Salaire:</span> 12345678912345</p>
            </div>
        </div>
    )
}
