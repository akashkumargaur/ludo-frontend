import { server } from "../store";
import axios from "axios";

export const login=(phone_number,otp)=>async(dispatch)=>{
    try {
        dispatch({type:'loginRequest'});
        console.log(phone_number,otp)
        const {data} =await axios.post(`${server}/login`,{phone_number,otp},
        {
            headers:{
                "Content-Type":'application/json'
            },
            withCredentials:true, 
        }
        );
        console.log(data)
        dispatch({type:'loginSuccess',payload:data});
    } catch (error) {
        dispatch({type:'loginFail',payload:error.response.data});
    }
}

export const loginCheck=(phone_number)=>async(dispatch)=>{
    try {
        dispatch({type:'loginCheckRequest'});
        const {data} =await axios.post(`${server}/checklogin`,{phone_number},
        {
            headers:{
                "Content-Type":'application/json'
            },
            withCredentials:true, 
        }
        );
        dispatch({type:'loginCheckSuccess',payload:data});
    } catch (error) {
        dispatch({type:'loginCheckFail',payload:error.response.data.message});
    }
}

export const register=(username,phone_number,refer_from,otp)=>async(dispatch)=>{
    try {
        dispatch({type:'registerRequest'});
        console.log(username,phone_number,refer_from,otp)
        const {data} =await axios.post(`${server}/register`,{username,phone_number,refer_from,otp},
        {
            headers:{
                "Content-Type":'application/json'
            },
            withCredentials:true, 
        }
        );
        dispatch({type:'registerSuccess',payload:data});
    } catch (error) {
        dispatch({type:'registerFail',payload:error.response.data.message});
    }
}

export const registerCheck=(phone_number,username,refer_from)=>async(dispatch)=>{
    try {
        dispatch({type:'registerCheckRequest'});
        const {data} =await axios.post(`${server}/checkregister`,{phone_number,username,refer_from},
        {
            headers:{
                "Content-Type":'application/json'
            },
            withCredentials:true, 
        })
        dispatch({type:'registerCheckSuccess',payload:data});
    } catch (error) {
        dispatch({type:'registerCheckFail',payload:error.response.data.message});
    }
}

export const getMyProfile=()=>async(dispatch)=>{
    try {
        dispatch({type:'loadUserRequest'});
        const {data} =await axios.get(`${server}/me`,
        {
            withCredentials:true, 
        }
        );
        console.log(data)
        dispatch({type:'loadUserSuccess',payload:data});
    } catch (error) {
        dispatch({type:'loadUserFail',payload:error.response.data});
    }
}

export const logout=()=>async(dispatch)=>{
    try {
        dispatch({type:'logOutRequest'});
        const {data} =await axios.get(`${server}/logout`,
        {
            withCredentials:true, 
        }
        );
        dispatch({type:'logOutSuccess',payload:data.message});
    } catch (error) {
        dispatch({type:'logOutFail',payload:error.response.data.message});
    }
}

export const buySubcription=()=>async(dispatch)=>{
    try {
        dispatch({type:'buySubcriptionRequest'});
        console.log("data")
        const {data} =await axios.get(`${server}/subcribe`,
        {
            withCredentials:true, 
        }
        );
        console.log(data)
        dispatch({type:'buySubcriptionSuccess',payload:data.subcriptionId});
    } catch (error) {
        dispatch({type:'buySubcriptionFail',payload:error.response.data.message});
    }
}

