import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddNotes = () => {
	const [notes, setNotes] = useState('');
	const [title, setTitle] = useState('');


	
	return (
		<div>
			<h1 className="text-7xl text-center font-extrabold">Add Notes</h1>

			<form action="" className="my-10 border-4 border-gray-600 rounded-lg shadow-2xl hover:shadow-blue-300 duration-500 p-20 w-[90%] mx-auto">
				<Box className="w-[50%] mx-auto space-y-10">
					<TextField
						id="outlined-basic"
						label="Title"
						variant="outlined"
						className="block w-[90%] mx-auto"
						onChange={(e) => setNotes(e.target.value)}
					/>
					<TextField
						id="outlined-basic"
						label="Note"
						variant="outlined"
						className="block w-[90%] mx-auto"
						onChange={(e) => setTitle(e.target.value)}
					/>
				</Box>
			</form>
		</div>
	);
};

export default AddNotes;
