import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteNote } from './notesSlice';

const NotesView = () => {
	const notes = useSelector((state) => state.notesReducer.notes);
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteNote(id));
	};

	return (
		<div>
			<h1 className="text-7xl text-center font-extrabold">All Notes</h1>

			{notes &&
				notes.map((n) => {
					const { id, title, note } = n;
					return (
						<div
							key={id}
							className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 my-10 shadow-xl w-2/4 mx-auto p-5">
							<div className="block rounded-xl bg-white p-6 sm:p-8">
								<div className="flex flex-col justify-center items-center sm:pr-8">
									<h3 className="text-4xl font-extrabold text-gray-900">{title}</h3>

									<p className="mt-4 text-lg text-gray-800">{note}</p>
								</div>
								<div className="mt-5 flex justify-end gap-5">
									<button
										onClick={() => handleDelete(id)}
										type="button"
										className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 h-12 rounded-lg ">
										<FaTrash />
									</button>
									<Link to={'/edit-notes'} state={{id,title,note}} >
										<button
											type="button"
											className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 h-12 rounded-lg ">
											<FiEdit />
										</button>
									</Link>
								</div>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default NotesView;
