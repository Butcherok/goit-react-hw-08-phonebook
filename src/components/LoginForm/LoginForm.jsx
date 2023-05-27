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
  IconHidden,
  IconShown,
  PassWrapper,
  ShowPassBtn,
} from './LoginForm.styled';
import { PromtLink, PromtText } from 'components/SignUpForm/SignUpForm.styled';

const initialValues = {
  email: '',
  password: '',
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
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                data-error={errors.password && touched.password ? true : false}
              />

              <ShowPassBtn
                type="button"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                onClick={togglePassword}
                data-shown={passwordShown}
              >
                {passwordShown ? <IconShown /> : <IconHidden />}
              </ShowPassBtn>
            </PassWrapper>
            <ErrorMsg name="password" component="span" />
          </InputWrapper>
          <Btn type="submit">Sign in</Btn>
          <PromtText>
            No account?
            <PromtLink to={'/Register'}> Register </PromtLink>
          </PromtText>
        </FormContainer>
      )}
    </Formik>
  );
};
