import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import useAuthentication from '../../utils/useAuthentication';
import { auth } from '../../utils/user';
import Header from "../Header";
import Footer from "../Footer";
import Home from '../Home';
import Video from '../Video';
import History from '../History';
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
				<Route path='/video/:id' exact render={() => <Video user={user} />} />
				<Route path='/history' exact render={() => <History user={user} />} />
				<Route path='/contacts' exact component={Contacts} />
				<Route path='/sign-up' exact component={SignUp} />
				<Route path='/log-in' exact component={LogIn} />
				<Route path='/log-out' exact render={() => {
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
