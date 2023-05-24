import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useState } from 'react';
import { Formik } from 'formik';
import {
  FormContainer,
  Title,
  InputWrapper,
  Label,
  Input,
  Btn,
  ErrorMsg,
  Text,
  IconHidden,
  IconShown,
  PassWrapper,
  ShowPassBtn,
} from './LogicForm.styled';
import { Link } from 'react-router-dom';

const initialValues = {
  email: 'user-mail@domain.com',
  password: 'User-pass-123',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );

    resetForm();
  };

  const togglePassword = () => setPasswordShown(!passwordShown);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ errors, touched }) => (
        <FormContainer>
          <Title>Sign in to continue</Title>
          <Text>*you can also use a test credentials</Text>
          <InputWrapper>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder={' '}
              data-error={errors.email && touched.email ? true : false}
            />
            <ErrorMsg name="email" component="span" />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="password">Password:</Label>
            <PassWrapper>
              <Input
                type={passwordShown ? 'text' : 'password'}
                name="password"
                id="password"
                autoComplete="off"
                placeholder={' '}
                data-error={errors.password && touched.password ? true : false}
              />

              <ShowPassBtn
                type="button"
                onClick={togglePassword}
                data-shown={passwordShown}
              >
                {passwordShown ? <IconShown /> : <IconHidden />}
              </ShowPassBtn>
            </PassWrapper>
            <ErrorMsg name="password" component="span" />
          </InputWrapper>
          <Btn type="submit">Sign in</Btn>
          <p>No account?</p>
          <Link to={'/Register'}> Register </Link>
        </FormContainer>
      )}
    </Formik>
  );
};