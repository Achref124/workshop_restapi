import { EDIT_PASSWORD, FAIL_USER, LOAD_USER, LOGIN, REGISTER } from "../ActionType/ActionType"
import axios from 'axios';

export const register=(newUser)=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        let result= await axios.post("http://localhost:8000/api/user/register",newUser)
       
        dispatch({type:REGISTER,payload:result.data})
    } catch (error) {
        
        dispatch({type:FAIL_USER,payload:error.response})
    }
}

export const login=(user)=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        let result= await axios.post("http://localhost:8000/api/user/login",user)
        dispatch({type:LOGIN,payload:result.data})
    } catch (error) {
        dispatch({type:FAIL_USER,payload:error.error})
    }
}

export const changePassword=(_id,password)=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        let result= await axios.put(`http://localhost:8000/api/user/editpassword/${_id}`,password)
        dispatch({type:EDIT_PASSWORD,payload:result.data})
    } catch (error) {

        dispatch({type:FAIL_USER,payload:error.error})
    }
}

