import { Field } from 'formik';

enum FormTypes {
	text = "text",
	select = "select",
	textarea = "textarea",
	email = "email"
}

export type FormFieldType = {
	id: string;
	type: string;
	required?: boolean;
	placeholder?: string;
	options?: string[];
}

export const FormField = ({ id, type, required }: FormFieldType) => {

	const getElementType = (type: string, options?: string[]) => {
		switch (type) {
			case FormTypes.text:
				return <Field type={FormTypes.text}/>
			
			case FormTypes.email:
				return <Field type={FormTypes.email}/>
				
			case FormTypes.textarea:
				return <input/>

			case FormTypes.select:
				return <input/>
		}
	};

	return(
	<div key={id}>
		<h1>hey</h1>		
	</div>)
};

