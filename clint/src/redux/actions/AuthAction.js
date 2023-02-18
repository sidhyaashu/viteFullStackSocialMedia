import * as AuthApi from '../api/AuthRequest.js'

export const signUp=(formData)=>async(dispatch)=>{
    dispatch({type:"AUTH_START"});
    try {
        const {data} = await AuthApi.signUp(formData)
        dispatch({type:"AUTH_SUCCESS",data:data});
    } catch (error) {
        console.log(error)
        dispatch({type:"AUTH_FAIL"});
    }
}


export const signIn=(formData)=>async(dispatch)=>{
    dispatch({type:"AUTH_START"});
    try {
        const {data} = await AuthApi.signIn(formData)
    dispatch({type:"AUTH_SUCCESS",data:data});
    } catch (error) {
        console.log(error)
        dispatch({type:"AUTH_FAIL"});
    }
}