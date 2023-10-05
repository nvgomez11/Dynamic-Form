import * as Yup from 'yup';
import fieldSet from '../data/field-set.json';
import { FormFieldType } from '../components/Form/FormField';


export const generateValidationValue = ({id, placeholder, required, type}: FormFieldType) => {	
	if(required) {
		 return Yup.string().required(`${placeholder}`);
	} else {
		return Yup.string()
	}
}

export const generateValidationSchema = () => {
	const schema: Record<string, any> = {};
	
	fieldSet.fields.map((field) => {
		if(Array.isArray(field)) {
			return(
				field.map((subfield) => {					
					return schema[subfield.id] = generateValidationValue(subfield);
				})
			);
		}

		return schema[field.id] = generateValidationValue(field);
	});

	return Yup.object().shape(schema);
};


export const generateInitialValues = () => {
	const initialValues: Record<string, string> = {};

	fieldSet.fields.map((field) => {
		if(Array.isArray(field)){
			return(
				field.map((subfield) => {					
					return initialValues[subfield.id] = "";
				})
			)
		}
		return initialValues[field.id] = "";		
	})
	
	return initialValues;
}

// const validationSchema = Yup.object().shape({
//   // Define validation rules for each field based on your JSON data
//   // For example, assuming you have 'firstName' and 'lastName' fields:
//   firstName: Yup.string().required('First name is required'),
//   lastName: Yup.string().required('Last name is required'),
//   // Add validation rules for other fields
// });
