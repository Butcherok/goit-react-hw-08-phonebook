import * as React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { Container } from 'components/App.styled';
import { Header } from './Header.styled';

export default function AppNavBar() {
  const { isLoggedIn } = useAuth();
  const isPageWide = useMediaQuery('(min-width: 768px)');

  return (
    <Container>
      <Header>
        {!isPageWide && isLoggedIn && <MobileMenu />}
        {(isPageWide && <Navigation />) || (!isLoggedIn && <Navigation />)}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    </Container>
  );
}
