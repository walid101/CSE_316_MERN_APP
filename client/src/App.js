import React 			from 'react';
import Homescreen 		from './components/homescreen/Homescreen';
import Homepage			from './components/Pages/Homepage';
import { useQuery } 	from '@apollo/client';
import * as queries 	from './cache/queries';
import { jsTPS } 		from './utils/jsTPS';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
const App = () => {
	let user = null;
    let transactionStack = new jsTPS();
    const { loading, error, data, refetch } = useQuery(queries.GET_DB_USER);

    if(error) { console.log(error); }
	if(loading) { console.log(loading); }
	if(data) { 
		let { getCurrentUser } = data;
		if(getCurrentUser !== null) { user = getCurrentUser; }
    }
//<Redirect exact from="/" to={ {pathname: "/regions"} } /> ->before <Route to regions
	return(
		<Router>
			<Switch>
				<Redirect exact from="/" to={ {pathname: "/home"} } />
				<Route 
					path="/home" 
					name="home" 
					render={() => 
						<Homepage tps={transactionStack} fetchUser={refetch} user={user} />
					} 
				/>
				<Route 
					path="/maps" 
					name="maps" 
					render={() => 
						<Homescreen tps={transactionStack} fetchUser={refetch} user={user} />
					} 
				/>
				<Route/>
			</Switch>
		</Router>
	);
}

export default App;