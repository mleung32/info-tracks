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
    // this.state = {
    //   rend: 'HOME',
    // }
    // this.showComp=this.showComp.bind(this);
    // this.route=this.route.bind(this);
  }
  
  render() {
    return (
        <div>
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

