import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import './Recipe.scss';

const Recipe = () => {
  const { id } = useParams();

  const {
    data: recipe,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/recipes/${id}`);

  return (
    <div className='recipe'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      {recipe && <h2 key={recipe.id}>{recipe.title}</h2>}
    </div>
  );
};

export default Recipe;
