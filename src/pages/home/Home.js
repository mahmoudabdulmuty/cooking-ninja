import { useFetch } from '../../hooks/useFetch';
import './Home.scss';

const Home = () => {
  const {
    data: recipes,
    isPending,
    error,
  } = useFetch('http://localhost:3000/recipes');

  return (
    <div className='home'>
      {error && <div>error</div>}
      {isPending && <div>Loading ...</div>}
      {recipes &&
        recipes.map((recipe) => <h2 key={recipe.id}>{recipe.title}</h2>)}
    </div>
  );
};
export default Home;
