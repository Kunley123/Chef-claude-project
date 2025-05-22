import { useState } from 'react'

export default function Main() {



    const [ingredients, SetMyIngredients] = useState(["Chicken", "Oregano", "Tomato"])
    const ingredientsElement = ingredients.map(ingredient => {
        return (
            <li key={ingredient}> {ingredient}</li>
        )
    }

    )



    function Submit(event) {
        SetMyIngredients(prevIngredients => [...prevIngredients, newIngredient])
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
    }




    return (
        <main>
            <form onSubmit={Submit} className="add-ingredient-form">
                <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient" />
                <button>
                    Add ingredient
                </button>
            </form>

            <ul>

                {ingredientsElement}

            </ul>



        </main>
    )
}