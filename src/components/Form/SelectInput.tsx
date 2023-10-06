import { useField } from "formik";
import { FormFieldType } from "./FormField";
import styled from "styled-components";
import Error from "./Error";

export const SelectInput = ({ label, options, ...props}: FormFieldType ) => {
	const [field, meta] = useField(props.id);

	return (
		<Container data-testid="select-input-comp">
			<StyledLabel htmlFor={props.id}>{label}</StyledLabel>
			<StyledSelect 
				{...field} 
				{...props} 
				aria-labelledby={`${props.id}-label`}
        aria-invalid={meta.touched && !!meta.error}
			>
				{options?.map((option, index) => {
						return <StyledOptions value={option} key={`${option}-${index}`}>{option}</StyledOptions>
				})}
			</StyledSelect>
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

const StyledSelect = styled.select`
	width: 100%;	
	max-width: -webkit-fill-available;
	border: 2px solid ${(props) => props.theme.colors.borders};
	border-radius: 10px;
	padding: 10px 8px;
	background-color: ${(props) => props.theme.colors.inputBackground};
	color: ${(props) => props.theme.colors.text};

	@media (min-width: 768px) {    		
		max-width: none;
  }
`;

const StyledOptions = styled.option`
	width: 100vw;
	color: ${(props) => props.theme.colors.borders}; 
`;

const StyledLabel = styled.label`
	color: ${(props) => props.theme.colors.text};
	font-weight: ${(props) => props.theme.weight.bold};
	margin-bottom: ${(props) => props.theme.spacing.small};
`;