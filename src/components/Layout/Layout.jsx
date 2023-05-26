import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from '../Header/Header';
import { Container } from 'components/App.styled';
import { Main, Wrapper } from './Layout.styled';


const Layout = () => {
	return (
    <Box>
      <Header />
      <Main>
        <Container>
          <Wrapper>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Wrapper>
        </Container>
      </Main>
    </Box>
  );
};

export default Layout;
