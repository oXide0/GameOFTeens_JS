import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Contact from './pages/Contact/Cotntact';
import Startups from './pages/Startups/Startups';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/events' element={<Events />} />
			<Route path='/contacts' element={<Contact />} />
			<Route path='/startups' element={<Startups />} />
		</Routes>
	);
}

export default App;
