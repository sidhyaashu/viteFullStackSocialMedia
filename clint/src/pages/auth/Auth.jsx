import {useState } from 'react'
import './Auth.scss'
import {useDispatch, useSelector} from 'react-redux'
import { signIn, signUp } from '../../redux/actions/AuthAction.js';

const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state)=>state.authReducers.loading)
  const[isSignup,setIsSignUp]=useState(true);
  const [data,setData]=useState({username:"",firstname:"",lastname:"",password:"",cpassword:""});

  const handleData=(e)=>{
    setData({
      ...data,[e.target.name]:e.target.value
    })
  };

  const[confirmPassword,setConfirmPassword]=useState(true);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(isSignup){
      data.password !== data.cpassword?setConfirmPassword(false):dispatch(signUp(data));
    }else{
      dispatch(signIn(data));
    }
  };

  const refreshData=()=>{
    setConfirmPassword(true);
    // setData({username:"",firstname:"",lastname:"",email:"",password:"",cpassword:""});
    setData({username:"",firstname:"",lastname:"",password:"",cpassword:""});
  }

  return (
    <div className='Auth'>
      <form onSubmit={handleSubmit}>
        <h3>{isSignup?"sign up":"Log In"}</h3>
        <div>
            
            <input onChange={handleData} value={data.username}  type="text" name='username' placeholder='username' />
            {isSignup?<input onChange={handleData}  value={data.firstname} type="text" name="firstname" placeholder='firstname' />:""}
            {isSignup?<input onChange={handleData}  value={data.lastname} type="text" name="lastname" placeholder='lastname' />:""}
            {/* <input onChange={handleData} value={data.email}   type="email" name='email' placeholder='email'/> */}
            <input onChange={handleData} type="password" value={data.password  } name="password" placeholder='password' />
            {isSignup?<input type="password" name='cpassword' value={data.cpassword}  onChange={handleData} placeholder='cpassword' />:""}
            {isSignup?<span style={{display:confirmPassword?"none":"block"}}>*confirm password dose't match</span>:""}
        </div>
        <button disabled={loading} type='submit'>{loading?"Loading....":isSignup?"Sign Up":"Log in"}</button>
        <span className='goToLog'>Go to <b onClick={()=>{setIsSignUp(!isSignup);refreshData()}}>{isSignup?"Log In":"register"}</b></span>
      </form>
    </div>
  )
}

export default Auth
