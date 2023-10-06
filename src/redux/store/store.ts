import { configureStore } from '@reduxjs/toolkit';
import formSlice from '../reducers/formSlice';

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    form: formSlice,    
  },
});

export default store;
