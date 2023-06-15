import React from 'react'
import Plans from './PlansProfile'
import {useSelector} from 'react-redux'
import {selectUser} from '../features/userSlice'
import {auth} from '../firebase'
import './ProfileScreen.css'

import Navbar from '../Nav'
function ProfileScreen() {
    const user=useSelector(selectUser);
    const signOut=()=>{
        auth.signOut()
        .then(function(){
            
        })
        .catch((error)=>{
            alert(error.code);
        });
        window.location.reload();
    }
    return (
        <div className='profile'>
            <Navbar />
            <div className='profile_body'>
                <h1>Edit Profile</h1>
                <div className='profile_body_info'>
                    <img 
                        src='https://png.pngtree.com/png-vector/20190511/ourlarge/pngtree-blue-assassin-esports-logo-for-gaming-mascot-png-image_1038929.jpg' 
                        alt='icon' 
                    />
                    <div className='profile_body_info_detail'>
                        {/* ??sao lay duoc hay z */}
                        <h2>{user.email}</h2>
                        <h3>Plans: </h3>
                        <Plans />
                        <div className='proflie_plans'>
                            <button 
                                onClick={signOut}
                                className='btn_logOut'
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;
