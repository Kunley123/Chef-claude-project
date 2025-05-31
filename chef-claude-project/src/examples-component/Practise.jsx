import { useState } from 'react'
import avatar from '../assets/avatar.png'
import starEmpty from '../assets/star-empty.png'
import starFilled from '../assets/star-filled.png'

export default function Practise() {
    const [Contacts, setContacts] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    let starIcon = Contacts.isFavorite ? starFilled : starEmpty

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
                <button onClick={toggleFavorite} className="star-button">
                    <img src={starIcon} />
                </button>

                <h2>{Contacts.firstName} {Contacts.lastName}</h2>
                <p>{Contacts.phone}</p>
                <p>{Contacts.email}</p>

            </div>
        </>
    )
}