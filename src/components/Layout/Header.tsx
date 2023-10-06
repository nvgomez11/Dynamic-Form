import styled from "styled-components";

const Header = () => {
	return(
		<Container>Dynamic Form</Container>
	);
}

export default Header;

const Container = styled.div`
	position: static;
	color: white;	
	width: 100vw;
	margin-left: -8px;
	height: 20px;
	/* left: 0; */
	padding: 9px 5px;
	text-align: center;	
	border-radius: 0;
	font-weight: 700;
	font-size: 25px;
	margin-bottom: 40px;
`;