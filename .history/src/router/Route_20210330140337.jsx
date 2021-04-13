import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import routes from "./routes"
console.log(routes);

// import Login from "_pages/Login"
// import Home from "_pages/Home"

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {
                        routes.map((item,idx)=> {
                            return (
                                <Route key={ idx } path={ item.path } component={ item.component }></Route>
                            )
                        })
                    }
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;