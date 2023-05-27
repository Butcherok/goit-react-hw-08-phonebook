import { Paragraph } from 'components/App.styled';
import { AuthItem } from 'components/AuthNav/AuthNav.styled';
import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { Container, MainText, TitleMain } from './MainPage.styles';

const MainPage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <TitleMain>
        Greetings, dear wanderer!
        <MainText>
          This is your assistant storing contacts of your family, relatives,
          friends, and acquaintances. A pleasant, intuitive interface will help
          you quickly cope with the application.
        </MainText>
      </TitleMain>

      {!isLoggedIn && (
        <Paragraph>
          To use the application, you need to{' '}
          <AuthItem to={'/register'}>Sign up</AuthItem> or{' '}
          <AuthItem to={'/login'}>Sign in</AuthItem>
        </Paragraph>
      )}
    </Container>
  );
};

export default MainPage;
