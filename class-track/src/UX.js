import React, {Component} from "react"
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome} from '@fortawesome/free-solid-svg-icons'
import UXClasses from './img/UXClasses.js'
import * as c from "./AllClasses.js"

class UX extends Component {
  constructor (props) {
    super(props);
    this.state = {
      rend: "Welcome",
    }
    this.showSidebar = this.showSidebar.bind(this);
    this.updateSidebar = this.updateSidebar.bind(this);
  }

  updateSidebar(e) {
    this.setState(state => ({
      rend:e
    }))
  };

  showSidebar() {
    switch(this.state.rend) {
      case "Welcome": return <UXWelcome/>;
      case "INFO213": return <c.INFO213/>;
      case "INFO214": return <c.INFO214/>;
      case "INFO272": return <c.INFO272/>;
      case "INFO271B": return <c.INFO271B/>;
      case "INFO247": return <c.INFO247/>;
      case "INFO281": return <c.INFO281/>;
      case "INFO232": return <c.INFO232/>;
      case "INFO233": return <c.INFO233/>;
      case "INFOC265": return <c.INFOC265/>;
      case "NWMEDIAC203": return <c.NWMEDIAC203/>;
      case "INFOC262": return <c.INFOC262/>;
      case "INFO290A": return <c.INFO290A/>;
      case "INFO290B": return <c.INFO290B/>;
      default: return <UXWelcome/>;
    }
  }

  render() {
    return (
      <div className="containerTrack">
        <Link to="/">
        {/* <FontAwesomeIcon icon={faHome} className="pointer" id="home" onClick={(e) => this.props.route(e.target.id)} size="2x" color="#544BF5"/> */}
          <FontAwesomeIcon icon={faHome} className="pointer homeIcon"  size="2x" color="#544BF5"/>
        </Link>
        {this.showSidebar()}
        <UXClasses updateSidebar={this.updateSidebar}/>
      </div>
    )
  }

};

const UXWelcome = () => {
  return (
    <div className="sidebar">
      <h1>User Experience</h1>
      <p>Quo nibh tantas ea, vim in dicat diceret. Ferri facete vocibus duo ad, doctus democritum usu cu. No has dicam fabulas, ne cum justo choro, ad his duis erroribus persequeris. Ad natum rationibus consequuntur usu, no quando libris eripuit ius.</p>
    </div>
  )
};

export default UX;

