import React, {Component} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome} from '@fortawesome/free-solid-svg-icons'
import PMClasses from "./img/PMClasses.js"
import * as c from "./AllClasses.js"
import {Link} from "react-router-dom"

class PM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rend:"Welcome",
    }
    this.updateSidebar = this.updateSidebar.bind(this);
    this.showSidebar = this.showSidebar.bind(this);
  }

  updateSidebar(e) {
    this.setState(state => ({
      rend:e
    }))
  };

  showSidebar() {
    switch(this.state.rend) {
      case "Welcome": return <Welcome/>;
      case "INFO290M": return <c.INFO290M/>;
      case "INFO206A": return <c.INFO206A/>;
      case "INFO206B": return <c.INFO206B/>;
      case "INFO213": return <c.INFO213/>;
      case "INFO214": return <c.INFO214/>;
      case "INFO205": return <c.INFO205/>;
      case "INFO225": return <c.INFO225/>;
      case "INFO234": return <c.INFO234/>;
      case "INFO271B": return <c.INFO271B/>;
      case "INFO290B": return <c.INFO290B/>;
      case "INFO257": return <c.INFO257/>;
      case "INFO203": return <c.INFO203/>;
      case "INFO232": return <c.INFO232/>;
      case "INFO290C": return <c.INFO290C/>;
      case "INFO239": return <c.INFO239/>;
      default:
        return <Welcome/>;
    }
  };

  render() {
    return (
      <div className="containerTrack">
        <Link to="/" id="home">
          <FontAwesomeIcon icon={faHome} className="pointer" size="lg" color="#544BF5"/>
        </Link>
        {this.showSidebar()}
        <PMClasses updateSidebar={this.updateSidebar}/>
      </div>
    )
  }
};

const Welcome = () => {
  return (
    <div className="sidebar">
      <h1>Product Management</h1>
      <p>Click on classes in the diagram to learn more about different offerings.</p>
    </div>
  )
};

export default PM;