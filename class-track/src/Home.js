import React, {Component} from "react"
import {Link} from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rend: "HOME",
    }
  }

  render() {
    return (
      <div className="containerHome">
        <div className="welcome">
          <h1><span className="highlight">Hello MIMS!</span></h1>
          <p>Welcome to Info Tracks. Explore this site for class recommendations based on four common focus areas. If you are pursuing
            an area of study that is not currently represented here, let us know through this form <a href='#'></a>. 
            Quo nibh tantas ea, vim in dicat diceret. Ferri facete vocibus duo ad, doctus democritum usu cu. No has dicam fabulas, ne cum justo choro, ad his duis erroribus persequeris. 
            Ad natum rationibus consequuntur usu, no quando libris eripuit ius.</p>
        </div>

        <div id="imgWrapper1"> 
          <img src={require('./img/uxImage.jpg')} className="trackIcon"></img>  
          {/* <h3 className="caption pointer" onClick={(e) => this.props.route(e.target.innerHTML)}>User Experience</h3> */}
          <Link to="/UX" className="homeLink">
            <h3 className="caption pointer">User Experience</h3>  
          </Link>
        </div>
        
        <div id="imgWrapper2">   
          <img src={require('./img/sweImage.png')} className="trackIcon"></img>
          <Link to="/SWE" className="homeLink">
            {/* <h3 className="caption pointer" onClick={(e) => this.props.route(e.target.innerHTML)}>Software Engineering</h3> */}
            <h3 className="caption pointer">Software Engineering</h3>
          </Link>
        </div> 
        
        <div id="imgWrapper3">   
          <img src={require('./img/pmImage.jpg')} className="trackIcon"></img>
          {/* <h3 className="caption pointer" onClick={(e) => this.props.route(e.target.innerHTML)}>Product Management</h3> */}
          <Link to="/PM" className="homeLink">
            <h3 className="caption pointer">Product Management</h3>
          </Link>
        </div> 

        <div id="imgWrapper4">
          <img src={require('./img/dsImage.jpg')} className="trackIcon"></img>
          <Link to="/DS" className="homeLink">
          {/* <h3 className="caption pointer" onClick={(e) => this.props.route(e.target.innerHTML)}>Data Science</h3> */}
            <h3 className="caption pointer">Data Science</h3>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home;