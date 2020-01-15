import React, {Component} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {SWEClasses} from './img/SWEClasses'
import * as c from "./AllClasses.js"
import {Link} from "react-router-dom"

class SWE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rend: 'Welcome',
    }
    this.showSidebar=this.showSidebar.bind(this);
    this.updateSidebar=this.updateSidebar.bind(this);
  }

  //update state to display class description 
  updateSidebar(e) {
    this.setState(state => ({
      rend:e
    }))
  };

  showSidebar() {
    switch(this.state.rend) {
      case 'Welcome':return <SWEWelcome/>;
      case 'INFO206A':return <c.INFO206A/>;
      case 'INFO206B':return <c.INFO206B/>;
      case 'CS61B': return <c.CS61B/>;
      case 'CS170': return <c.CS170/>;
      case 'INFO253A': return <c.INFO253A/>;
      case 'INFO253B': return <c.INFO253B/>; 
      case 'INFO257': return <c.INFO257/>;
      case 'INFO290T': return <c.INFO290T/>; 
      case 'CS189': return <c.CS189/>; 
      case 'INFO251': return <c.INFO251/>;
      case 'INFO259': return <c.INFO259/>; 
      case 'CS161': return <c.CS161/>; 
      case 'INFO219': return <c.INFO219/>; 
      default: return <SWEWelcome/>;
    }
  };

  render() {
    return (            
      <div className="containerTrack">
        <Link to="/" id="home">
          <FontAwesomeIcon icon={faHome} className="pointer classes" size="2x" color="#544BF5"/>
        </Link>
        {this.showSidebar()}
        <SWEClasses updateSidebar={this.updateSidebar}/>
      </div>
    )
  }

};

const SWEWelcome = () => {
  return (
    <div className="sidebar">
      <h1>Software Engineering</h1>
      <p>Click on classes in the diagram to learn more about different offerings.</p>
    </div>
  )
};

export default SWE;