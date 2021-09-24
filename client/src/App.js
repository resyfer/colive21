//* React
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

//* Dependencies
import Cookies from 'js-cookie';
import UserContext from './context/UserContext';

//* Pages
import Home from './pages/Home';
import Components from './pages/Components';
import Auth from './pages/Auth';
import Institute from './pages/Institute';
import Profile from './pages/Profile';

//* Components
import Navbar from './components/Navbar';

//* CSS
import './App.scss';

function App() {
	const jwt = Cookies.get('jwt');
	const [user, setUser] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);

	const redirectuser = useRef();
	useEffect(() => {
		const getUser = Cookies.get('user');
		if (getUser) {
			setUser(JSON.parse(getUser));
			setLoggedIn(true);
		}
	}, []);

	useEffect(() => {
		console.log(window.location);
		if (loggedIn && window.location.pathname === '/') {
			redirectuser.current.click();
		}
		// eslint-disable-next-line
	}, [loggedIn]);

	console.log(loggedIn);

	return (
		<div className='App'>
			<UserContext.Provider
				value={{ user, setUser, loggedIn, setLoggedIn, jwt }}>
				<Router>
					{user && <Link ref={redirectuser} to={`/user/${user._id}`} />}
					<Switch>
						<Route exact path='/'>
							<Home title='CoLive-21' />
						</Route>
						<Route exact path='/components'>
							<Navbar />
							<Components title='Components | CoLive-21' />
						</Route>

						<Route exact path='/auth'>
							<Navbar />
							<Auth title='Auth | CoLive-21' />
						</Route>

						<Route path='/institute/:id'>
							<Navbar />
							<Institute />
						</Route>

						<Route path='/user/:id'>
							<Navbar />
							<Profile />
						</Route>
					</Switch>
				</Router>
			</UserContext.Provider>
		</div>
	);
}

export default App;
