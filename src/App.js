import React,{useEffect,useState} from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import HomeScreen from './screen/homeScreen'
import ProfileScreen from './screen/ProfileScreen'
import Login from './screen/LoginScreen'
import './App.css';

import {auth} from './firebase'
import {useDispatch, useSelector} from 'react-redux'
import {login,logout,selectUser} from './features/userSlice'
function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(() => {
    const unsubcribe=auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        console.log(userAuth);
        // handle state if you login in web.
        // demo: start -> show form login BUT quicky diappear and show home.js
        dispatch(
          login({
            uid:userAuth.uid,
            email:userAuth.email,
          })
          );
      }else{
       dispatch(logout);
      }
    })
    return unsubcribe;
    
  }, [dispatch])
  return (
    
    <div className="App">
      
    <Router>
      {user?
        (<Switch> 
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>  
      </Switch>):(<Login />)
      }
      
    </Router>
    </div>
  );
}

export default App;
