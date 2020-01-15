import React from "react"
import { createRequireFromPath } from "module";


function UXImg() {
  return (
    <div id="imgWrapper1"> 
      <img src={require('./img/uxImage.jpg')} className="trackIcon"></img>  
      <h3 className="caption">User Experience</h3>
    </div>
  )
};

function SWEImg() {
  return (
    <div id="imgWrapper2">   
      <img src={require('./img/sweImage.png')} className="trackIcon"></img>
      <h3 className="caption">Software Engineering</h3>
    </div> 
  )
};

function PMImg() {
  return (
    
    <div id="imgWrapper3">
      <img src={require('./img/pmImage.jpg')} className="trackIcon"></img>
      <h3 className="caption">Product Management</h3>
    </div>
  )
};

function DSImg() {
  return (
    
    <div id="imgWrapper4">
    <img src={require('./img/dsImage.jpg')} className="trackIcon"></img>
    <h3 className="caption">Data Science</h3>
    </div>
  )
};

export {UXImg, SWEImg, PMImg, DSImg}

