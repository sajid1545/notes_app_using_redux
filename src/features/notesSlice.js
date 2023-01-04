import { createSlice } from '@reduxjs/toolkit';
const { v4: uuidv4 } = require('uuid');

const initialNoteState = {
	books: [
		{
			id: uuidv4(),
			title: 'React',
			author:
				'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.',
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
	},
});

export const { showNotes } = noteSlice.actions;
export default noteSlice.reducer;
