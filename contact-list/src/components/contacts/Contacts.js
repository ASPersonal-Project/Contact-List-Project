import React,{useState} from 'react';
import Contact from './Contact';

const Contacts = () =>{
    const [state,setState] = useState({contacts : [
                {
                    id:1,
                    name: 'Anjana',
                    email: 'amjama@gmail.com',
                    phone: '222-333-2541'
                },
                {
                    id:2,
                    name: 'Anjana',
                    email: 'amjama@gmail.com',
                    phone: '222-333-2541'
                }
            ]});
    const deleteContact = (id) => {
        const {contacts} = state;
       const newContacts = contacts.filter(contact => contact.id !== id);

       setState({
           contacts : newContacts
       });
    }
    return(
        
        <div>
            <h1 className="display-4 mb-2"><span className="text-denager">Contact </span>List</h1>
            {state.contacts.map(contact => <Contact 
                key={contact.id} 
                name={contact.name} 
                email={contact.email} 
                phone={contact.phone} 
                deleteClickHandler = {deleteContact.bind(this,contact.id)}
                />)}
        </div>
    );
};

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

export default Contacts;