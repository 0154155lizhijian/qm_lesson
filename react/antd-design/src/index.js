import React from 'react';
import ReactDOM from 'react-dom';
import Beer from './Beer';
import Single from './Single';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'


ReactDOM.render(<Router>
    <div>
        <Route exact path='/' component={Beer}></Route>
        <Route path='/search/:searchTerm' component={Beer}></Route>
        <Route path='/beer/:beerId/:beerSlug' component={Single}></Route>
    </div>
</Router>, document.getElementById('root'));


