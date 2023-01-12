import { createBrowserRouter } from 'react-router-dom';
import AddNotes from '../features/AddNotes';
import EditNotes from '../features/EditNotes';
import NotesView from '../features/NotesView';
import Main from './../Layouts/Main';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <NotesView />,
			},
			{
				path: '/add-notes',
				element: <AddNotes />,
			},
			{
				path: '/edit-notes',
				element: <EditNotes />,
			},
		],
	},
]);
