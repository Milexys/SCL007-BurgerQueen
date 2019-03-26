import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import Waiter from './components/Waiter.js';
import Kitchen from './components/Kitchen.js'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component{
    render(){
        return (
        <div>
            <Navbar/>
            <div className="container">
            <Router>
               <Switch>
                   <Route path="/home" component={Waiter}/>
                   <Route path="/kitchen" component={Kitchen}/>
               </Switch>
            </Router>
            </div>
        </div>
        )
    }
}
export default App;