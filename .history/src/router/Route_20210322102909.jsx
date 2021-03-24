import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route></Route>
                    <Switch></Switch>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;