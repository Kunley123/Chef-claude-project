import { useState } from 'react'

export default function Main() {



    const [ingredients, SetMyIngredients] = useState([])
    const ingredientsElement = ingredients.map(ingredient => {
        return (
            <li key={ingredient}> {ingredient}</li>
        )
    }

    )



    function addIngredient(formData) {
        SetMyIngredients(prevIngredients => [...prevIngredients, newIngredient])
        const newIngredient = formData.get("ingredient")
    }




    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
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