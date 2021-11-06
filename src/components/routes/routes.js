// Import Routes React
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
//Import Routes Project
import Home from '../home/home';
import About from '../about/about';
import GithubProjects from '../githubProjects/githubProjects';
import UmPoucoMais from '../UmPoucoMais/UmPoucoMais';
import App from '../../App';

import ScrollToTop from './ScrollToTop';

const Routes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Route component={Home} path="/" exact />
                <Route component={App} path="/App" exact />
                <Route component={About} path="/about" exact />
                <Route
                    component={GithubProjects}
                    path="/githubprojects"
                    exact
                />
                <Route component={UmPoucoMais} path="/UmPoucoMais" exact />
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default Routes;
