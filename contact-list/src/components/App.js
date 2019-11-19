import React from 'react';
import Contacts from '../components/contacts/Contacts';
import Header from './Header';
import AddContact from '../components/contacts/AddContact';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () =>{
    return(
        <div>
            <Header branding="Contact Manager"/>
            <div className="container">
                <AddContact/>
               <Contacts/>
            </div>
            
            
        </div>
    );
};

export default App;