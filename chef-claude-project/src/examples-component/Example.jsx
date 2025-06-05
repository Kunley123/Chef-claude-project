import React, { useState } from 'react';
import avatar from '../assets/avatar.png'
import starEmpty from '../assets/star-empty.png'
import starFilled from '../assets/star-filled.png'
import ReactDom from 'react-dom/client'

export default function Example() {

    // const [isImportant, setIsImportant] = useState(0)

    // function handleClick() {
    //     setIsImportant(prev => prev + 1)

    // }

    // function alsoImportant() {
    //     setIsImportant(prev => prev - 1)
    // }

    const [count, setCount] = useState(0)
    function add(num) {
        setCount(num => num + 1)
    }

    // function add(){
    //     setCount(count + 1)
    // }

    function minus() {
        setCount(prev => prev - 1)
    }

    //  function minus(){
    //     setCount(count - 1)
    // }

    // const isGoingOut = true

    const [isGoingOut, setIsGoingOut] = useState(true)
    function changeMind() {
        setIsGoingOut(!isGoingOut)
    }

    // let answer = isGoingOut === true ? 'Yes' : 'No'

    // if (isGoingOut === true) {
    //     answer = "Yes"
    // } else {
    //     answer = "No"
    // }

    const [myFavouriteThings, setMyFavouriteThings] = useState([])
    const allFavouriteThings = ["💦🌹", "😹", "💡🥣", "🔥🧤", "🎃🎁", "🐶", "🍅🥞", "🚪🔔", "🦀🔔", "👚🍹"]
    const thingsElements = myFavouriteThings.map(thing => <p key={thing}>{thing}</p>)

    function addFavouriteThings() {
        setMyFavouriteThings(prevFavThings => [...prevFavThings,
        allFavouriteThings[prevFavThings.length]
        ])
    }

    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })



    let starIcon = contact.isFavorite ? starFilled : starEmpty
    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        }

        )
    }

    const [unreadMessages, setUnreadMessages] = useState(["a", "b"])

    return (
        <>
            <h1 className="title">Is state important to know</h1>
            <button className="value">{count}</button>
            <button onClick={minus}>-</button>
            <button onClick={add}>+</button>
            <h1>Do i feel like going out tonight</h1>
            <button onClick={changeMind} arial-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`}>
                {isGoingOut ? "Yes" : "No"}
            </button> <br></br>

            <button onClick={addFavouriteThings}>Add items</button>
            <section arial-live="polite">{thingsElements}</section>


            <article className="article-avatar">
                <img src={avatar}></img>
            </article>

            <div>
                <button onClick={toggleFavorite} className="star-button" aria-pressed={false} aria-label="Add to favorites">
                    <img src={starIcon} alt="empty star icon" className="favorite"></img>
                </button>
                <h2>
                    {contact.firstName} {contact.lastName}
                </h2>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
            </div>

            <div>
                {unreadMessages.length > 1 && <h1>You have {unreadMessages.length} unread messages!</h1>}
            </div>

            <div>
                {unreadMessages.length === 1 && <h1>You have {unreadMessages.length} unread message!</h1>}
            </div>

            <div>
                {unreadMessages.length === 0 && <h1>You are all caught up</h1>}
            </div>
        </>

    )
}

