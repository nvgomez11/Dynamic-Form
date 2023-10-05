import fieldSet from './../../data/field-set.json';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { generateInitialValues, generateValidationSchema } from '../../utils/validationSchema';
import { FormFieldType } from './FormField';

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
					<h1>This is the Form title!!</h1>

					{fieldSet?.fields?.map((field, index) => {						
						if(Array.isArray(field)){							
							return(
								field.map((subfield: FormFieldType) => {									
								 	return( //TODO: element here should be in-line
										<div key={`field-${index}`}>
											<label htmlFor={subfield.id}/>
											<Field 
												type={subfield.type} 
												id={subfield.id} 
												name={subfield.id} 
												placeholder={subfield.placeholder ? subfield.placeholder : ''}/>
										</div>
									)
								})								
							)												
						}

						return (
							<div key={`field-${index}`}>
								<label htmlFor={field.id}/>
								<Field 
									type={field.type} 
									id={field.id} 
									placeholder={field.placeholder} 
									name={field.id}/>												
							</div>
						)
					})}
		
			</Form>			
		</Formik>
	);
}

export default DynamicForm;