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
		updateNote: (state, action) => {
			const { id, title, note } = action.payload;

			const exists = state.notes.filter((note) => note.id === id);
			exists[0].title = title;
			exists[0].note = note;
		},
		deleteNote: (state, action) => {
			const id = action.payload;
			const remaining = state.notes.filter((note) => note.id !== id);
			state.notes = remaining;
		},
	},
});

export const { showNotes, addNote, deleteNote, updateNote } = noteSlice.actions;
export default noteSlice.reducer;
