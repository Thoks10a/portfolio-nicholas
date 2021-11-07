// Import Routes React
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
//Import Routes Project
import Home from '../home/home';
import About from '../about/about';
import GithubProjects from '../githubProjects/githubProjects';
import UmPoucoMais from '../UmPoucoMais/UmPoucoMais';

import ScrollToTop from './ScrollToTop';

import NavBar from '../NavBar/NavBar';

const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <ScrollToTop>
                <Route component={Home} path="/" exact />
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
