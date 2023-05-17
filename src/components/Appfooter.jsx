import React from 'react'
import logo from '../assets/img/VEG-logo.png'

const Appfooter = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div className='bg-transparent'>
          <img src={logo} alt="footer-logo" className='bg-transparent w-20'/>
          <p className='bg-transparent'>VEG Ltd.<br/>Providing your favourite recipes since yesterday.</p>
        </div>
        <div className='bg-transparent'>
          <span className="footer-title bg-transparent">Company</span> 
          <a className="link link-hover bg-transparent">About us</a> 
          <a className="link link-hover bg-transparent">Contact</a> 
          <a className="link link-hover bg-transparent">Jobs</a> 
          <a className="link link-hover bg-transparent">Press kit</a>
        </div> 
        <div className='bg-transparent'>
          <span className="footer-title bg-transparent">Legal</span> 
          <a className="link link-hover bg-transparent">Terms of use</a> 
          <a className="link link-hover bg-transparent">Privacy policy</a> 
          <a className="link link-hover bg-transparent">Cookie policy</a>
        </div>
      </footer>
    </>
)
}

export default Appfooter
