import React from 'react';
import { render, screen } from '@testing-library/react';
import { Form, Formik } from 'formik';
import { FormField } from '../components/Form/FormField';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

describe('SelectInput Component', () => {
  const mockField = {
    id: 'test-text',
    type: 'textarea',
    label: 'Test text',
    required: true,    
  };

	const initialValues = {
    "test-field": ""
  }

  it('Renders textarea label correctly', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={theme}>
				<Formik initialValues={initialValues} onSubmit={() => {}}>
					<Form>
						<FormField field={mockField}/>					
					</Form>
				</Formik>
			</ThemeProvider>
		);

		const labelElement = getByTestId('textarea-label');

		expect(labelElement).toBeInTheDocument();    
  });

  it('Renders textarea input element correctly', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={theme}>
				<Formik initialValues={initialValues} onSubmit={() => {}}>
					<Form>
						<FormField field={mockField}/>					
					</Form>
				</Formik>
			</ThemeProvider>
		);

		const inputTextElement = getByTestId('textarea-input');

		expect(inputTextElement).toBeInTheDocument(); 
  });
});