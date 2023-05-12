import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from '../Header/Header';

const Layout = () => {
	return (
		<Box>
			<Header />
			<Suspense fallback={null}>
				<Outlet />
			</Suspense>
		</Box>
	);
};

export default Layout;
