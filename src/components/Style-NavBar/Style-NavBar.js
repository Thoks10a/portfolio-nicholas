/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
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

import '../routes/routes';

const PortStyle = {
    'margin-right': '100px',
};

export default function StyleNavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Navbar expand="md" className="navbar" light>
                        <NavbarBrand href="/" style={PortStyle}>
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
            </BrowserRouter>
        </div>
    );
}
