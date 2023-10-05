import fieldSet from './../../data/field-set.json';
import { Formik, Form } from 'formik';
import { generateInitialValues, generateValidationSchema } from '../../utils/validationSchema';
import { FormField, FormFieldType } from './FormField';

const validationSchema = generateValidationSchema();

const initialValues = generateInitialValues();

const DynamicForm = () => {
	console.log('Hi, I am validation schema', validationSchema);
	console.log('Initial Values', initialValues);

	const handleSubmit = (values: any) => { //TODO: watch out any value
		console.log('Form values are:', values);
	};

	return(
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
			<Form>
					{fieldSet?.fields?.map((field) => {						
						if(Array.isArray(field)){
							return(
								field.map((subfield: FormFieldType) => {									
								 	return( //TODO: element here should be in-line
										<div key={`field-${subfield.id}`}>
											<FormField field={subfield} />																						
										</div>
									)
								})								
							)												
						}

						return (
							<div key={`field-${field.id}`}>
								<FormField field={field} />
							</div>
						)
					})}

					<button type="submit">Submit</button>
			</Form>			
		</Formik>
	);
}

export default DynamicForm;