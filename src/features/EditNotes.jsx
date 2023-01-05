import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateNote } from './notesSlice';

const EditNotes = () => {
	const location = useLocation();
    const [id, setId] = useState(location.state.id);
	const [title, setTitle] = useState(location.state.title);
	const [note, setNotes] = useState(location.state.note);

	const dispatch = useDispatch();

    const navigate = useNavigate()


    
    const handleEditNote = (e) => {
        e.preventDefault();
        dispatch(updateNote({ id,title, note }));
        navigate('/');
	};

	return (
		<div>
			<h1 className="text-7xl text-center font-extrabold">Edit Notes</h1>
			<form
				onSubmit={handleEditNote}
				className="my-10 border-4 border-gray-600 rounded-lg shadow-2xl hover:shadow-blue-300 duration-500 p-20 w-[80%] mx-auto">
				<Box className="w-[100%] mx-auto space-y-10">
					<TextField
						id="outlined-basic"
						required
						label="Title"
						variant="outlined"
						defaultValue={title}
						className="block w-[90%] mx-auto"
						onChange={(e) => setTitle(e.target.value)}
					/>
					<TextField
						id="outlined-basic"
						label="Note"
						required
						variant="outlined"
						defaultValue={note}
						className="block w-[90%] mx-auto"
						onChange={(e) => setNotes(e.target.value)}
					/>

					<button
						type="submit"
						className="py-3 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-1/4 block mx-auto transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
						Update Note
					</button>
				</Box>
			</form>
		</div>
	);
};

export default EditNotes;
