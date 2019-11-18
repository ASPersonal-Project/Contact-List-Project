import React from 'react';
import Contacts from './Contacts';
import Header from './Header';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () =>{
    return(
        <div>
            <Header branding="Contact Manager"/>
            <div className="container">
               <Contacts/>
            </div>
            
            
        </div>
    );
};

export default App;