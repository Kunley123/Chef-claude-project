import { useState } from 'react'
import avatar from '../assets/avatar.png'
import Stars from './Stars'

export default function Practise() {
    const [Contacts, setContacts] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })



    function toggleFavorite() {
        setContacts(prevContact => {
            return ({
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            })
        })
    }

    return (
        <>

            <article className="article-avatar">
                <img src={avatar} />
            </article>

            <div>
                <Stars isFilled={Contacts.isFavorite} handleClick={toggleFavorite} />

                <h2>{Contacts.firstName} {Contacts.lastName}</h2>
                <p>{Contacts.phone}</p>
                <p>{Contacts.email}</p>

            </div>
        </>
    )
}