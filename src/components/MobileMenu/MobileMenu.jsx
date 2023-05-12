import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/MenuSharp';

export const MobileMenu = () => {
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{display: {sm: "none"} ,mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};
