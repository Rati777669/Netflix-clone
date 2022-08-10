import React from 'react'
import './Faq.css';
import './faqs.js'
import {Helmet} from "react-helmet";
function Faq() {
  return (
    <>
    
    <Helmet>  <script src="./faqs.js" type="text/babel" /></Helmet><div className='faq'>
     
      <div>
      <h1 className='heading'>Frequently Asked Questions</h1>
        <button className="accordion"> What is Netflix?</button>
      <div className="panel"><p>
        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

        You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
      </p> </div>

      <button className="accordion"> How much does Netflix cost?</button><div className="panel">
        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
      </div><button className="accordion">    Where can I watch?</button>
    <div className="panel">
    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
    </div>
   
    <button className="accordion"> How do I cancel</button>
    <div className="panel">
    Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
    </div>
   
    <button className="accordion"> What can I watch on Netflix?</button>
    <div className="panel">
    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
    </div>
    
    <button className="accordion">Is Netflix good for kids?</button>
    <div className="panel">
    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
    </div>
    </div>
    </div>
   </>
  )
}

export default Faq