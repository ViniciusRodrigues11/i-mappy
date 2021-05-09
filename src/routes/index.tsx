import React from 'react';
import { BrowserRouter, Switch} from 'react-router-dom'
import Route from './Route'

import OrphanagesMap from '../pages/InfectionsMap'
import Landing from '../pages/Landing'

import Login from '../pages/Login'


const Routes: React.FC = () => (

    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={OrphanagesMap}/>

            <Route path="/login" component={Login} />

        </Switch>
    </BrowserRouter>

)

export default Routes