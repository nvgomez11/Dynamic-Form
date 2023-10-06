import React from 'react';
import { render } from '@testing-library/react';
import { FormField, FormFieldType } from './../components/Form/FormField';
import { Form, Formik } from 'formik';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

describe('FormField Component', () => {
  const mockField: FormFieldType = {
    id: 'test-field',
    type: 'text',
    label: 'Test Label',
    placeholder: 'Test Placeholder',
  };

  const initialValues = {
    "test-field": ""
  }

  it('renders a text input when type is "text"', () => {
    const { getByTestId } = render(
			<ThemeProvider theme={theme}>
					<Formik initialValues={initialValues} onSubmit={() => {}}>
							<Form>
								<FormField field={mockField} />
							</Form>
					</Formik>
			</ThemeProvider>
    );

    const inputElement = getByTestId('text-input-comp');
    expect(inputElement).toBeInTheDocument();
  });

	it('renders a text input when type is "email"', () => {
		const emailTypeMocked= {...mockField, type: 'email'}
    const { getByTestId } = render(
			<ThemeProvider theme={theme}>
					<Formik initialValues={initialValues} onSubmit={() => {}}>
							<Form>
							<FormField field={emailTypeMocked} />
							</Form>
					</Formik>
			</ThemeProvider>
    );

    const inputElement = getByTestId('text-input-comp');
    expect(inputElement).toBeInTheDocument();
  });

	it('renders a text input when type is "textarea"', () => {
		const textAreaTypeMocked= {...mockField, type: 'textarea'}
    const { getByTestId } = render(
			<ThemeProvider theme={theme}>
					<Formik initialValues={initialValues} onSubmit={() => {}}>
							<Form>
							<FormField field={textAreaTypeMocked} />
							</Form>
					</Formik>
			</ThemeProvider>
    );

    const inputElement = getByTestId('textarea-input-comp');
    expect(inputElement).toBeInTheDocument();
  });

	it('renders a text input when type is "select"', () => {
		const selectTypeMocked= {...mockField, type: 'select'}
    const { getByTestId } = render(
			<ThemeProvider theme={theme}>
					<Formik initialValues={initialValues} onSubmit={() => {}}>
							<Form>
							<FormField field={selectTypeMocked} />
							</Form>
					</Formik>
			</ThemeProvider>
    );

    const inputElement = getByTestId('select-input-comp');
    expect(inputElement).toBeInTheDocument();
  });
});