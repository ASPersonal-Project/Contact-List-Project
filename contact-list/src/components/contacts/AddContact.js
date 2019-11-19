import React,{useState} from 'react';

const AddContact = () => {
    const [state,setState] = useState( {name:'',email:'',phone:''});
    const {name,email,phone} = state;

    const onNameChange = e => setState({
        ...state,
        name:e.target.value});
    const onEmailChange = e => setState({
        ...state,
        email:e.target.value});
    const onPhoneChange = e => setState({
        ...state,
        phone:e.target.value});
    
   const onSubmit = e => {
        e.preventDefault();
        console.log(state);
    }
    
    return(
        
        <div className="card mb-3">
            <div className="card-header">Add Contact</div>
                <div className="card-body">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control"  placeholder="Enter Name... " 
                        name="name"
                        value={name}
                        onChange={onNameChange}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input type="text" className="form-control"  placeholder="Enter Email... " 
                        name="email"
                        value={email}
                        onChange={onEmailChange}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Phone</label>
                        <input type="text" className="form-control"  placeholder="Enter Phone... "  
                        name = "phone"
                        value={phone}
                        onChange={onPhoneChange}/>
                       
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
        </div>
    )
}



export default AddContact;