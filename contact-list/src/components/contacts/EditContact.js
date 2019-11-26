import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux'
import { editData,getData} from '../action';
import {useParams} from 'react-router-dom';

import TextInputGroup from '../layout/TextInputGroup';


const EditContact = ({editData,getData,contactData}) => {
    const [state,setState] = useState( {name:null,email:'',phone:''});
    
    const {name,email,phone} = state;

    const {id} = useParams();

 useEffect(() => {
    getData(id);
}, [])

if(contactData && state.name === null){
    // console.log(contactData);
    // console.log(contactData.name);
    setState({
       name:contactData.name,
       email:contactData.email,
       phone:contactData.phone

    })
}

    const onChange = e => setState({
        ...state,
        [e.target.name]:e.target.value});
    
   const onSubmit = (e) => {
    editData(id,state);   
    }
    

    
    
    return(
        
        <div className="card mb-3">
            <div className="card-header">Edit Contact</div>
                <div className="card-body">
                    <TextInputGroup
                        label ="Name"
                        name="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={onChange}
                    />
                   <TextInputGroup
                        label ="Email"
                        type = "email"
                        name="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={onChange}
                    />
                    <TextInputGroup
                        label ="Phone"
                        name="phone"
                        placeholder="Enter Phone"
                        value={phone}
                        onChange={onChange}
                    />
                    <button type="submit" onClick={onSubmit} className="btn btn-primary btn-block">Add Contact</button>
                </div>
        </div>
    )
    
}
 const mapStateToProps = (state, ownProps) => {
    return {
        contactData : state.contacts[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps, {editData,getData})(EditContact);