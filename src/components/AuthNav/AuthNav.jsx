import { AuthItem, AuthList } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthList>
      <li>
        <AuthItem to={'/Register'}>Sign up</AuthItem>
      </li>
      <li>
        <AuthItem to={'/Login'}>Sign in</AuthItem>
      </li>
    </AuthList>
  );
};
