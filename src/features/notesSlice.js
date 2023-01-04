import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialNoteState = {
	notes: [
		{
			id: uuidv4(),
			title: 'React',
			note: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.',
		},
		{
			id: uuidv4(),
			title: 'JavaScript',
			note: 'JavaScript is the worlds most popular programming language. JavaScript is the programming language of the Web',
		},
	],
};

const noteSlice = createSlice({
	name: 'notes',
	initialState: initialNoteState,
	reducers: {
		showNotes: (state) => state,
		addNote: (state, action) => {
			state.notes.push(action.payload);
		},
	},
});

export const { showNotes, addNote } = noteSlice.actions;
export default noteSlice.reducer;
