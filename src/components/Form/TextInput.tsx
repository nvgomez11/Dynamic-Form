import { useField } from "formik";
import { FormFieldType } from "./FormField";
import styled from "styled-components";
import Error from "./Error";

export const TextInput = ({ label, ...props}: FormFieldType ) => {
	const [field, meta] = useField(props.id);

	return (
		<Container data-testid="text-input-comp">
			<StyledLabel htmlFor={props.id}>{label}</StyledLabel>
			<StyledInput {...field} {...props}/>
			{meta.touched && meta.error ? (
				<Error>{meta.error}</Error>
			) : null}		
		</Container>					
	)
}

const StyledInput = styled.input`
	width: 100%;	
	max-width: -webkit-fill-available;
	border: 2px solid ${(props) => props.theme.colors.borders};
	border-radius: 10px;
	padding: 10px 8px;
	background-color: ${(props) => props.theme.colors.inputBackground}; 
	color: ${(props) => props.theme.colors.text};

	@media (min-width: 768px) {    
		width: auto;
		max-width: none;
  }
`;

const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	text-align: left;
	margin-right: 5px;	
`;

const StyledLabel = styled.label`
	color: ${(props) => props.theme.colors.text};
	font-weight: ${(props) => props.theme.weight.bold};
	margin-bottom: ${(props) => props.theme.spacing.small};
`;
