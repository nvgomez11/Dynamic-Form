import fieldSet from './../../data/field-set.json';
import { Formik, Form } from 'formik';
import { generateInitialValues, generateValidationSchema } from '../../utils/validationSchema';
import { FormField, FormFieldType } from './FormField';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateFormField } from '../../redux/reducers/formSlice';
import { useNavigate } from 'react-router-dom';

const validationSchema = generateValidationSchema();

const initialValues = generateInitialValues();

const DynamicForm = () => {
	const navigate = useNavigate();		
	const dispatch = useDispatch();
	
	const handleSubmit = (values: any) => { //TODO: watch out any value		
		dispatch(updateFormField(values));
		navigate('/thankyou');		
	};

	return(
		<>
			<StyledTitle>Please fill out the form</StyledTitle>			
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
				<Form>
					<StyledContainer>
						{fieldSet?.fields?.map((field, index) => {
							if(Array.isArray(field)){
								return(
									<RowContainer key={`${field}-${index}`}>
										{field.map((subfield: FormFieldType) => {									
												return(
													<FormField field={subfield} key={`field-${subfield.id}`} />
												)
										})}
									</RowContainer>															
								)											
							}

							return (
								<ColumnContainer key={`field-${field.id}`}>
									<FormField field={field} />
								</ColumnContainer>
							)
						})}

						<Button type="submit" data-testid="submit-button">Submit</Button>
					</StyledContainer>
				</Form>			
			</Formik>
		</>
	);
}

export default DynamicForm;

const StyledTitle = styled.h2`
	color: ${(props) => props.theme.colors.text};
	margin-bottom: 30px;

	@media (min-width: 768px) {
		width: 768px;
		margin: 0 auto;
		margin-bottom: 30px;
	}
`;

const StyledContainer = styled.div`
	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		width: 768px;
		margin: 0 auto;
	}
`;

export const RowContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	max-width: 100%;
	margin-bottom: ${(props) => props.theme.spacing.medium};
`;

export const ColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100%;
	margin-bottom: ${(props) => props.theme.spacing.medium};
`

const Button = styled.button`
	background-color: white;
	border: 2px solid white;
	border-radius: 10px;
	color: #2d3748;
	padding: 8px;
	font-size: ${(props) => props.theme.fontSize.medium};
	font-weight: ${(props) => props.theme.weight.bold};
	margin-bottom: 100px;
	margin-top: 20px;
	width: 100%

	@media (min-width: 768px) {
		width: 200px;
		margin: 0 auto;
		margin-top: 45px;
	}

`