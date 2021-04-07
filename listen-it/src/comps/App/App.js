import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "../Header";
import Footer from "../Footer";
import Home from '../Home';
import Error from '../Error';

function App() {
	return (
		<Router>
			<Header></Header>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route component={Error} />
			</Switch> 
			<Footer />         
		</Router>
	);
}

export default App;
