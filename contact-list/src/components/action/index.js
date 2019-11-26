import { FETCH_DATA,DELETE_CONTACT,ADD_CONTACT,GET_DATA,EDIT_DATA } from "./type";
import axios from "axios";
import history from '../../history';

export const fetchData = () => async dispatch => {
  const response = await axios.get("http://localhost:3001/contacts");
  dispatch({ type: FETCH_DATA, payload: response.data });
};

export const deleteData = (id) => async dispatch => {
  await axios.delete(`http://localhost:3001/contacts/${id}`)
  dispatch({type:DELETE_CONTACT,payload:id})
 
}

export const addData = (value) => async dispatch =>{
  const response = await axios.post('http://localhost:3001/contacts', value)
  dispatch({type:ADD_CONTACT,payload:response.data});
   history.push('/');
}

export const getData = (id) => async dispatch => {
  const response = await axios.get(`http://localhost:3001/contacts/${id}`);
  // console.log(response.data)
  dispatch({type:GET_DATA,payload:response.data})
}

export const editData = (id,value) => async dispatch =>{
  // console.log(id)
  const response = await axios.patch(`http://localhost:3001/contacts/${id}`,value);
  console.log(response.data);
  dispatch({type:EDIT_DATA,payload:response.data})
}