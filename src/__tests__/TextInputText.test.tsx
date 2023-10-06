import React from 'react';
import { render, screen } from '@testing-library/react';
import { Form, Formik } from 'formik';
import { FormField } from '../components/Form/FormField';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

describe('SelectInput Component', () => {
  const mockField = {
    id: 'test-text',
    type: 'text',
    label: 'Test text',
    required: true,    
  };

	const initialValues = {
    "test-field": ""
  }

  it('Renders text label correctly', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={theme}>
				<Formik initialValues={initialValues} onSubmit={() => {}}>
					<Form>
						<FormField field={mockField}/>					
					</Form>
				</Formik>
			</ThemeProvider>
		);

		const labelElement = getByTestId('text-label');

		expect(labelElement).toBeInTheDocument();    
  });

  it('Renders input element correctly', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={theme}>
				<Formik initialValues={initialValues} onSubmit={() => {}}>
					<Form>
						<FormField field={mockField}/>					
					</Form>
				</Formik>
			</ThemeProvider>
		);

		const inputTextElement = getByTestId('input-text');

		expect(inputTextElement).toBeInTheDocument(); 
  });
});