import { Paragraph, Title } from 'components/App.styled';
import { AuthItem } from 'components/AuthNav/AuthNav.styled';
import { useAuth } from 'hooks/useAuth';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Title>Hello! i am your PhoneBook</Title>
      {!isLoggedIn && (
        <Paragraph>
          To use the application, you need to{' '}
          <AuthItem to={'/register'}>Sign up</AuthItem> or{' '}
          <AuthItem to={'/login'}>Sign in</AuthItem>
        </Paragraph>
      )}
    </>
  );
};

export default Home;
