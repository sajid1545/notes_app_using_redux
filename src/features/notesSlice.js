import { createSlice } from '@reduxjs/toolkit';
const { v4: uuidv4 } = require('uuid');

const initialNoteState = {
	books: [
		{
			id: uuidv4(),
			title: 'React',
			author: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, id.',
		},
		{
			id: uuidv4(),
			title: 'JavaScript',
			note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, id.',
		},
	],
};

const noteSlice = createSlice({
	name: 'notes',
});

