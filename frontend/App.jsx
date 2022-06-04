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

import Nav from './src/components/Nav'
import PanelMembers from './src/components/PanelMembers'
import RegisterPanelMember from './src/components/RegisterPanelMember'
import EditPanelMember from './src/components/EditPanelMember'
import ProfilePanelMember from './src/components/ProfilePanelMember'
import './src/components/panelMember.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ContextProvider from './src/components/context/ContextProvider'
//import Home from '/src/components/Home'
       


function App(){
    return(
        <ContextProvider>
        <Router>        
        <Navbar/>
            <Switch>
                {/*<Route exact path='/' component={Home}/>*/}
                <Route exact path='/paneladmin' component={PanelMembers}/>
                <Route exact path='/registerpm' component={RegisterPanelMember}/>
                <Route exact path='/editpm/:id' component={EditPanelMember}/>
                <Route exact path='/profile/:id' component={ProfilePanelMember}/>

                <Route exact path = '/' component={admin}/>
                <Route exact path= '/posts' component={viewMarking}/>
                <Route exact path = '/create' component={createMarking}/>                
                <Route exact path = '/edit/:id' component={editMarking}/>
                <Route exact path = '/post/:id' component={schemeDetails}/>
            </Switch>    
            <Footer/>    
        </Router>
        </ContextProvider>

)
}

export default App;
