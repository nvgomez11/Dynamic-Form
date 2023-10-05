import { useField } from "formik";
import { FormFieldType } from "./FormField";

export const TextInput = ({ label, ...props}: FormFieldType ) => {
	const [field, meta] = useField(props.id);

	return (
		<>
			<label htmlFor={props.id}>{label}</label>
			<input {...field} {...props}/>
			{meta.touched && meta.error ? (
				<div style={{ color: 'red'}} className="error">{meta.error}</div>
			) : null}		
		</>
	)
}

//TODO: remove in-line style