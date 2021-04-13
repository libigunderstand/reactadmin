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
                    {/* {
                        routes.map((item,idx)=> {
                            if(item.children && item.children.length > 0) {
                                return (
                                    <Route path={ item.path } key={ idx } exact={ item.exact ? true : false} render={() => (
                                        <item.component> {
                                            item.children.map((ele, index) => {
                                                return (
                                                    <Route path={ ele.path } key={ index } exact={ item.exact ? true : false} component={ ele.component }></Route>
                                                )
                                            })
                                        }
                                        </item.component>
                                    )} ></Route>
                                )
                            }else {
                                return (
                                    <Route key={ idx } path={ item.path } component={ item.component } exact={ item.exact ? true : false}></Route>
                                )
                            }
                        })
                    } */}
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;