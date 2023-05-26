import React from 'react';
import { PromtText } from './NotFound.styled';
import { PromtLink } from 'components/SignUpForm/SignUpForm.styled';

const NoPage = () => {
  return (
    <>
      <section>
        <PromtText>
          This page does not exist! Please, go to
          <PromtLink to={'/'}> Home page </PromtLink>
          and try again.
        </PromtText>
      </section>
    </>
  );
};

export default NoPage;
