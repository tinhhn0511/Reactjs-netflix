import React, { useState } from 'react'
import './PlansProfile.css'
function PlansProfile() {
  
    const [subcribe,setSubcribe]=useState({
        premium:true,
        standard:true,
        basic:true
    });
    // nhap subcribe -> unsub
    // sign out -> di toi login
    const selectedPlan=(e)=>{
        const name= e.target.name;
        let value=!subcribe[name];
        setSubcribe({...subcribe,[name]:value});
    }
    return (
        <div className='planScreen'>
            <div className='plans_plan'>
                <div className='plan_info'>
                    <h5>Premium</h5>
                    <h6>4K + HDR</h6>
                </div>
                <button name='premium' onClick={selectedPlan} className={(subcribe.premium)? 'subcribe':'unsubcribe'}>{(subcribe.premium)?'Subcribe':'Unsubcribe'}</button>
            </div>
            <div className='plans_plan'>
                <div className='plan_info'>
                    <h5>Standard</h5>
                    <h6>1080p</h6>
                </div>
                <button name='standard' onClick={selectedPlan} className={(subcribe.standard)? 'subcribe':'unsubcribe'}>{(subcribe.standard)?'Subcribe':'Unsubcribe'}</button>
            </div>
            <div className='plans_plan'>
                <div className='plan_info'>
                    <h5>Basic</h5>
                    <h6>720p</h6>
                </div>
                <button name='basic' onClick={selectedPlan} className={(subcribe.basic)? 'subcribe':'unsubcribe'}>{(subcribe.basic)?'Subcribe':'Unsubcribe'}</button>
            </div>
        </div>
    )
}

export default PlansProfile
