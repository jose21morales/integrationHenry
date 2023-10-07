import SearchBar from '../SearchBar.jsx';
import styled from './Nav.module.css';
import { Link, NavLink } from 'react-router-dom';

export default function Nav(props) {
   const { onSearch } = props;

   return (
      <div className={styled.container}>
      <NavLink className={({isActive}) => (isActive ? 'active': 'disable')}>
         <Link to='/about'>
            <button>About</button>
         </Link>
      </NavLink>
      <NavLink className={({isActive}) => (isActive ? 'active': 'disable')}>
         <Link to='/home'>
            <button>Home</button>
         </Link>         
      </NavLink>
         <SearchBar onSearch={onSearch} />
      </div>
   );
};