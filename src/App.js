import React, { useEffect } from 'react'
import Homescreen from './screens/Homescreen';
import Loginscreen from './screens/Loginscreen';
import {auth} from './Firebase';
import {login,logout,selectUser} from "./features/userSlice"
import ProfileScreen from './screens/ProfileScreen';
import {useDispatch, useSelector} from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
function App() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        // Logged In
        console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email: userAuth.email,
        })
        );
      }
      else
      {
          // Logged Out
          dispatch(logout());
      }

    });
    return unsubscribe;
  },[dispatch]);
  return (
   
    <div className='app'>
       <Router>
        {!user ? ( <Loginscreen />):
    (<Routes>
      <Route path ='/profile' element=
       { <ProfileScreen/>}>
      </Route>
    <Route exact path="/Netflix-clone" element={<Homescreen/>}>
    </Route>
    </Routes>)}
      </Router>
    </div>
  )
}

export default App
