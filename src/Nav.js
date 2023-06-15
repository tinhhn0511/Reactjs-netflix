import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router';
import './Nav.css'
function Nav() {
    const [showHead,setShowHead]=useState(true);
    // active is same Stack. go back pages prev but not use Link or button go back.
    const history=useHistory();

    const tramsititorNavbar=()=>{
        if(window.scrollY>400){
            setShowHead(false);
        }else{
            setShowHead(true);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',tramsititorNavbar);
        return () => window.removeEventListener('scroll',tramsititorNavbar)
    }, [])
    // {`nav  ${showHead && 'nav_black' }`}
    return (
        <>
        {(showHead)?
            <div className='nav nav_black'>
                <div className='nav_content'>

                </div>
                <img 
                    onClick={()=>{history.push('/')}}
                    className='nav_logo' 
                    src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
                    alt='netflix' 
                />

                <img 
                    onClick={()=>{history.push('/profile')}}
                    className='nav_avatar' 
                    src='https://png.pngtree.com/png-vector/20190511/ourlarge/pngtree-blue-assassin-esports-logo-for-gaming-mascot-png-image_1038929.jpg' 
                    alt='icon' 
                />
            </div>:<></>}
        </>
    )
}

export default Nav
 