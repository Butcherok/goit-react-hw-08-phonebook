import { AuthItem, AuthList } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <AuthList>
      <ul>
        <li>
          <AuthItem to={'/Register'}>Sign up</AuthItem>
        </li>
        <li>
          <AuthItem to={'/Login'}>Sign in</AuthItem>
        </li>
      </ul>
    </AuthList>
  );
};
