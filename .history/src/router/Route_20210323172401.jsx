import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Login from "_pages/Login"
import Home from "_pages/Home"

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={ Home }></Route>
                    <Route path="/login" component={ Login }></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;