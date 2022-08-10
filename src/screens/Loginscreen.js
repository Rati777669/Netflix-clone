import React ,{useState}from 'react'
import './Loginscreen.css'
import SignUpScreen from './SignUpScreen';
import Loginscreen_section2 from './Loginscreen_section2'
import './Loginscreen_section2.css';
import Footer from './Footer';
import Faq from './Faq';
function Loginscreen() {
  const [signIn,setSignIn]= useState(false);
  return (
    <div className="loginscreen"> 
    <div className="loginscreen-background">
     <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="" className="loginscreen-logo" />
     <button onClick={() =>setSignIn(true)} className="loginscreen-button">Sign In</button>
    <div className="loginscreen-gradient"></div>
    <div className="signup">
    {
      signIn>0 && <><SignUpScreen/></>
    }</div>
    <div className="loginscreen-body">
      {
        signIn ==0 &&
      
        <div>
          <h1>Unlimited files, TV programmes and more.</h1>
          <h2>Watch anywhere, Cancel at any time.</h2>
          <h3>Ready to watch? Enter you email to create or restart your membership.</h3>
          <div className="loginscreen-input">
            <form>
              <input placeholder="Email Address" type="email" />
              <button onClick={() => setSignIn(true)}className='loginscreen-getstarted'> GET STARTED</button>
            </form>
          </div>
         
        </div>
        
      }
      </div>
    </div>
    <div className='section-2'>
    {
        signIn==0 &&
          
          <>
          <Loginscreen_section2 mainTitle="Enjoy on your TV" description="Watch on smart TVs, Playstation, Xbox,Chromecast,Apple TV, Blu-ray players and more. " source="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" vidsource="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" first="true"/>
          
          <Loginscreen_section2 mainTitle="Download your shows to  watch offline" description="Save your favourites easily and always have something to watch. " source="	https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" odd="true"/>
          <Loginscreen_section2 mainTitle="Watch everywhere" description="Stream unlimited movies and TV shows on your phone,tablet,laptop and TV. " source="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" vidsource="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" thirdd="true"/>
          <Loginscreen_section2 mainTitle="Create profiles for children" description="Send children on adventures with their favourite characters in a space made just for them-free with your membership. " source="	https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420" odd="true"/>
          <div className="headerline">
     </div>
     <Faq/>
          <div className='loginscreen-bodyfooter'>
          <h3>Ready to watch? Enter you email to create or restart your membership.</h3>
          <div className="loginscreen-input">
            <form>
              <input placeholder="Email Address" type="email" />
              <button onClick={() => setSignIn(true)}className='loginscreen-getstarted'> GET STARTED {'>'}</button>
            </form>
          </div></div>
          <div className="headerline">
     </div>
   
        </>
        }
         <Footer/>
    </div>
    </div>
    
  );
}

export default Loginscreen;