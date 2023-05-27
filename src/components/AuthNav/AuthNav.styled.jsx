import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const AuthItem = styled(NavLink)`
  position: relative;

  font-weight: 500;
  font-size: 18px;
  color: #282828;
  text-decoration: none;
  text-shadow: 0px 1px 1px hsl(195, 53%, 79%);

  transition: all 250ms ease-in-out;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;

    width: 100%;
    height: 2px;

    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 300ms ease-in-out;
    box-shadow: 0px 1px 1px hsl(195, 53%, 79%);

    background-color: #fff;
    border-radius: 5px;
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  :hover,
  :focus {
    color: tomato;
  }

  &.active {
    color: tomato;

    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;
