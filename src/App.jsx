
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/routes';

function App() {

	return (
		<div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
