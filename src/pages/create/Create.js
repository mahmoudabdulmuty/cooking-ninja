import { useRef, useState } from 'react';
import './Create.scss';

const Create = () => {
  const [recipeData, setRecipeData] = useState({
    title: '',
    method: '',
    cookingTime: '',
  });

  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const ingredientsRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recipeData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData((prevRecipeData) => ({
      ...prevRecipeData,
      [name]: value,
    }));
  };

  const handleAddIngredients = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setNewIngredient('');
    ingredientsRef.current.focus();
  };

  return (
    <form className='create' onSubmit={handleSubmit}>
      <label>
        <span>Recipe Title</span>
        <input
          name='title'
          value={recipeData.title}
          onChange={handleChange}
          type='text'
        />
      </label>

      <label>
        <span>Recipe Ingredients:</span>
        <div className='ingredients'>
          <input
            type='text'
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
            ref={ingredientsRef}
          />
          <button onClick={handleAddIngredients} className='btn'>
            add
          </button>
        </div>
        <p>
          Current ingredients:
          {ingredients.map((ing) => (
            <em key={ing}>{ing}, </em>
          ))}
        </p>
      </label>

      <label>
        <span>Recipe Method</span>
        <textarea
          name='method'
          value={recipeData.method}
          onChange={handleChange}
          type='text'
        />
      </label>

      <label>
        <span>Cooking Time</span>
        <input
          name='cookingTime'
          value={recipeData.cookingTime}
          onChange={handleChange}
          type='number'
        />
      </label>

      <button className='btn'>add Recipe</button>
    </form>
  );
};

export default Create;
