import { useState } from 'react'
import IngredientsList from './IngredientList.jsx'
import ClaudeRecipe from './ClaudeRecipe.jsx'
import { getRecipeFromMistral } from './ai.js'

export default function Main() {

    const [ingredients, SetMyIngredients] = useState(["rice", "chicken", "onion", "garlic", "tomato"]);

    const [recipe, setRecipe] = useState("");

    async function getRecipe() {
        // setRecipeShown(prevShown => !prevShown)
        // since we are getting the recipe from AI we dont need to toggle the button 

        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }



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

            {ingredients.length > 0 && <IngredientsList ingredients={ingredients}
                getRecipe={getRecipe} />}

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}