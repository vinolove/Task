import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Dashboard, Login } from './pages';
import { PrivateRoute } from './routes'

const App = () =>{
    return(
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}

export default App