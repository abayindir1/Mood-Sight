import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "../Pages/Home"

import "../Styles/global.css"

class AppRouter extends React.Component
{
render(){
    return(
        <Router>
            <div className="main">
                <Switch>
                <Route path="/" component={Home} exact={true} />
                </Switch>
            </div>
        </Router>
    )
}
}

export default AppRouter