import * as Yup from 'yup';
import fieldSet from '../data/field-set.json';
import { FormFieldType } from '../components/Form/FormField';


export const generateValidationValue = ({required, type, label, options, id }: FormFieldType) => {
	let validator = Yup.string();

	if(type === "email") {
		validator = validator.email();
	}

	if(type === "select" && options) {
		validator = validator.oneOf(options)
	}

	if(id=== "phone") {
		validator = validator.matches(/^\(\d{3}\) \d{3}-\d{4}$/, "Required format: (XXX) XXX-XXXX")
	}

	if(required) {
		 validator = validator.required(`${label ? label : ""} is required`);
	}
			
	return validator;
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
