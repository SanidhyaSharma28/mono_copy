import React,{useState} from 'react'
import "../styles/Card1.css"

export default function Card1(props) {

    
  const [isHovered, setHovered] = useState(false);
  const [isImgHovered, setImgHovered] = useState(false);
  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };
  const handleImgHover = () => {
    setImgHovered(true);
  };

  const handleImgLeave = () => {
    setImgHovered(false);
  };

  return (
    <div className='card1' style={{width:props.width}} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <div id='productCard' onMouseEnter={handleImgHover} onMouseLeave={handleImgLeave} style={{backgroundImage: `url(${isImgHovered? props.url2 :props.url})`,transition: 'background-image 0.15s ease-in-out',width:props.width,height:props.height }}>
            <span id='preTag'>PRE-ORDER</span>
        </div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <div >{props.heading}</div>
        
        {isHovered ? <button id='Shopper' >SHOP NOW</button> :<div >${props.price}</div> }    
        </div>
        <p>{props.desc}</p>
    </div>
  )
}
