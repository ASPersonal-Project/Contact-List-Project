import React,{useState} from 'react';

const Contact = (props) => {
    const [state,setState] = useState({showContactinfo : true});
    const {name,email,phone} = props;
    console.log(props)
    const onShowClick = (e)=>{
        setState({
            showContactinfo:!state.showContactinfo
        }) 

    }
    const onDeleteClick = () => {
        // props.deleteClickHandler()
    }
    return (
        <div className="card card-body mb-3">
            <h4>{name}{' '}
             <i onClick={onShowClick} className="fa fa-sort-down" style={{cursor:'pointer'}}/>
             <i onClick={onDeleteClick} className="fa fa-times" style={{cursor:'pointer',float: 'right', color: 'red'}}/>
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

export default Contact;