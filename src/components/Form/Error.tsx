import styled from "styled-components";

interface ErrorProps {
  children: React.ReactNode;
}

const Error = ({children}: ErrorProps) => {	
  return (<StyledError role="alert" data-testid="error-component">{children}</StyledError>)
};

export default Error;

const StyledError = styled.div`
	margin-top: 5px;
  color: ${(props) => props.theme.colors.errors};
  font-size: ${(props) => props.theme.fontSize.small};
`;
