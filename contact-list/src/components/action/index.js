import { FETCH_DATA,DELETE_CONTACT,ADD_CONTACT } from "./type";
import axios from "axios";
import history from '../../history';

export const fetchData = () => async dispatch => {
  const response = await axios.get("http://localhost:3001/contacts");
  console.log(response.data);
  dispatch({ type: FETCH_DATA, payload: response.data });
};

export const deleteData = (id) => async dispatch => {
  // console.log(id);
  await axios.delete(`http://localhost:3001/contacts/${id}`)
  dispatch({type:DELETE_CONTACT,payload:id})
 
}

export const addData = (value) => async dispatch =>{
  console.log(value);
  const response = await axios.post('http://localhost:3001/contacts', value)
console.log(response.data);
  dispatch({type:ADD_CONTACT,payload:response.data});
   history.push('/');
}

// export const deleteData = () =>{
//     return{
//         type:'DELETE_CONTACT',

//     }
// }
