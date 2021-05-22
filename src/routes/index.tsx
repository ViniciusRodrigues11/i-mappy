import React from 'react';
import { Switch } from 'react-router-dom'
import Route from './Route'

import OrphanagesMap from '../pages/InfectionsMap'
import Landing from '../pages/Landing'

import Login from '../pages/Login'
import Register from '../pages/Register'

import Dashboard from '../pages/Dashboard'

const Routes: React.FC = () => (


    <Switch>

        <Route path="/" exact component={Landing} />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route path="/app" component={OrphanagesMap}/>

        <Route path="/dashboard" component={Dashboard} isPrivate/>

    </Switch>


)

export default Routes