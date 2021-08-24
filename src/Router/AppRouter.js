import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "../Pages/Home"
import Error from "../Pages/Error"
import Songs from "../Pages/Songs"
import "../Styles/global.css"
import About from "../Pages/About"

class AppRouter extends React.Component
{
render(){
    return(
        <Router>
            <div className="main">
                <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/error" component={Error} exact={true} />
                <Route path="/songs" component={Songs} exact={true} />
                <Route path="/about" component={About} exact={true} />
                </Switch>
            </div>
        </Router>
    )
}
}

export default AppRouter