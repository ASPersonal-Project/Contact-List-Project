import React,{useState,useEffect} from 'react';
import Contact from '../contacts/Contact';

import {fetchData} from '../action';
import {connect} from 'react-redux';







class Contacts1 extends React.Component{

 componentDidMount(){
     this.props.fetchData();
 }
  
    render(){
        console.log(this.props.contactList);
        return(
            <div>
 <h1 className="display-4 mb-2">
        <span className="text-denager">Contact </span>List
      </h1>
      {this.props.contactList.contacts &&
        this.props.contactList.contactList.contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            // deleteClickHandler = {deleteContact.bind(this,contact.id)}
          />
        ))}
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    
    return {
        contactList: (state.contacts)
    };
};

export default connect(mapStateToProps,{fetchData})(Contacts1);
