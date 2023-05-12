import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to={'/Register'}>Sign Up</NavLink>
        </li>
        <li>
          <NavLink to={'/Login'}>Log In</NavLink>
        </li>
      </ul>
    </>
  );
};
