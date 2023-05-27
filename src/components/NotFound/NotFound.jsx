import React from 'react';
import { Container, PromtText } from './NotFound.styled';
import { PromtLink } from 'components/SignUpForm/SignUpForm.styled';

const NoPage = () => {
  return (
    <Container>
      <PromtText>
        This page does not exist! Please, go to
        <PromtLink to={'/'}> Home page </PromtLink>
        and try again.
      </PromtText>
    </Container>
  );
};

export default NoPage;
