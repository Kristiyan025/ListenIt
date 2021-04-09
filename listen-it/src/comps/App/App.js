import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { auth } from '../../user';
import Header from "../Header";
import Footer from "../Footer";
import Home from '../Home';
import Contacts from '../Contacts';
import SignUp from '../SignUp';
import LogIn from '../LogIn';
import Error from '../Error';
import { useState, useEffect } from 'react';

function App() {
	const [ user, setUser ] = useState('');

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				setUser(() => authUser.email);
			} else {
				setUser(() => '');
			}
		});
	}, [user]);

	return (
		<Router>
			<Header user={user} />
			<Switch>
				<Route path='/' exact render={() => (<Home user={user} />)} />
				<Route path='/gdghdhfghf' render={() => (true ? (<Home user={user} />) : (<Home user={user} />))}/>
				<Route path='/contacts' component={Contacts} />
				<Route path='/sign-up' component={SignUp} />
				<Route path='/log-in' component={LogIn} />
				<Route path='/log-out' render={() => {
					auth.signOut();
					return <Redirect to="/"/>;
				}} />
				<Route component={Error} />
			</Switch> 
			<Footer />         
		</Router>
	);
}

export default App;
