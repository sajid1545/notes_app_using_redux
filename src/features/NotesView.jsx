import React from 'react';
import { useSelector } from 'react-redux';

const NotesView = () => {
	const notes = useSelector((state) => state.notesReducer.notes);

	return (
		<div>
			<h1 className="text-7xl text-center font-extrabold">All Notes</h1>

			{notes.map((n) => {
				const { id, title, note } = n;
				return (
					<div
						key={id}
						className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 my-10 shadow-xl w-2/4 mx-auto p-5">
						<div className="block rounded-xl bg-white p-6 sm:p-8">
							<div className="flex flex-col justify-center items-center sm:pr-8">
								<h3 className="text-xl font-bold text-gray-900">{title}</h3>

								<p className="mt-2 text-md text-gray-800">{note}</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default NotesView;
