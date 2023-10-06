import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import fieldSet from './../../data/field-set.json';
import { ColumnContainer, RowContainer } from "./Form";
import { FormFieldType } from "./FormField";
import styled from "styled-components";

const Thankyou = () => {
	const formFields = useSelector((state: RootState) => state.form);

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