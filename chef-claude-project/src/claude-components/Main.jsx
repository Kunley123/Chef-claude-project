import { useState } from 'react'

export default function Main() {



    const [ingredients, SetMyIngredients] = useState([])

    const [recipeShown, setRecipeShown] = useState(false);

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

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

            {ingredients.length > 0 && <section>
                <h2>Ingredient on hand:</h2>
                <ul>
                    {ingredientsElement}
                </ul>
                {ingredients.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe</h3>
                        <p>Generate a recipe from your list of ingredient.</p>
                    </div>
                    <button onClick={toggleRecipeShown}>Get a recipe</button>
                </div>}
            </section>}


        </main>
    )
}