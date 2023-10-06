import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import fieldSet from './../../data/field-set.json';
import { ColumnContainer, RowContainer } from "./Form";
import { FormFieldType } from "./FormField";
import styled from "styled-components";
import { generateInitialValues } from "../../utils/validationSchema";
import isEqual from 'lodash/isEqual';
import { Link } from 'react-router-dom';


const Thankyou = () => {
	const formFields = useSelector((state: RootState) => state.form);
	const initialValues = generateInitialValues();

	const areFieldsEmpty = isEqual(formFields, initialValues);

	if(areFieldsEmpty){
		return (
			<StyledLink to="/">
				<StyledParagraph>No data to show. Please fill out the form</StyledParagraph>
			</StyledLink>
		)
	}

  return(
		<StyledDescriptiveList>
			{fieldSet?.fields?.map((field, index) => {
					if(Array.isArray(field)){
						return(
							<RowContainer key={`${field}-${index}`}>
								{field.map((subfield: FormFieldType) => {
										return(
											<>
												{ formFields[subfield.id] !== "" ? (
														<InnerRowContainer>
															<DescriptionTerm>{subfield.label}</DescriptionTerm>
															<DescriptionDetail>{formFields[subfield.id]}</DescriptionDetail>
														</InnerRowContainer>																											
													) : null}
											</>																							
									  )
								 })}
							</RowContainer>
						)											
					}

					return (
						<ColumnContainer key={`field-${field.id}`}>
							{ formFields[field.id] !== "" ? (
								<>
									<DescriptionTerm>{field.label}</DescriptionTerm>
									<DescriptionDetail>{formFields[field.id]}</DescriptionDetail>
								</>
							): null}							
						</ColumnContainer>
					)
				})}
		</StyledDescriptiveList>
	)
}

const StyledLink = styled(Link)`
	cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledParagraph = styled.p`	
	color: ${(props) => props.theme.colors.text};
	margin-bottom: 30px;
	text-align: center;

	@media (min-width: 768px) {
		width: 768px;
		margin: 0 auto;
		margin-bottom: 30px;
	}
`;

const StyledDescriptiveList = styled.dl`
	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		width: 768px;
		margin: 0 auto;
	}
`;
const InnerRowContainer = styled.div`
	flex: 1;
	margin-right: 5px;	
`;

const DescriptionTerm = styled.dt`
	color: ${(props) => props.theme.colors.text};
	font-weight: 700;
	margin-bottom: ${(props) => props.theme.spacing.small};	
`

const DescriptionDetail = styled.dd`
	color: ${(props) => props.theme.colors.secondaryText};
	margin-left: 0px;
`;

export default Thankyou;