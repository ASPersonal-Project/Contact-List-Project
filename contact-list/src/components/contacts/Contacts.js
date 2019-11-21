import React,{useEffect} from 'react';
import Contact from './Contact';
import {fetchData} from '../action';
import {connect} from 'react-redux';


const Contacts = ({contactList,fetchData}) =>{

   

    useEffect( () =>{
        fetchData();
    },[]);

    console.log(contactList)
   

   
   
    return(
        
        <div>
            <h1 className="display-4 mb-2"><span className="text-denager">Contact </span>List</h1>
            {
                contactList.contacts.map(contact => <Contact 
                    key={contact.id} 
                    name={contact.name} 
                    email={contact.email} 
                    phone={contact.phone} 
                    // deleteClickHandler = {deleteContact.bind(this,contact.id)}
                    />)
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    
    return {
        contactList: (state.contacts)
    };
};

export default connect(mapStateToProps,{fetchData})(Contacts);

