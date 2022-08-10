import React from 'react'
import './Loginscreen_section2.css'
function Loginscreen_section2({mainTitle,description,source,odd,vidsource,thirdd,first}) {
  return (
    <div className='section2'>
     <div className="headerline">
     </div>
     <div className={`content1 ${odd && "content-odd" }`}>
          <div className="text-content">
               <h1>{mainTitle}</h1>
               <p>{description}</p>
          </div>
          <div className="media-content">
            <img className ="tv" src={source} alt="TV."></img>
            <video loop  muted autoPlay={true} className={ `${first ? 'first':"third"}  ` }>
        <source
          src={vidsource} type="video/mp4"/>
          Netflix
        </video>
          </div>
     </div>
    </div>
  )
}

export default Loginscreen_section2