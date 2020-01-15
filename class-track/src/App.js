import React, {Component} from "react"
import Home from "./Home.js"
import SWE from "./SWE.js"
import UX from "./UX.js"
import PM from "./PM.js"
import DS from "./DS.js"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rend: 'HOME',
    }
    this.showComp=this.showComp.bind(this);
    this.route=this.route.bind(this);
  }

  //Changes state based on prop from child component <Home/>. 
  route(e) {
    console.log(e);
    switch(e) { 
      case "User Experience":
        this.setState(state => ({
          rend:"UX"
        }))
        break;
      case "Software Engineering":
        this.setState(state => ({
          rend: "SWE"
        }))
        break;
      case "Product Management":
        this.setState(state => ({
          rend: "PM"
        }))
        break;
      case "Data Science":
        this.setState(state => ({
          rend: "DS"
        }))
        break;
      default: this.setState(state => ({
        rend: 'HOME'
      }))
    }
  };


  //Change page based on state 
  showComp() {
    switch(this.state.rend) {
      case 'UX': return <UX route={this.route}/>;
      case 'SWE': return <SWE route={this.route}/>;
      case "PM": return <PM route={this.route}/>;
      case "DS": return <DS route={this.route}/>;
      default: return <Home route={this.route}/>;
      }
    }
  

  render() {
    return (
        <div>
          {/* {this.showComp()} */}
          <Router>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/UX" component={UX}/>
              <Route path="/SWE" component={SWE}/>
              <Route path="/PM" component={PM}/>
              <Route path="/DS" component={DS}/>
            </Switch>
          </Router>
        </div>
    )
  }  
}

export default App;

