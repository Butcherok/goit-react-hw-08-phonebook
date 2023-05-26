import { NavLink } from 'react-router-dom';
import { NavItem, NavList } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavList>
        <NavItem>
          <NavLink to={'/'}>Home</NavLink>
        </NavItem>
        <NavItem>
          {isLoggedIn && <NavLink to={'/contacts'}>Contacts</NavLink>}
        </NavItem>
      </NavList>
    </nav>
  );
};
