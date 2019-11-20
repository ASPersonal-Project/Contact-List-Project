import React,{useState} from 'react';

import TextInputGroup from '../layout/TextInputGroup';

const AddContact = () => {
    const [state,setState] = useState( {name:'',email:'',phone:'', errors: {}});
    const {name,email,phone,errors} = state;

    const onChange = e => setState({
        ...state,
        [e.target.name]:e.target.value});
    
   const onSubmit = e => {
        e.preventDefault();
        console.log(state);
    }

    // if(name === ''){
    //     setState({...state, errors:{name: 'Name is Required'}});
    //     return;
    // }
    // if(email === ''){
    //     setState({errors:{name: 'Email is Required'}});
    //     return;
    // }
    // if(phone === ''){
    //     setState({errors:{name: 'Phone is Required'}});
    //     return;
    // }
    
    
    return(
        
        <div className="card mb-3">
            <div className="card-header">Add Contact</div>
                <div className="card-body">
                <form onSubmit={onSubmit}>
                    <TextInputGroup
                        label ="Name"
                        name="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={onChange}
                        error = {errors.name}
                    />
                   <TextInputGroup
                        label ="Email"
                        type = "email"
                        name="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={onChange}
                        error = {errors.email}
                    />
                    <TextInputGroup
                        label ="Phone"
                        name="phone"
                        placeholder="Enter Phone"
                        value={phone}
                        onChange={onChange}
                        error = {errors.phone}
                    />
                    <button type="submit" className="btn btn-primary btn-block">Add Contact</button>
                    </form>
                </div>
        </div>
    )
}



export default AddContact;