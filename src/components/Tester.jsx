import React from 'react'
import "../styles/Tester.css"

export default function Tester() {
  return (
    <div style={{position:"relative"}}>
      <img id='testImg'  src="utilities/qwerty.webp" alt="N/A" />
      <div id='testerText'>
        <h1 style={{fontWeight: "600",fontSize: "2.5rem",letterSpacing: "4px"}}>CREATE YOUR OWN CONSOLE</h1>
        <p style={{letterSpacing:"3px"}}>Add-on to make it perfect.</p>
      </div>
    </div>
  )
}
