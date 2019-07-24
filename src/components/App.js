import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Pages
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'
import Home from '../pages/Home'
import Layout from './Layout'
import NotFound from './NotFound'


export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
} 