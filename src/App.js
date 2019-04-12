import React, { Component } from 'react';
import Navbar from './components/layout/Navbar.js';
import Dashboard from './components/Dashboard/Dashboard';
import Kitchen from './components/Kitchen/Kitchen';
import Notifications from './components/Dashboard/Notifications';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Navbar/>
                    <div className="container-fluid">
                        <Switch>
                            <Route exact path='/' component={Dashboard}/>
                            <Route path='/kitchen' component={Kitchen}/>
                            <Route path='/notification' component={Notifications}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
export default App;