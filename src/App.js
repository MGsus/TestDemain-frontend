import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {PrivateRoute} from './Utils/privateRoute'
import Navbar from "./components/layout/navbar";
import Landing from "./components/layout/home";
import Protected from "./components/layout/private";
import Login from "./components/auth/login";
import Logout from "./components/auth/logout";

// import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

    render() {
        return (<Router>
            <div className="container">
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/logout" component={Logout}/>
                    <PrivateRoute exact path="/protected" component={Protected}/>
                </Switch>
            </div>
        </Router>);
    }
}

export default App;