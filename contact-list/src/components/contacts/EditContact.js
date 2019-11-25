import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux'
import { editData,getData} from '../action';
import {useParams} from 'react-router-dom';
import uuid from 'uuid';

import TextInputGroup from '../layout/TextInputGroup';


const EditContact = ({editData,getData,contactData}) => {

    
    // console.log(match.params);
    const [state,setState] = useState( {name:'',email:'',phone:''});
    
    const {name,email,phone} = state;

    const {id} = useParams();

 useEffect(() => {
    getData(id);
    
}, [])
    

    // console.log(contactData)
    const onChange = e => setState({
        ...state,
        [e.target.name]:e.target.value});
    
   const onSubmit = (e) => {
    //    console.log(id,state);

        editData(id,state);

    //    if(name !== '' && email !== '' && phone !== ''){
    //        addData(state);
    //        console.log(state);
    //    }else {
    //     //    setState({error:{name:"anjana"}})
    //        alert("All fields required");
    //    }
    
        
   
        
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
 const mapStateToProps = (state, ownProps) => {
    // console.log(state.contacts[ownProps.match.params.id])
    console.log(state.contacts[ownProps.match.params.id]);
    return {
        contactData : state.contacts[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps, {editData,getData})(EditContact);