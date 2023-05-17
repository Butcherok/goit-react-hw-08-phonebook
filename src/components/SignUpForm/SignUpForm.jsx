import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp } from 'redux/index';
import { useSignUpMutation } from 'redux/index';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [showPassword, setShowPassword] = useState(false);
  const [register] = useSignUpMutation();
  // const theme = useTheme();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const onSubmit = async e => {
    e.preventDefault();
    const response = await register({ name, email, password });

    setName('');
    setEmail('');
    setPassword('');

    if (response?.error?.status === 400) {
      // const asd = `${response.error.data.message}`;
      setError(response.error.data.message);
      return;
    }

    dispatch(signUp(response.data));
  };

  return (
    <>
      <form onSubmit={onSubmit} autoComplete="off">
        <label>
          Username
          <input
            id="name"
            placeholder="Name"
            // variant="outlined"
            // sx={{ width: 1, mb: 2 }}
            name="name"
            value={name}
            onChange={({ currentTarget: { value } }) => setName(value.trim())}
            autoComplete="off"
            required
          />
        </label>
        <label>
          Email
          <input
            id="email"
            placeholder="Email"
            // variant="outlined"
            // sx={{ width: 1, mb: 2 }}
            name="email"
            type="email"
            value={email}
            onChange={({ currentTarget: { value } }) => setEmail(value.trim())}
            autoComplete="off"
            required
          />
        </label>
        <label>
          Password
          <input
            id="password"
            placeholder="Password"
            // variant="outlined"
            // sx={{ width: 1, mb: 2 }}
            name="password"
            type="password"
            value={password}
            onChange={({ currentTarget: { value } }) =>
              setPassword(value.trim())
            }
            autoComplete="off"
            required
          />
        </label>
        <button
          type="submit"
          disabled={password === '' || email === '' || name === ''}
        >
          Sign Up
        </button>
      </form>
      {error && <p>{error}</p>}
      <p>Already have an account?</p>
      <Link to={'/Login'}> Login </Link>
    </>
  );
};
