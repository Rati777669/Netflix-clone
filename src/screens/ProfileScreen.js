import React from 'react'
import "./ProfileScreen.css"
import {selectUser} from "../features/userSlice";
import {useSelector} from "react-redux";
import Nav from "../Nav"
import {auth} from '../Firebase'
import './Loginscreen.css'
import './SignUpScreen.css';
function ProfileScreen() {
     const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
     <Nav/>
     <div className='profileScreen_body'>
          <h1>Edit Profile</h1>
          <div className="profileScreen_info">
               <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
               <div className="profileScreen_details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen_plans">
                         <h3>Plans(Current Plan:) </h3>
                         <h4 className='signupScreen-gray'> Renewel date 04/03/2021</h4>
                    <div className='plans'>
                         <p  className ='signupScreen-gray'>Netflix Standard<br/>1080p</p>
                         <div className ='subscribe-button'>Subscribe</div>

                    </div>
                    <div className='plans'>
                         <p  className='signupScreen-gray'>Netflix Basic<br/>480p</p>
                         <div className ='subscribe-button'>Subscribe</div>
                    </div>
                    <div className='plans'>
                         <p className='signupScreen-gray'>Netflix Premium<br/>HD</p>
                         <div className ='subscribe-button'>Subscribe</div>
                    </div>
                         <button onClick ={() => auth.signOut() }  className='profileScreen_signOut'>Sign Out</button>
                    </div>
               </div>
          </div>
     </div>
      
    </div>
  )
}

export default ProfileScreen