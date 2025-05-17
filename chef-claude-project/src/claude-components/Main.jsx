export default function Main() {

    function handleClick() {
        console.log("I was clicked!")
    }
    return (
        <main>
            <form className="add-ingredient-form">
                <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient" />
                <button onClick={handleClick}>
                    Add ingredient
                </button>
            </form>
        </main>
    )
}