import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav className='nav-list'>
        <NavLink to='/' className='brand'>
          <h1>Cooking Ninja</h1>
        </NavLink>
        <NavLink to='/create'>Create Recipe</NavLink>
      </nav>
    </div>
  );
};
export default Navbar;
