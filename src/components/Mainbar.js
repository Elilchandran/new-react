import React from 'react'
import Groupimg from './Groupimg.png'

function Mainbar() {
  return (
    <section className="Mainbar-sec">
      <img src={Groupimg} alt='logo' className='main-img'/>
      <h1 className= "mainbar-header" style={{ fontFamily: 'Poppins', fontSize: '48px', textShadow: '4px 4px 4px #aaa' }}>
        Online Experiences
      </h1>
      <p className="mainbar-text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
    </section>

  )
}

export default Mainbar