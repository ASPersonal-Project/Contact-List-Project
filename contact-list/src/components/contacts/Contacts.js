import React,{useState,useEffect} from 'react';
import Contact from './Contact';
import {fetchData} from '../action';
import {connect} from 'react-redux';

import axios from 'axios';

// const reducer = (state,action) =>{
//     switch (action.type) {
//         case 'DELETE_CONTACT':
//             return {
//                 ...state, contacts:state.contacts.filter(contact => contact.id !== action.payload)
//             }
    
//         default:
//            return state;
//     }
// }


const Contacts = (contactList) =>{
    // const [state,setState] = useState({contacts : []});
    // const deleteContact = (id) => {
    //     const {contacts} = state;
    //    const newContacts = contacts.filter(contact => contact.id !== id);

    //    setState({
    //        contacts : newContacts
    //    });
    // }

    // const fetchResource = async(resource) => {
    //     const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);
        
    //     setState({contacts:response.data});
       
    // };

    useEffect( () =>{
        fetchData();
        
    },[]);
    return(
        
        <div>
            <h1 className="display-4 mb-2"><span className="text-denager">Contact </span>List</h1>
            {contactList.contacts.map(contact => <Contact 
                key={contact.id} 
                name={contact.name} 
                email={contact.email} 
                phone={contact.phone} 
                // deleteClickHandler = {deleteContact.bind(this,contact.id)}
                />)}
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        contactList: Object.values(state.contacts)
    };
};

export default connect(mapStateToProps,{fetchData})(Contacts);

// class Contacts extends React.Component{
//     state = {contacts: [
//         {
//             id:1,
//             name: 'Anjana',
//             email: 'amjama@gmail.com',
//             phone: '222-333-2541'
//         },
//         {
//             id:2,
//             name: 'Anjana',
//             email: 'amjama@gmail.com',
//             phone: '222-333-2541'
//         }
//     ]}
//     render(){
//         const {contacts} = this.state;
//         return(
//             <div>
//                 {contacts.map(contact => <Contact key={contact.id} name={contact.name} email={contact.email} phone={contact.phone}/>)}
//             </div>

//         );
//     }
// }

// const Contacts = () =>{
//     const [state,setState] = useState( contacts:[{}])
//     return(
//         <div>

//         </div>
//     );
// };
