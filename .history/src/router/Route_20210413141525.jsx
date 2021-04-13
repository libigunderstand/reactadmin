import React, { Component } from 'react';
import { BrowserRouter, Switch } from "react-router-dom"
import VerifyToken from "./VerifyToken"
import routes from "./routes"

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <VerifyToken routerConfig={ routes }></VerifyToken>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;