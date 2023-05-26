import styled from '@emotion/styled';
import { device } from 'components/App.styled';

export const Main = styled.main`
  margin: 40px 0;
`;

export const Wrapper = styled.div`
  padding: 20px;

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background-color: lightgray;

  border: 2px solid lightblue;
  border-radius: 16px;

  backdrop-filter: blur(5px);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media ${device.tablet} {
    padding: 20px 40px;
  }
`;
