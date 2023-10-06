import React from 'react';
import { render, screen } from '@testing-library/react';
import { Form, Formik } from 'formik';
import { FormField } from '../components/Form/FormField';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

describe('SelectInput Component', () => {
  const mockField = {
    id: 'test-select',
    type: 'select',
    label: 'Test Select',
    required: true,
    options: ['Option 1', 'Option 2', 'Option 3'],
  };

	const initialValues = {
    "test-field": ""
  }

  it('Renders select label correctly', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={theme}>
				<Formik initialValues={initialValues} onSubmit={() => {}}>
					<Form>
						<FormField field={mockField}/>					
					</Form>
				</Formik>
			</ThemeProvider>
		);

		const labelElement = getByTestId('select-label');

		expect(labelElement).toBeInTheDocument();    
  });

  it('Renders options correctly', () => {
   	render(
			<ThemeProvider theme={theme}>
				<Formik initialValues={initialValues} onSubmit={() => {}}>
					<Form>
						<FormField field={mockField}/>					
					</Form>
				</Formik>
			</ThemeProvider>
		);
		const options = screen.getAllByRole('option');
		expect(options.length).toBe(3);
  });
});