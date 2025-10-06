import '../App.css'

const Book = () => {
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    const handleDelete = (index) => {
        recipes.splice(index, 1);
        localStorage.setItem('recipes', JSON.stringify(recipes));
        window.location.reload();
    }
  return (
    <>
    <div className="accordion">
        {recipes.map((recipe, index) => (
            <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+index} aria-expanded="true" aria-controls={"collapse"+index}>
                    {recipe.title}
                </button>
                </h2>
                <div id={"collapse"+index} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>{recipe.description}</p>
                    <p><strong>Servings</strong>: {recipe.servings}</p>
                    <p><strong>Difficulty</strong>: {recipe.difficulty}</p>
                    <p><strong>Category</strong>: {recipe.category}</p>
                    <p><strong>Type</strong>: {recipe.type}</p>
                    <p><strong>Ingredients</strong>:</p>
                    <ul>
                      {recipe.ingredients.map((ingredient, idx) => (
                        <li key={idx}>{ingredient.name} - {ingredient.quantity} {ingredient.units}</li>
                        ))}
                    </ul>
                    <img src={recipe.image} alt="Food Image" />
                    <button className='btn btn-danger' onClick={() => {handleDelete(index)}}>Delete Recipe</button>
                </div>
                </div>
            </div>
        ))}
    </div>

    </>
  )
}

export default Book