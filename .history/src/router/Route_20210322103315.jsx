import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

import Login from "_pages/Login"

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={ Login }></Route>
                    <Redirect></Redirect>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;