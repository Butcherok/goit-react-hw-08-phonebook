import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 25px;

  font-weight: 500;
  font-size: 24px;
  color: #282828;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const InputWrapper = styled.div`
  position: relative;

  margin-bottom: 40px;
  max-width: 100%;
  width: 450px;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 22px;
  color: #282828;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const Input = styled(Field)`
  padding: 15px;
  width: 100%;

  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  background-color: white;
  border: 2px solid lightblue;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

  transition: all 300ms ease-in-out;

  outline: none;

  &:not(:placeholder-shown)[data-error='false'] {
    color: #282828;
    border: 1px solid rgba(255, 255, 255, 1);
  }

  &[data-error='true'] {
    color: #282828;
    border: 1px solid rgba(227, 67, 67, 0.7);
    background-color: rgba(255, 255, 255, 0.1);
  }

  &[type='password'] {
    padding-right: 65px;
  }

  &:hover,
  &:focus {
    color: #282828;
    border: 2px solid lightblue;
    /* background-color: rgba(255, 255, 255, 0.1); */
  }
`;

export const Btn = styled.button`
  padding: 16px 32px;

  font-weight: 700;
  font-size: 24px;
  color: 282828;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  background-color: lightblue;

  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  transition: all 250ms ease-in-out;

  cursor: pointer;

  :hover {
    scale: 1.05;
    border: 2px solid rgba(255, 255, 255, 1);
  }
  &:active {
    background-color: lightgreen;
    transform: scale(0.95);
    transition: all 0.1s ease-in-out;
    border: 2px solid lightgreen;
  }
`;

export const PromtText = styled.span`
  display: flex;
  margin-top: 15px;
  gap: 10px;

  font-size: 18px;
  color: #282828;
`;

export const PromtLink = styled(Link)`
  font-weight: 500;
  font-size: 18px;
  color: #282828;
  text-decoration: none;
  text-shadow: 0px 1px 1px hsl(195, 53%, 79%);

  transition: all 250ms ease-in-out;

  :hover,
  :focus {
    color: lightgreen;
  }

  &.active {
    color: lightgreen;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  position: absolute;
  bottom: -10%;
  left: 0;

  transform: translateY(100%);

  font-size: 14px;
  color: #e34343;
`;

export const PassWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ShowPassBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;

  transform: translateY(-50%);

  padding: 5px;
  width: 33px;
  height: 33px;

  background-color: transparent;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 7px;

  transition: border 250ms ease-in-out;

  cursor: pointer;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 1);
  }

  &:hover > svg {
    fill: #fff;
  }
`;

export const IconHidden = styled(FaEyeSlash)`
  width: 100%;
  height: 100%;

  fill: rgba(255, 255, 255, 0.7);

  transition: fill 250ms ease-in-out;
`;

export const IconShown = styled(FaEye)`
  width: 100%;
  height: 100%;

  fill: rgba(255, 255, 255, 0.7);

  transition: fill 250ms ease-in-out;
`;
