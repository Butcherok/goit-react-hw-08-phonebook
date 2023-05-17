import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to={'/Register'}>Sign up</NavLink>
        </li>
        <li>
          <NavLink to={'/Login'}>Sign in</NavLink>
        </li>
      </ul>
    </>
  );
};
