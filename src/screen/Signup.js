import React,{useState, useRef} from 'react'
import {auth} from '../firebase'
import './Signup.css'
function Signup() {
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const [account, setAccount] = useState({
        email:'qwe@gmail.com',
        pass:'123qwe'
    })
    const updateInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setAccount({...account,[name]:value});

    }
    // lấy account ở form -> để login.
    const SignIn=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value
        )
        .then((auth)=>{
            console.log(auth);
        })
        .catch((error)=>{
            alert(error.code);
        });
        
    }
    // signup accout ở firebase.
    const register=(e)=>{
        e.preventDefault();
        console.log(passRef.current.value);
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value
        )
        .then((auth)=>{
            console.log(auth);
        })
        .catch((error)=>{
            // regularly error is initialize pass or user illegal
            alert(error.code);
        });
    }
    
    return (
        <div className='signup'>
            <form>
                <h1> Sign In</h1>
                <br></br>
                <input ref={emailRef} name='email' type='text' placeholder='Email or phone number' value={account.email} onChange={updateInput}/>
                <input ref={passRef} type='text' name='pass' placeholder='Password' value={account.pass} onChange={updateInput}/>
                <button id='btn_sign' onClick={SignIn} type='submit'> Sign In</button><br></br>
                <h5>
                    <span style={{color:'gray'}}> New to Netflix? </span>
                    <span onClick={register} className='login_link'>Sign up now.</span>
                </h5>
            </form>
            
        </div>
    )
}

export default Signup
