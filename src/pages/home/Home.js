import RecipeList from '../../components/RecipeList/RecipeList';
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
      {error && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
};
export default Home;
