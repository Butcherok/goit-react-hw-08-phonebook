import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSignInMutation } from 'redux/index';
import { signIn } from 'redux/index';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [showPassword, setShowPassword] = useState(false);
  const [login] = useSignInMutation();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const onSubmit = async e => {
    e.preventDefault();
    const response = await login({ email, password });

    setEmail('');
    setPassword('');

    if (response?.error?.status === 400) {
            setError('Incorrect login or password');
      return;
    }

    dispatch(signIn(response.data));
  };

  return (
    <>
      <form onSubmit={onSubmit} autoComplete="off">
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
            type="password"
            id="password"
            placeholder="Password"
            variant="outlined"
            sx={{ width: 1, mb: 2 }}
            name="password"
            value={password}
            onChange={({ currentTarget: { value } }) =>
              setPassword(value.trim())
            }
            autoComplete="off"
            required
          />
        </label>
        <button type="submit" disabled={password === '' || email === ''}>
          Log In
        </button>
        {error && <p>{error}</p>}
        <p>No account?</p>
        <Link to={'/Register'}> Register </Link>
      </form>
    </>
  );
};
