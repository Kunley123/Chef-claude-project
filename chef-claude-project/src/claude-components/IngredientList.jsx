export default function IngredientLists(props) {
    const ingredientsElement = props.ingredients.map(ingredient => {
        return (
            <li key={ingredient}> {ingredient}</li>
        )
    }

    )
    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul>
                {ingredientsElement}
            </ul>
            {props.ingredients.length > 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe</h3>
                    <p>Generate a recipe from your list of ingredient.</p>
                </div>
                <button onClick={props.getRecipe}>Get a recipe</button>
            </div>}
        </section>
    )
}