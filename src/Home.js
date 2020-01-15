import React, {Component} from "react"
import {Link} from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="containerHome">
        <div className="welcome">
          <h1><span className="highlight">INFO Tracks</span></h1>
          <p><span id="greeting">Hello MIMS!</span> Explore this site for class recommendations in common focus areas. We currently have track information for user experience,
            software engineering, product management, and data science. Click on an image below to learn more.</p>
        </div>

        <div id="imgWrapper1"> 
          <img src={require('./img/uxImage.jpg')} className="trackIcon"></img>  
          <Link to="/UX" className="trackLink">
            <h3 className="caption pointer">User Experience</h3>  
          </Link>
        </div>
        
        <div id="imgWrapper2">   
          <img src={require('./img/sweImage.png')} className="trackIcon"></img>
          <Link to="/SWE" className="trackLink">
            <h3 className="caption pointer">Software Engineering</h3>
          </Link>
        </div> 
        
        <div id="imgWrapper3">   
          <img src={require('./img/pmImage.jpg')} className="trackIcon"></img>
          <Link to="/PM" className="trackLink">
            <h3 className="caption pointer">Product Management</h3>
          </Link>
        </div> 

        <div id="imgWrapper4">
          <img src={require('./img/dsImage.jpg')} className="trackIcon"></img>
          <Link to="/DS" className="trackLink">
            <h3 className="caption pointer">Data Science</h3>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home;