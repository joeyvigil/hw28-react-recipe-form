import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [servings, setServings] = useState('')
  const [difficulty, setDifficulty] = useState('Easy')
  const [category, setCategory] = useState('Appetizer')
  const [type, setType] = useState('American')
  const [ingredients, setIngredients] = useState([])
  const [inName, setInName] = useState('')
  const [inQuantity, setInQuantity] = useState('')
  const [inUnits, setInUnits] = useState('cups')
  const [image, setImage] = useState(null)
  const [recipeList, setRecipeList] = useState([])
  const [alertMessage, setAlertMessage] = useState('')

  const formSubmit = (e) => {
    e.preventDefault();
    // authentication
    if (title.length <3 || title.length >50) {
      setAlertMessage('Title must be between 3 and 50 characters!');
      return;
    }

    const recipe = {
      title,
      description,
      servings,
      difficulty,
      category,
      type,
      ingredients,
      image
    }
    setRecipeList([...recipeList, recipe]);
    console.log(recipe);
    setTitle('');
    setDescription('');
    setServings('');
    setDifficulty('Easy');
    setCategory('Appetizer');
    setType('American');
    setIngredients([]);
    setImage(null);
    setAlertMessage('');

  }
  const addButton = (e) => {
    e.preventDefault();
    const newIngredient = {
      name: inName,
      quantity: inQuantity,
      units: inUnits
    }
    setIngredients([...ingredients, newIngredient]);
    setInName('');
    setInQuantity('');
    setInUnits('cups');
  }

  return (
    <>
      {/* nav start */}
      <nav className='navbar'>
        <div className='container'>
          <h1><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M1.4 1.7c.217.289.65.84 1.725 1.274 1.093.44 2.885.774 5.834.528 2.02-.168 3.431.51 4.326 1.556C14.161 6.082 14.5 7.41 14.5 8.5q0 .344-.027.734C13.387 8.252 11.877 7.76 10.39 7.5c-2.016-.288-4.188-.445-5.59-2.045-.142-.162-.402-.102-.379.112.108.985 1.104 1.82 1.844 2.308 2.37 1.566 5.772-.118 7.6 3.071.505.8 1.374 2.7 1.75 4.292.07.298-.066.611-.354.715a.7.7 0 0 1-.161.042 1 1 0 0 1-1.08-.794c-.13-.97-.396-1.913-.868-2.77C12.173 13.386 10.565 14 8 14c-1.854 0-3.32-.544-4.45-1.435-1.124-.887-1.889-2.095-2.39-3.383-1-2.562-1-5.536-.65-7.28L.73.806z"/>
</svg> React Recipe Book</h1>
        </div>
      </nav>
      {/* nav end */}

      <main>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <div className='my-container'>
              {/* form start */}
              <h2>Submission Form</h2>
              <alert>{alertMessage}</alert>
              <form onSubmit={(e)=> formSubmit(e)}>

                <div className='col'>
                  <label class="form-label">Recipe Title</label>
                  <input type="text" 
                  class="form-control" 
                  id="title" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder='Recipe Title...' required></input>
                </div>

                <div className='col'>
                  <label class="form-label">Description & Instructions</label>
                  <textarea class="form-control" 
                  id="description" 
                  rows="3" 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder='Description...' required></textarea>
                </div>

                <div className='row'>
                <div className='col'>
                  <label class="form-label">Servings</label>
                  <input type="number" 
                  class="form-control" 
                  id="servings" 
                  value={servings}
                  onChange={(e) => setServings(e.target.value)}
                  placeholder='Number of Servings...' required></input>
                </div>

                <div className='col'>
                  <label class="form-label">Difficulty</label>
                  <select class="form-select" 
                  id="difficulty" 
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  required>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>
                </div>

                <div className='row'>
                <div className='col'>
                  <label class="form-label">Category</label>
                  <select class="form-select" 
                  id="category" 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required>
                    <option>Appetizer</option>
                    <option>Main Course</option>
                    <option>Dessert</option>
                    <option>Side Dish</option>
                    <option>Beverage</option>
                  </select>
                </div>

                <div className='col'>
                  <label class="form-label">Cuisine Type</label>
                  <select class="form-select" 
                  id="type" 
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required>
                    <option>American</option>
                    <option>Italian</option>
                    <option>Mexican</option>
                    <option>Asian</option>
                    <option>Mediterranean</option>
                    <option>Other</option>
                  </select>
                </div>
                </div>

                <div className='col'>
                  <label class="form-label">Image URL</label>
                  <input type="text" 
                  class="form-control" 
                  id="image" 
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder='Image URL...'></input>
                </div>

                <div className='row'>
                <div className='col-3'>
                  <label class="form-label">Ingredient</label>
                  <input type="text" 
                  class="form-control" 
                  id="inName" 
                  value={inName}
                  onChange={(e) => setInName(e.target.value)}
                  placeholder='Name...' ></input>
                </div>

                <div className='col-3'>
                  <label class="form-label">Quantity</label>
                  <input type="number" 
                  class="form-control" 
                  id="inQuantity" 
                  value={inQuantity}
                  onChange={(e) => setInQuantity(e.target.value)}
                  placeholder='Quantity...' ></input>
                </div>

                <div className='col-3'>
                  <label class="form-label">Units</label>
                  <select class="form-select" 
                  id="inUnits" 
                  value={inUnits}
                  onChange={(e) => setInUnits(e.target.value)}
                  >
                    <option>cups</option>
                    <option>tablespoons</option>
                    <option>teaspoons</option>
                    <option>ounces</option>
                    <option>pounds</option>
                    <option>grams</option>
                    <option>pieces</option>
                    <option>N/A</option>
                  </select>
                </div>
                <div className='col-3'>
                  <label class="form-label">Add to List</label>
                  <button type='click' onClick={(e) => addButton(e)}>Add <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5M8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6"/>
</svg></button>
                </div>
                </div>

                <div className='col'>
                  <label class="form-label">Ingredient List</label>
                  <ol>
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.name} - {ingredient.quantity} {ingredient.units}</li> 
                  ))}
                  </ol>
                </div>



                <button type="submit">Submit Recipe</button>

              </form>
              {/* form end */}
              </div>

            </div>
            <div className='col-12 col-md-6'>
              <div className='my-container'>
              {/* recipe book start */}
              <h2>Recipe Book</h2>
              <p>Here you will find a collection of my favorite recipes.</p>
              {/* recipe book end */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
