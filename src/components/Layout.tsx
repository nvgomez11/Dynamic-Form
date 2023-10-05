import React, { ReactNode } from 'react';
import Header from './Layout/Header';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
	return(
		<>
			<Header/>
			{children}
		</>
	);
}

export default Layout;