import { useField } from "formik";
import { FormFieldType } from "./FormField";

export const SelectInput = ({ label, options, ...props}: FormFieldType ) => {
	const [field, meta] = useField(props.id);

	return (
		<>
			<label htmlFor={props.id}>{label}</label>
			<select {...field} {...props}>
				{options?.map((option, index) => {
						return <option value={option} key={`${option}-${index}`}>{option}</option>
				})}
			</select>
			{meta.touched && meta.error ? (
				<div style={{ color: 'red'}} className="error">{meta.error}</div>
			) : null}		
		</>
	)
}