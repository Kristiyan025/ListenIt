import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Fragment } from 'react';
import Header from "../Header";
import Home from '../Home';

function App() {
  return (
    <Fragment>
        <Header></Header>
        <Router>
          <Switch>
            <Route path='/' exact render={Home} />
          </Switch>          
        </Router>
    </Fragment>
  );
}

export default App;
