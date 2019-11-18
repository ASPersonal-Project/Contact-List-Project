import React,{useState} from 'react';

const Contact = (props) => {
    const [state,setState] = useState({showContactinfo : true});
    const {name,email,phone} = props;

    const onShowClick = (e)=>{
        setState({
            showContactinfo:!state
        }) 

    }
    return (
        <div className="card card-body mb-3">
            <h4>{name} <i onClick={onShowClick} className="fa fa-sort-down"/></h4>
            <ul className="list-group">
                <li className="list-group-item">Email:{email}</li>
                <li className="list-group-item">Phone:{phone}</li>
            </ul>
        </div>
    );
};

export default Contact;