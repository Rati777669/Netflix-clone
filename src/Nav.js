import React,{useEffect,useState} from 'react'
import './Nav.css'
import {useNavigate} from "react-router-dom";

function Nav() {
  const [show,handleShow] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
      window.addEventListener("scroll", () =>{
        if(window.scrollY > 100){
          handleShow(true);
        }else handleShow(false);
      });
    
  },[])
  return (
    
    <div className={`nav ${show && "nav-black"}`}>
      <div className='left'>
        
     <img  onClick= { () => navigate("/")}className='nav-logo' src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt ="Netflix Logo"/>
     <span>Homepage</span>
     <span>Series </span>
     <span>Movies</span>
     <span>New and Popular</span>
     <span>My List</span>
     </div>
     <div className='right'>
     <img  onClick={() => navigate("/profile")}className='nav-avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix-logo"/>
     
    </div></div>
  )
}

export default Nav 