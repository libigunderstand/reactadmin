import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import routes from "./routes"

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
                                item.children && item.children.length > 0
                                ? 
                                <Route key={ idx } path={ item.path } component={ item.component }></Route>
                                :
                                <Route path={item.path} key={index} render={() => (
                                    <item.component> {
                                        item.children.map((children, childrenKey) => {
                                            return (
                                                <Route path={children.path} key={children.path} component={children.component}></Route>
                                            )
                                        })
                                    }
                                    </item.component>
                                )} ></Route>
                            )
                        })
                    }
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;