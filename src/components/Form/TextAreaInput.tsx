import { useField } from "formik";
import { FormFieldType } from "./FormField";
import styled from "styled-components";
import Error from "./Error";

export const TextAreaInput = ({ label, ...props}: FormFieldType ) => {
	const [field, meta] = useField(props.id);

	return (
		<Container data-testid="textarea-input-comp">
			<StyledLabel htmlFor={props.id} data-testid="textarea-label">{label}</StyledLabel>
			<StyledTextArea 
				{...field} 
				{...props} 
				aria-required={props.required ? "true" : "false"}
				data-testid="textarea-input"
			/>			
			{meta.touched && meta.error ? (
				<Error>{meta.error}</Error>
			) : null}
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledTextArea = styled.textarea`	
	max-width: -webkit-fill-available;
	height: 80px;
	border: 2px solid ${(props) => props.theme.colors.borders};
	border-radius: 10px;
	padding: 10px 8px;
	background-color: ${(props) => props.theme.colors.inputBackground};
	color: ${(props) => props.theme.colors.text};
`;

const StyledLabel = styled.label`
	color: ${(props) => props.theme.colors.text};
	font-weight: ${(props) => props.theme.weight.bold};
	margin-bottom: ${(props) => props.theme.spacing.small};
`;

