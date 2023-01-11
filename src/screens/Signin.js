import React,{useRef,useState} from 'react';
import {auth} from '../Firebase';
import './SignUpScreen.css';
import SignUpScreen from './SignUpScreen';
function Signin() {
  const [Signin,setSignin]= useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    
    auth.createUserWithEmailAndPassword(emailRef.current.value,passwordRef.current.value).then((authUser) => {console.log(authUser)}).catch((error) => {alert(error.message);});
  };
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
    .then((authUser) => {
      console.log(authUser);
    }).catch((error) => alert(error.message));
  };
 
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef}  placeholder ="Email" type="email"/>
        <input ref={passwordRef} placeholder ="Password" type="password"/>
        <button type="submit" onClick={signIn}>Sign In</button>
       
        
      </form>
      <div className='remember'>
      <span className='signupScreen-gray '><input type="checkbox"/>Remember me</span>
      <span className="signupScreen-gray">Need Help?</span>
      </div>
      <h4  className='belowremember'>
        <span className='signupScreen-gray '>Already a member? </span><span className='signupScreen-link' onClick={()=> setSignin(true)} >Sign In now. </span></h4>
        <div className="signup">
    {
      Signin>0 && <><SignUpScreen/></>
    }</div>
        <span className="signupScreen-gray ">This page is protected by Google reCAPTCHA to ensure you're not a bot.</span><a> Learn more.</a>
    </div>
  )
}

export default Signin