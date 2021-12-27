import React, {useState} from 'react'

export default function UserInformations() {
    const [isExterne, setIsExterne] = useState(true)
    return (
        <div id="user-Informations-container">
            <div>
                <p><span>CIN:</span> 12345678912345</p>
                <p><span>Sécurité sociale:</span> 12345678912345</p>
                <p><span>Email:</span> 12345678912345</p>
                <p><span>Adresse:</span> 12345678912345</p>
                <p><span>Date début:</span> 12345678912345</p>
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
