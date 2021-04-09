import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import useAuthentication from '../../utils/useAuthentication';
import { auth } from '../../utils/user';
import Header from "../Header";
import Footer from "../Footer";
import Home from '../Home';
import Video from '../Video';
import Contacts from '../Contacts';
import SignUp from '../SignUp';
import LogIn from '../LogIn';
import Error from '../Error';

function App() {
	const [ user ] = useAuthentication();

	return (
		<Router>
			<Header user={user} />
			<Switch>
				<Route path='/' exact render={() => (<Home user={user} />)} />
				<Route path='/video/:id' component={Video} />
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
