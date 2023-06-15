import React, { useState } from 'react'
import './LoginScreen.css'
import Signup from'./Signup'
function LoginScreen() {
    const [login,setLogin]=useState(true);
    const [email,setEmail]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        setLogin(false);
        setEmail('');
    }
    return (
        <div className='login'>
            <div className='login_background'>
                <img src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='netflix' className='login_logo'/>
                <button className='login_btn' onClick={()=>{
                    setLogin(!login)}}>Sign In</button>

                {/* help appear background-image and fill full screen */}
                <div className='login_grandient'/>
                
            </div>
            <div className='login_body'>
                {login?
                    <>
                        <h1>Unlimited movies, TV shows, and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className='login_input'>
                            <form>
                                <input type='email' placeholder="Email address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                <button className='login_btn_start' onClick={handleSubmit} > Get started</button>
                            </form>
                        </div>
                    </>:<Signup/>
                }
                
            </div>
        </div>
    )
}

export default LoginScreen
