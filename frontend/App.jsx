import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch,Route, Link} from 'react-router-dom';

import createMarking from './src/components/createMarking';
import schemeDetails from './src/components/schemeDetails';
import editMarking from './src/components/editMarking';
import viewMarking from './src/components/viewMarking';
import admin from './src/components/admin';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';

function App(){
    return(
        <Router>
            <Navbar/>
            <Switch>

                <Route exact path = '/' component={admin}/>
                <Route exact path= '/posts' component={viewMarking}/>
                <Route exact path = '/create' component={createMarking}/>                
                <Route exact path = '/edit/:id' component={editMarking}/>
                <Route exact path = '/post/:id' component={schemeDetails}/>
            </Switch>
            <Footer/>
        </Router>
       
    )        
}

export default App;


