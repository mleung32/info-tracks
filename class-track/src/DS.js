import React, {Component} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome} from "@fortawesome/free-solid-svg-icons"
import DSClasses from "./img/DSClasses.js"
import * as c from "./AllClasses.js"

class DS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rend: "Welcome",
    }
    this.showSidebar = this.showSidebar.bind(this);
    this.updateSidebar = this.updateSidebar.bind(this);
  }

  updateSidebar(e) {
    this.setState(state => ({
      rend: e
    }));
  };

  showSidebar() {
    switch(this.state.rend) {
      case "INFO247": return <c.INFO247/>;
      case "DATA100": return <c.DATA100/>;
      case "STAT140": return <c.STAT140/>;
      case "INFO201": return <c.INFO201/>;
      case "INFOC260F": return <c.INFOC260F/>;
      case "INFO251": return <c.INFO251/>;
      case "INFO271B": return <c.INFO271B/>;
      case "INFO206A": return <c.INFO206A/>;
      case "INFO290T": return <c.INFO290T/>;
      case "STAT154": return <c.STAT154/>;
      case "INFO202": return <c.INFO202/>;
      case "INFO254": return <c.INFO254/>;
      case "INFO259": return <c.INFO259/>;
      case "INFO206B": return <c.INFO206B/>;
      default: return <Welcome/>
    }
  };

  render() {
    return (
      <div className="containerTrack">
        <FontAwesomeIcon icon={faHome} className="pointer" id="home" onClick={(e) => this.props.route(e.target.id)} size="2x" color="#544BF5"/>
        {this.showSidebar()}
        <DSClasses updateSidebar={this.updateSidebar}/>
      </div>
    )
  }
};

const Welcome = () => {
  return (
    <div className="sidebar">
      <h1>Data Science</h1>
      <p>Quo nibh tantas ea, vim in dicat diceret. Ferri facete vocibus duo ad, doctus democritum usu cu. No has dicam fabulas, ne cum justo choro, ad his duis erroribus persequeris. Ad natum rationibus consequuntur usu, no quando libris eripuit ius.</p>
    </div>
  )
};

// const INFO247 = () => {
//   return (
//     <div className="sidebar">
//     <h1>INFO 247</h1>
//     <h2>Information Visualization and Presentation</h2>
//     <p>The design and presentation of digital information. Use of graphics, animation, sound, visualization software, and hypermedia in presenting information to the user. Methods of presenting complex information to enhance comprehension and analysis. Incorporation of visualization techniques into human-computer interfaces. Course must be completed for a letter grade to fulfill degree requirements.</p>
//   </div>
//   )
// };



export default DS;
