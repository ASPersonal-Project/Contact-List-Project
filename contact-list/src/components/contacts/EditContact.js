import React,{useState} from 'react';
import {connect} from 'react-redux'
import {addData} from '../action';
import uuid from 'uuid';

import TextInputGroup from '../layout/TextInputGroup';


const AddContact = ({addData}) => {
    const [state,setState] = useState( {name:'',email:'',phone:''});
    
    const {name,email,phone} = state;

    const onChange = e => setState({
        ...state,
        [e.target.name]:e.target.value});
    
   const onSubmit = (e) => {
       if(name !== '' && email !== '' && phone !== ''){
           addData(state);
           console.log(state);
       }else {
        //    setState({error:{name:"anjana"}})
           alert("All fields required");
       }
    
        
   
        
    }

    
    
    return(
        
        <div className="card mb-3">
            <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <TextInputGroup
                        label ="Name"
                        name="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={onChange}
                        //  error = {errors.name}
                    />
                   <TextInputGroup
                        label ="Email"
                        type = "email"
                        name="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={onChange}
                        // error = {errors.email}
                    />
                    <TextInputGroup
                        label ="Phone"
                        name="phone"
                        placeholder="Enter Phone"
                        value={phone}
                        onChange={onChange}
                        // error = {errors.phone}
                    />
                    <button type="submit" onClick={onSubmit} className="btn btn-primary btn-block">Add Contact</button>
                </div>
        </div>
    )
}



export default connect(null, {addData})(AddContact);