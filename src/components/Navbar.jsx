import React from 'react'
import 'boxicons'
import "../styles/Navbar.css"

export default function Navbar() {
    return (
        <div className='hero-image'>
            <div id='navbar'>
                <div style={{display:"flex",alignContent:"center"}}>
                    <img style={{height:"40px",margin:"0px 5px"}} className='Children' src="utilities/logo.PNG" alt="radio " />
                    <span style={{margin:"auto 0px"}} className='Children' id='title'>MONOGRAM</span>
                </div>
                <div style={{display:"flex"}}>
                    <button className='navButton Children'>HOW IT WORKS</button>
                    <button className='navButton Children'>WORKFLOWS</button>
                    <button className='navButton Children'>DOWNLOAD</button>
                    <button className='navButton Children'>BLOG</button>
                    <button className='navButton Children'>SUPPORT</button>
                    <button className='navButton Children'>SHOP</button>
                    <button  className='navButton Children'><box-icon  name='shopping-bag'></box-icon></button>
                    <button className='navButton Children'>USD</button>
                </div>
            </div>
            <div id='hero-text'>
            <h1>A CONSOLE FOR <br/> EVERY WORKFLOW</h1>
            <p>Discover the perfect console for yours.</p>
            </div>
            <button id='downArr'><box-icon name='down-arrow' ></box-icon></button>
        </div>
    )
}
