import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Contact from './pages/Contact/Cotntact';
import Startups from './pages/Startups/Startups';
import Startup1 from './pages/StartupPages/Startup1';
import Startup2 from './pages/StartupPages/Startup2';
import Startup3 from './pages/StartupPages/Startup3';
import Startup4 from './pages/StartupPages/Startup4';
import Startup5 from './pages/StartupPages/Startup5';
import Startup6 from './pages/StartupPages/Startup6';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/events' element={<Events />} />
			<Route path='/contacts' element={<Contact />} />
			<Route path='/startups' element={<Startups />} />
			<Route path='/startup1' element={<Startup1 />} />
			<Route path='/startup2' element={<Startup2 />} />
			<Route path='/startup3' element={<Startup3 />} />
			<Route path='/startup4' element={<Startup4 />} />
			<Route path='/startup5' element={<Startup5 />} />
			<Route path='/startup6' element={<Startup6 />} />
		</Routes>
	);
}

export default App;
