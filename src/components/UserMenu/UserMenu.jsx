import { Box } from '@mui/material';
import { useUser } from 'hooks';
import { useDispatch } from 'react-redux';
import { useLogOutMutation, logOut } from 'redux/index';

export const UserMenu = () => {
  const { user } = useUser();
  const [signOut] = useLogOutMutation();
  const dispatch = useDispatch();

  return (
    <>
      <Box>
        <p>Welcome, {user.name}</p>
        <button
          type="button"
          onClick={async () => {
            await signOut();
            dispatch(logOut());
          }}
        >
          Logout
        </button>
      </Box>
    </>
  );
};
