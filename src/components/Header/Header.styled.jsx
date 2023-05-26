import styled from '@emotion/styled';
import { device } from 'components/App.styled';

export const Header = styled.header`
  padding: 20px;
  max-width: 850px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background-color: lightblue;

  border: 2px solid #90ee90;
  border-radius: 16px;

  backdrop-filter: blur(5px);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  
  @media ${device.tablet} {
    padding: 20px 40px;
  }
`;
