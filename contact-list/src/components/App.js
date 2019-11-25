import React from 'react';
import { Router,Route,Switch} from 'react-router-dom'
import Contacts from '../components/contacts/Contacts';
import Header from './Header';
import AddContact1 from '../components/contacts/AddContact1';
import About from '../components/layout/About';
import Test from '../components/test/Test';

import 'bootstrap/dist/css/bootstrap.min.css';
import history from '../history';



const App = () =>{
    return(
        <div>
            <Router history={history}>
            <Header branding="Contact Manager"/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Contacts}/>
                    <Route exact path="/contact/add" component={AddContact1}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/test" component={Test}/>
                </Switch>
                
            </div>
            </Router>
            
            
        </div>
    );
};

export default App;