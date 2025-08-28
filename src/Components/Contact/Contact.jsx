import React from 'react'
import './Contact.css'
import linkedin_logo from '../../Assets/linkedIn.png'
import call_icon from '../../Assets/call-icon.png'
import mail_icon from '../../Assets/gmai-icon.png'

const Contact = () => {
  return (
    <div className='contact' id='contact-section'>
        <h2>CONTACT <span>ME</span></h2>
        <p>If you have any questions or 
            would like to work together, feel free to reach out!</p>
        <div className='contact-info'>

            <div className='contact-item'>
                <a href="mailto:lowah258@gmail.com">
                    <img src={mail_icon} />
                    {/* <p>Owah Lovelyn</p> */}
                </a>
            </div>

            <div className='contact-item'>
                 <a href="tel:0810 107 8839">
                    <img src={call_icon} alt="" />
                    {/* <p>0810 107 8839</p> */}
                </a>
            </div>

            <div className='contact-item'>
                <a href="https://www.linkedin.com/in/lovlyn-owah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <img src={linkedin_logo} alt="" />
                    {/* <p>Owah Lovelyn</p> */}
                </a>
            </div>
        </div>
        <p>Copyright &copy; 2025 My Profile.
            <br/> 
            All rights reserved</p>
    </div>
  )
}

export default Contact
