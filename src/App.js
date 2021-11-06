/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
// Routes
import Routes from './components/routes/routes';
import { Link } from 'react-router-dom';

// Import Components
import Home from './components/home/home';

import ScrollToTop from './components/routes/ScrollToTop';

import 'bootstrap/dist/css/bootstrap.min.css';
// ReactStrap
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button,
} from 'reactstrap';

const PortStyle = {
    'margin-right': '100px',
};

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="App">
            <div>
                <Navbar expand="md" className="navbar" light>
                    <NavbarBrand href="" style={PortStyle}>
                        Portfolio Nicholas
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/githubprojects">
                                    GitHub Projects
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/UmPoucoMais">
                                    Um pouco mais
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            <p
                style={{
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                    'background-color': '#282c34',
                    'margin-bottom': '0px',
                    'margin-top': '0px',
                    'padding-top': '35px',
                    color: 'red',
                }}
            >
                Trabalhando no site para deixá-lo responsivo!
            </p>
            <div className="routes">
                <Routes></Routes>
            </div>
            <p
                style={{
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                    'background-color': '#282c34',
                    'margin-bottom': '0px',
                    'margin-top': '0px',
                    'padding-top': '35px',
                }}
            >
                © Nicholas Isola da Silva 2021
            </p>
        </div>
    );
}

export default App;
