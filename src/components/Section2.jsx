import React from 'react'
import Card1 from './Card1'
import "../styles/Section2.css"

export default function Section2() {
  return (
    <div id='gridContainer'>
        <Card1 heading="MINI CONSOLE" desc="Ideal for everyday shortcuts. Adaptable to any workflow." price="249" url="utilities/IMGH1.webp" url2="utilities/IMG1.webp" height= "370px" width= "565px" />
        <Card1 heading="MINI CONSOLE" desc="Ideal for everyday shortcuts. Adaptable to any workflow." price="249" url="utilities/IMGH1.webp" url2="utilities/IMG1.webp"  height= "370px" width= "565px" />
        <Card1 heading="MINI CONSOLE" desc="Ideal for everyday shortcuts. Adaptable to any workflow." price="249" url="utilities/IMGH1.webp" url2="utilities/IMG1.webp"  height= "370px" width= "565px" />
        <Card1 heading="MINI CONSOLE" desc="Ideal for everyday shortcuts. Adaptable to any workflow." price="249" url="utilities/IMGH1.webp" url2="utilities/IMG1.webp"   height= "370px" width= "565px"/>
    </div>
  )
}
