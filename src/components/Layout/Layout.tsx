import React, { ReactNode } from 'react';
import Header from './Header';
import styled from 'styled-components';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
	return(
		<Container>
			<Header/>
			{children}
		</Container>					
	);
}

export default Layout;


const Container = styled.div`
	max-width: 100%;
	min-height: 100vh;
	margin: 0 auto;
	background-color: ${(props) => props.theme.colors.background};
	padding: 40px 10px 40px 10px ;

	@media (min-width: 768px) {    
    margin: 0 auto;
    padding: 20px;		
  }
`;
