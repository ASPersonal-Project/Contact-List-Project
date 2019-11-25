import React,{useState} from 'react';
import { deleteData } from "../action";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';



const Contact = (props) => {
    const [state,setState] = useState({showContactinfo : true});
    const {name,email,phone,id} = props;
    // console.log(props)
    const onShowClick = (e)=>{
        setState({
            showContactinfo:!state.showContactinfo
        }) 

    }
    
    return (
        <div className="card card-body mb-3">
            
            <h4>{name}{' '}
             <i onClick={onShowClick} className="fa fa-sort-down" style={{cursor:'pointer'}}/>
             <i onClick={() => props.deleteData(id)} className="fa fa-times" style={{cursor:'pointer',float: 'right', color: 'red'}}/>
             <Link to={`contact/edit/${id}`}><i className="fa fa-edit" style={{cursor:'pointer',float: 'right', color: 'black',marginRight:'1rem'}}/></Link>
            </h4>
            {state.showContactinfo? (
                <ul className="list-group">
                
                <li className="list-group-item">Email:{email}</li>
                <li className="list-group-item">Phone:{phone}</li>
            </ul>
            ) : null}
            
        </div>
    );
};

// export default Contact;
export default connect(null, { deleteData })(Contact);
