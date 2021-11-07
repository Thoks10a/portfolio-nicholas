/* eslint-disable no-unused-vars */
// Import Routes React
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
//Import Routes Project
import Home from '../home/home';
import About from '../about/about';
import GithubProjects from '../githubProjects/githubProjects';
import UmPoucoMais from '../UmPoucoMais/UmPoucoMais';

import ScrollToTop from './ScrollToTop';

import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavLink,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button,
} from 'reactstrap';

import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

const PortStyle = {
    'margin-right': '100px',
};

const linkStyle = {
    color: 'gray',
    'font-family': 'helvetica',
    'text-decoration': 'none',
    'margin-left': '10px',
};

const Routes = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <BrowserRouter>
            <ScrollToTop>
                <div>
                    <Navbar expand="md" className="navbar" light>
                        <NavbarBrand href="/" style={PortStyle}>
                            Portfolio Nicholas
                        </NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="me-auto" navbar>
                                <NavItem>
                                    {/* <NavLink href="/">Home</NavLink> */}
                                    <Link to={'/'} style={linkStyle}>
                                        Home
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    {/* <NavLink href="/about">About</NavLink> */}
                                    <Link to={'/about'} style={linkStyle}>
                                        About
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    {/* <NavLink href="/githubprojects">
                                        GitHub Projects
                                    </NavLink> */}
                                    <Link
                                        to={'/githubprojects'}
                                        style={linkStyle}
                                    >
                                        GitHub Projects
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    {/* <NavLink href="/UmPoucoMais">
                                        Um pouco mais
                                    </NavLink> */}
                                    <Link to={'/UmPoucoMais'} style={linkStyle}>
                                        A little more
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
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
