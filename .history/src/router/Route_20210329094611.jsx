import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import routes from "./routes"

import Login from "_pages/Login"
import Home from "_pages/Home"

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={ Home } exact></Route>
                    <Route path="/login" component={ Login }></Route>
                    <Redirect path="/home" to="/"></Redirect>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;