import React from 'react';
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router-dom';

import Ladies from './scenes/Ladies/Ladies';
import Details from './scenes/Details/Details';
import './Home.css';
class Home extends React.Component{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        
        return(
            <div>
                <Header/>
                <div className = "home-wrapper">
                <Switch>
                    <Route path="/"          exact   render={() => <Ladies  />} />
                    <Route path="/ladies"       render={() => <Ladies  />} />
                    <Route path="/details"      render={() => <Details />} />
                </Switch>
                </div>
            </div>
        )
    }
}
export default Home;