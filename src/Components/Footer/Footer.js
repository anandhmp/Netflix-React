import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-box'>
        <p className='question-call'>Questions? Call 1-844-505-2993</p>
        <div className='footer-row'>
        <div className='footer-elements'>
            <p>FAQ</p>
            <p>Investor Relations</p>
            <p>Ways to Watch</p>
            <p>Corporate Information</p>
            <p>Netflix Orginals</p>
        </div>
        <div className='footer-elements'>
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Terms of Use</p>
            <p>Contact Us</p>
        </div>
        <div className='footer-elements'>
            <p>Acoount</p>
            <p>Redeem Gift Cards</p>
            <p>Speed Test</p>
            <p>Privacy</p>
        </div>
        <div className='footer-elements'>
            <p>Media Center</p>
            <p>Buy Gift Cards</p>
            <p>Cookie Preferences</p>
            <p>Legal Notices</p>
        </div>
        </div>
        
        <div className='row'>
        <select name="English" id="dropdowm3">
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        </select>   

        </div>

    </div>
  )
}

export default Footer