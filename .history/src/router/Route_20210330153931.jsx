import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import routes from "./routes"

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {
                        routes.map((item,idx)=> {
                            return (
                                // item.children && item.children.length > 0
                                // ? 
                                // <Route path={ item.path } key={ idx } render={() => (
                                //     <item.component> {
                                //         item.children.map((ele, index) => {
                                //             return (
                                //                 <Route path={ ele.path } key={ index } component={ ele.component }></Route>
                                //             )
                                //         })
                                //     }
                                //     </item.component>
                                // )} ></Route>
                                // :
                                <Route key={ idx } path={ item.path } component={ item.component }></Route>
                            )
                        })
                    }
                </Switch>
            </BrowserRouter>
        );
    }
}

console.log(Router);
export default Router;