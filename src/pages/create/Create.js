import { useState } from 'react';
import './Create.scss';

const Create = () => {
  const [RecipeData, setRecipeData] = useState({
    title: '',
    method: '',
    cookingTime: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(RecipeData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData((prevRecipeData) => ({
      ...prevRecipeData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Recipe Title
        <input
          name='title'
          value={RecipeData.title}
          onChange={handleChange}
          type='text'
        />
      </label>

      <label>
        Recipe Method
        <input
          name='method'
          value={RecipeData.method}
          onChange={handleChange}
          type='text'
        />
      </label>

      <label>
        Cooking Time
        <input
          name='cookingTime'
          value={RecipeData.cookingTime}
          onChange={handleChange}
          type='number'
        />
      </label>

      <button className='btn'>add</button>
    </form>
  );
};

export default Create;
