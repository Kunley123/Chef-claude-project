import React from 'react';
import { useState } from 'react';
import ReactDom from 'react-dom/client';

export default function Form() {
    // function handleSubmit(event) {
    //     event.preventDefault()
    //     const formEl = event.currentTaget
    //     const formData = new FormData(formEl)
    //     const email = formData.get("email")
    //     console.log(email)
    //     formEl.reset()
    // }

    function signUp(formData) {
        // const email = formData.get("email")
        // const password = formData.get("password")
        // const employmentStatus = formData.get("employmentStatus")
        // const dietryRestriction = formData.getAll("dietryRestriction")
        // const favColor = formData.get("favColor")
        // console.log(email)
        // console.log(password)
        // console.log(employmentStatus)
        // console.log(dietryRestriction)
        // console.log(favColor)

        const data = Object.fromEntries(formData)
        const dietaryData = formData.getAll("dietryRestriction")
        const allData = {
            ...data,
            dietaryData
        }

        console.log(allData)
    }
    return (
        <>
            <section>
                <h1>Signup form</h1>

                <form action={signUp}>
                    <label htmlFor="email">Email:</label>
                    <input id="email" defaultValue="Adebanjokunle56@gmail.com" type="email" name="email" placeholder="abc@gmail.com" />
                    <br />  <br />

                    <label htmlFor="password">Password:</label>
                    <input id="password" defaultValue="Adebanjo123" type="password" name="password" />
                    <br /><br />
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" defaultValue="This is a description"></textarea>
                    <br /><br />

                    <fieldset>
                        <legend>Employment Status:</legend>
                        <label>
                            <input type="radio" name="employmentStatus" value="unemployed"></input>
                            Unemployed
                        </label>
                        <label>
                            <input type="radio" name="employmentStatus" value="part-time"></input>
                            Part-time
                        </label>
                        <label>
                            <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time"></input>
                            Full-time
                        </label>
                    </fieldset>
                    <br /><br />
                    <fieldset>
                        <legend>Dietry Restrictions:</legend>
                        <label>
                            <input type="checkbox" name="dietryRestriction" value="kosher"></input>
                            Kosher
                        </label>
                        <label>
                            <input type="checkbox" name="dietryRestriction" value="vegan"></input>
                            Vegan
                        </label>
                        <label>
                            <input type="checkbox" name="dietryRestriction" defaultChecked={true} value="gluten-free"></input>
                            Gluten-free
                        </label>
                    </fieldset>
                    <br /><br />

                    <label htmlFor="favColor">What is your favorite color?</label>
                    <select id="favColor" name="favColor" defaultValue="">
                        <option value="">-- Choose a color --</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="indigo">Indigo</option>
                    </select>
                    <br /><br />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    )
}