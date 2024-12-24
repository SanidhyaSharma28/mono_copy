import React from 'react'
import "../styles/Footer.css"

export default function Footer() {
  return (
    <div id='footer'>
        <div id='Fcontainer' >
            <div  style={{flexGrow:1}}>
                <div className='footerHead'>MONOGRAM</div>
                <p id='address'>305 King St. W.<br/>Suite 502<br/> Kitchener, ON<br/> Canada</p>
            </div>
            <div  style={{flexGrow:1}}>
                <div className='footerHead'>QUICK LINKS</div>
                <div className='footerText'>Home</div>
                <div className='footerText'>How it Works</div>
                <div className='footerText'>Shop</div>
                <div className='footerText'>Download</div>
            </div>
            <div  style={{flexGrow:1}}>
                <div className='footerHead'>HELP</div>
                <div className='footerText'>FAQs</div>
                <div className='footerText'>Support Center</div>
                <div className='footerText'>Shipping and Sales</div>

            </div>
            <div  style={{flexGrow:1}}>
                <div className='footerHead'>INFORMATION</div>

                <div className='footerText'>About Us</div>
                <div className='footerText'>Work with us</div>
                <div className='footerText'>Privacy Policy</div>
                <div className='footerText'>Terms of Use</div>
                <div className='footerText'>Terms of Sale</div>
                <div className='footerText'>Press Kit</div>


            </div>
            <div  style={{flexGrow:1}}>
                <div className='footerHead'>SUBSCRIBE TO MONOGRAM</div>
            </div>
        </div>
    </div>
  )
}
