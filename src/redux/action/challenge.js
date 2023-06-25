import { server } from "../store";
import axios from "axios";

export const  getAllChallenge=(price)=> async dispatch=>{
    try {
        dispatch({type:'allChallengeRequest'})
        // const {data}= await axios.get(`${server}/course?keyword=${keyword}&category=${category}`,);
        const {data}= await axios.post(`${server}/getallchallenge`,{price},
        {
            headers:{
                "Content-Type":'application/json'
            },
            withCredentials:true, 
        }
        );
        console.log(data);
        dispatch({type:'allChallengeSuccess',payload:data})
    } catch (error) {
        dispatch({type:'allChallengeFail',payload:error.response.data.message,});
        
    }
}
export const  createChallenge=(price)=> async dispatch=>{
    try {
        dispatch({type:'createChallengeRequest'})
        const {data}= await axios.post(`${server}/createchallenge`,{price},
        {
            headers:{
                "Content-Type":'application/json'
            },
            withCredentials:true, 
        }
        );
        dispatch({type:'createChallengeSuccess',payload:data})
    } catch (error) {
        console.log(error);
        dispatch({type:'createChallengeFail',payload:error.response.data.message,});
    }
}
//accept challenge
export const  acceptChallenge=(id)=> async dispatch=>{
    try {
        dispatch({type:'acceptChallengeRequest'})
        const {data}= await axios.post(`${server}/acceptchallenge`,{id},
        {
            headers:{
                "Content-Type":'application/json'
            },
            withCredentials:true, 
        }
        );
        dispatch({type:'acceptChallengeSuccess',payload:data})
    } catch (error) {
        console.log(error);
        dispatch({type:'acceptChallengeFail',payload:error.response.data.message,});
    }
}