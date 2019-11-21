import {FETCH_DATA} from './type'; 
import axios from 'axios';


export const fetchData = () => async dispatch =>{
    const response = await axios.get('http://jsonplaceholder.typicode.com/users');
    dispatch({type:FETCH_DATA,payload:response.data});
};

// export const deleteData = () =>{
//     return{
//         type:'DELETE_CONTACT',
        
//     }
// }

