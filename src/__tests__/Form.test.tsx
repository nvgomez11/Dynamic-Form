import { ThemeProvider } from "styled-components";
import { FormFieldType } from "../components/Form/FormField";
import {  render, screen } from '@testing-library/react';
import theme from "../styles/theme";
import { Formik } from "formik";
import DynamicForm from "../components/Form/Form";
import { MemoryRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from "../redux/store/store";

describe('Form Component', () => {
		const mockJson: FormFieldType = {
			id: 'firstName',
			type: 'text',
			label: 'First Name',
			placeholder: 'Test Placeholder',
		};

		const mockedInitialValues = {
			"firstName": ""
		}

		const filledInitialValues = {
			"firstname": "Nelson"
		}

		it('Renders button correctly', () => {
			const { getByTestId } = render(
				<Provider store={store}>
					<ThemeProvider theme={theme}>
						<MemoryRouter>
								<Formik initialValues={filledInitialValues} onSubmit={() => {}}>				
									<DynamicForm />
								</Formik>
							</MemoryRouter>
					</ThemeProvider>
				</Provider>	
			);

			const submitButton = getByTestId('submit-button');

			expect(submitButton).toBeInTheDocument();
		});

		it('Renders label correctly', () => {
			const { getByText } = render(
				<Provider store={store}>
					<ThemeProvider theme={theme}>
						<MemoryRouter>
								<Formik initialValues={mockedInitialValues} onSubmit={() => {}}>				
									<DynamicForm />
								</Formik>
							</MemoryRouter>
					</ThemeProvider>
				</Provider>	
			);

			const label = screen.getByText(mockJson.label);

			expect(label).toBeInTheDocument();
		});
});
