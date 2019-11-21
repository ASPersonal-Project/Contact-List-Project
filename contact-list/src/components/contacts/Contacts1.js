import React,{useState,useEffect} from 'react';

import {fetchData} from '../action';
import {connect} from 'react-redux';







class Contacts1 extends React.Component{

 componentDidMount(){
     this.props.fetchData();
 }
  
    render(){
        console.log(this.props.contactList);
        return(
            <div>
                
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    
    return {
        contactList: (state.contacts)
    };
};

export default connect(mapStateToProps,{fetchData})(Contacts1);
