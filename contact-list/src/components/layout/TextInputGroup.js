import React from 'react';
// import PropType from 'props-types';
// import classnames from 'classnames';

const TextInputGroup = ({
    label,
    name,
    placeholder,
    value,
    type,
    onChange,
    error
}) =>{
    return(
        <div className="form-group">
            <label >{label}</label>
            <input 
            type={type} 
            className="form-control"
            
            placeholder={placeholder} 
            name={name}
            value={value}
            onChange={onChange}/>
            
                        
        </div>
    );
 
};

// TextInputGroup.protoType = {
//     label :PropType.string.isRequired,
//     name:PropType.string.isRequired,
//     placeholder:PropType.string.isRequired,
//     value:PropType.string.isRequired,
//     type:PropType.string.isRequired,
//     onChange:PropType.func.isRequired
//     // error:PropType.string
// }

// TextInputGroup.defaultProps = {
//     type:'text'
// }

export default TextInputGroup;