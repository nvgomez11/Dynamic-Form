import { TextInput } from './TextInput';
import { SelectInput } from './SelectInput';
import { TextAreaInput } from './TextAreaInput';

enum FormTypes {
	text = "text",
	select = "select",
	textarea = "textarea",
	email = "email"
}

export type FormFieldType = {
	id: string;
	type: string;
	label: string;
	required?: boolean;
	placeholder?: string;
	options?: string[];	
}

export type FormFieldProps = {
	field: FormFieldType
}

export const FormField = ({ field }: FormFieldProps) => {
	const { id, type, label, placeholder, options } = field;

	const getFieldType = (type: FormTypes, options?: string[]) => {
		switch (type) {
			case FormTypes.text:
				return (
					<TextInput 
						id={id} 
						type={type} 
						label={label} 
						placeholder={placeholder} 
					/>)

			case FormTypes.email:
				return (
					<TextInput 
						id={id} 
						type={type} 
						label={label} 
						placeholder={placeholder} 
						data-testid="form-field-comp"/>
					)

			case FormTypes.textarea:
				return (
					<TextAreaInput 
						id={id} 
						type={type} 
						label={label} 
						placeholder={placeholder} 
						data-testid="form-field-comp"/>)				

			case FormTypes.select:
				return (					
					(<SelectInput 
						id={id} 
						type={type} 
						label={label} 
						placeholder={placeholder} 
						options={options} 
						data-testid="form-field-comp"/>)
				)
		}
	};

	return(
		getFieldType(type as FormTypes, options)
	)
};

