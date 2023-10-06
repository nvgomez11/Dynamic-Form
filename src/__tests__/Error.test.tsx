import React from 'react';
import { ThemeProvider } from 'styled-components'; 
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Error from '../components/Form/Error';
import theme from '../styles/theme';

const errorMessage = 'Required';

describe('Error Component', () => {
  it('renders children correctly', () => {    
    const { getByTestId } = render(
			<ThemeProvider theme={theme}>
				<Error>{errorMessage}</Error>
			</ThemeProvider>
		);

    expect(getByTestId('error-component')).toBeInTheDocument();
  });
});