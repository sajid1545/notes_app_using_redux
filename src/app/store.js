import { configureStore } from '@reduxjs/toolkit';
import notesSlice from '../features/notesSlice';

const store = configureStore({
	reducer: {
		notesReducer: notesSlice,
	},
});

export default store;
