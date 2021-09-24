import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PreviewData from './components/PreviewData';
import Post from './components/Post';


export default function Routes(props) {

    return (
        <Router>
            <Switch>
                <Route
                    path='/'
                    exact
                    component={Post}
                />
                <Route
                    path='/post/:id'
                    exact
                    component={PreviewData}
                />
            </Switch>
        </Router>
    );
}