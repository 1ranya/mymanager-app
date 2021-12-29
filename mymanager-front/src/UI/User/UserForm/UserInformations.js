import React, {useState} from 'react'

export default function UserInformations({ handleInformations, userDetails }) {

    const [cin, setCin] = useState(userDetails ? userDetails.cin : "");
    const [securiteSociale, setSecuriteSociale] = useState(userDetails ? userDetails.securite_sociale : "");
    const [email, setEmail] = useState(userDetails ? userDetails.email : "");
    const [adresse, setAdresse] = useState(userDetails ? userDetails.adresse : "");
    const [startDate, setStartDate] = useState(userDetails ? userDetails.start_date : "");
    const [isAdmin, setIsAdmin] = useState(true);
    const [isIntern, setIsIntern] = useState(true);
    const [contract, setContract] = useState("CDI");
    const [phone, setPhone] = useState(userDetails ? userDetails.phone : "");
    const [salary, setSalary] = useState(userDetails ? userDetails.salary : "");

    const handleChange = (e) => {
        console.log("fist ", isIntern)

        const name = e.target.name   
        const value = e.target.value  

        if (name === 'cin') setCin(value)
        else if (name === 'securiteSociale') setSecuriteSociale(value)
        else if (name === 'email') setEmail(value)
        else if (name === 'adresse') setAdresse(value)
        else if (name === 'startDate') setStartDate(value)
        else if (name === 'isAdmin') setIsAdmin(value)
        else if (name === 'isIntern') setIsIntern(value)
        else if (name === 'contract') setContract(value)
        else if (name === 'phone') setPhone(value)
        else setSalary(value)

        const informations = {
            'cin': cin, 
            'securite_sociale': securiteSociale, 
            'email': email,
            'adresse': adresse,
            'start_date': startDate,
            'is_admin': isAdmin,
            'is_intern': isIntern,
            'contract': contract,
            'phone': phone, 
            'salary': salary, 
        }
        handleInformations(informations)
    }

    return (
        <div id="user-Informations-container">
            <div id="form-name">
                <div>
                    <p className='label'><span>CIN:</span></p>
                    <p className='label'><span>Sécurité sociale:</span></p>
                    <p className='label'><span>Email:</span></p>
                    <p className='label'><span>Adresse:</span></p>
                    <p className='label'><span>Date début:</span></p>
                </div>
                <div>
                    <p> 
                        <input 
                            className='input'
                            name='cin'
                            type='text' 
                            placeholder="..."
                            value={cin}
                            onChange={handleChange}
                        />
                    </p>
                    <p> 
                        <input 
                            className='input' 
                            name='securiteSociale'
                            type='text' 
                            placeholder="..."
                            value={securiteSociale}
                            onChange={handleChange}
                        />
                    </p>
                    <p> 
                        <input 
                            className='input'
                            name='email' 
                            type='text' 
                            placeholder="..."
                            value={email}
                            onChange={handleChange}
                        />
                    </p>
                    <p> 
                        <input 
                            className='input' 
                            name='adresse'
                            type='text' 
                            placeholder="..."
                            value={adresse}
                            onChange={handleChange}
                        />
                    </p>
                    <p> 
                        <input 
                            className='input' 
                            name='startDate'
                            type='text' 
                            placeholder="..."
                            value={startDate}
                            onChange={handleChange}
                        />
                    </p>
                </div>
            </div>
            <div id="form-name">
                <div>
                    <p className='label'><span>Status:</span></p>
                    <p className='label'><span>Contrat:</span></p>
                    <p className='label'><span>Externe:</span></p>
                    <p className='label'><span>Téléphone:</span></p>
                    <p className='label'><span>Salaire:</span></p>
                </div>
                <div>
                    <p> 
                        <select>
                            <option>Admin</option>
                            <option>Employé</option>
                        </select>
                    </p>
                    <p> 
                        <select>
                            <option>CDD</option>
                            <option>CDI</option>
                            <option>Stage</option>
                            <option>Alternance</option>
                        </select>
                    </p>
                    <p> 
                        <input
                            name="isIntern"
                            type="checkbox"
                            // checked={isExterne}
                            value={isIntern}
                            onChange={handleChange}
                        />
                    </p>
                    <p> 
                        <input 
                            className='input' 
                            name='phone'
                            type='text' 
                            placeholder="..."
                            value={phone}
                            onChange={handleChange}
                        />
                    </p>
                    <p> 
                        <input 
                            className='input' 
                            name='salary'
                            type='text' 
                            placeholder="..."
                            value={salary}
                            onChange={handleChange}
                        />
                    </p>
                </div>
            </div>
        </div>
    )
}
