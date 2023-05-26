import styled from '@emotion/styled';
import { device } from 'components/App.styled';

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  color: #282828;
`;

export const UserName = styled.span`
  font-weight: 500;
  color: #282828;
`;

export const BtnLogOut = styled.button`
  padding: 13px;

  font-size: 18px;
  font-weight: 500;
  color: #282828;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  border: 1px solid #282828;
  border-radius: 10px;

  transition: all 250ms ease-in-out;

  cursor: pointer;

  @media ${device.tablet} {
    padding: 8px 18px;
  }

  :hover {
    color: lightgreen;
    border: 1px solid #90ee90;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
