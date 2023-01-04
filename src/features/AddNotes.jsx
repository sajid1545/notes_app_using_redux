import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addNote } from './notesSlice';

const AddNotes = () => {
	const [note, setNotes] = useState('');
	const [title, setTitle] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleAddNote = (e) => {
		e.preventDefault();

		const notes = { id: uuidv4(), title, note };
		dispatch(addNote(notes));
		navigate('/');
	};

	return (
		<div>
			<h1 className="text-5xl text-center font-extrabold">Add Notes</h1>

			<form
				onSubmit={handleAddNote}
				className="my-10 border-4 border-gray-600 rounded-lg shadow-2xl hover:shadow-blue-300 duration-500 p-20 w-[90%] mx-auto">
				<Box className="w-[50%] mx-auto space-y-10">
					<TextField
						id="outlined-basic"
						required
						label="Title"
						variant="outlined"
						className="block w-[90%] mx-auto"
						onChange={(e) => setTitle(e.target.value)}
					/>
					<TextField
						id="outlined-basic"
						label="Note"
						required
						variant="outlined"
						className="block w-[90%] mx-auto"
						onChange={(e) => setNotes(e.target.value)}
					/>

					<button
						type="submit"
						className="py-3 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-2/4 block mx-auto transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
						Add Notes
					</button>
				</Box>
			</form>
		</div>
	);
};

export default AddNotes;
