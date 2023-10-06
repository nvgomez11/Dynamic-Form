import { createSlice } from '@reduxjs/toolkit';
import { generateInitialValues } from '../../utils/validationSchema';

const formSlice = createSlice({
	name: 'form',
	initialState: generateInitialValues(),
	reducers: {
		updateFormField: (state, action) => {
			for(const key in action.payload) {
				if(Object.hasOwnProperty.call(action.payload, key)) {
					state[key] = action.payload[key]
				}
			}			
			state = action.payload;
		}		
	}
});

export const { updateFormField } = formSlice.actions;
export default formSlice.reducer;