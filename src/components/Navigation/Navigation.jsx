import { NavLink } from 'react-router-dom';
import { NavItem, NavList } from './Navigation.styled';

export const Navigation = () => {

  return (
    <nav>
      <NavList >
        <NavItem>
          <NavLink to={'/'}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={'/contacts'}>Contacts</NavLink>
        </NavItem>
      </NavList>
    </nav>
  );
};
