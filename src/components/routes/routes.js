/* eslint-disable no-unused-vars */
// Import Routes React
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
// CSS
import './style.css';
//Import Routes Project
import Home from '../home/home';
import About from '../about/about';
import GithubProjects from '../githubProjects/githubProjects';
import UmPoucoMais from '../UmPoucoMais/UmPoucoMais';
import Videos from '../videos/Videos';
import Projetos from '../projetos/projetos';

import ScrollToTop from './ScrollToTop';

import { IconContext } from 'react-icons';

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

// Icons
import {
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineInstagram,
    AiFillHome,
    AiOutlinePlus,
    AiFillVideoCamera,
    AiFillProject,
} from 'react-icons/ai';

import { SiAboutdotme } from 'react-icons/si';
import { DiGithub } from 'react-icons/di';

import logo from '../image/logo.png';

const PortStyle = {
    'margin-right': '300px',
};

const linkStyle = {
    // color: 'gray',
    'font-family': 'helvetica',
    'text-decoration': 'none',
    // 'margin-left': '10px',
};

const tilespace = {
    // 'margin-left': '20px',
    width: '40px',
    height: '40px',
};

const icon = {
    padding: '5px 5px 5px 5px',
    margin: 0,
    marginRight: 50,
    borderColor: 'rgba(0, 0, 0, 0)',
    opacity: '0.5',
    // 'background-color': 'rgb(83,83,83)',
    // transition: '0s background-color',
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
                            <img src={logo} alt="" width="80"></img>
                        </NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="me-auto " navbar>
                                <NavItem
                                    style={tilespace}
                                    className="icon-navbar-hover"
                                >
                                    {/* <NavLink href="/">Home</NavLink> */}
                                    <Link
                                        to={'/'}
                                        href="#foto"
                                        style={linkStyle}
                                        className="a-button"
                                    >
                                        <AiFillHome size={25} />
                                        Home
                                    </Link>
                                </NavItem>
                                <NavItem
                                    style={tilespace}
                                    className="icon-navbar-hover"
                                >
                                    {/* <NavLink href="/about">About</NavLink> */}
                                    <Link
                                        to={'/about'}
                                        style={linkStyle}
                                        className="a-button"
                                    >
                                        <SiAboutdotme
                                            size={25}
                                            className="icon-navbar-hover"
                                        />
                                        About
                                    </Link>
                                </NavItem>
                                <NavItem
                                    style={tilespace}
                                    className="icon-navbar-hover"
                                >
                                    {/* <NavLink href="/githubprojects">
                                        GitHub Projects
                                    </NavLink> */}
                                    <Link
                                        to={'/githubprojects'}
                                        style={linkStyle}
                                        className="a-button"
                                    >
                                        <DiGithub
                                            size={25}
                                            className="icon-navbar-hover"
                                        />
                                        GitHub
                                    </Link>
                                </NavItem>
                                <NavItem
                                    style={tilespace}
                                    className="icon-navbar-hover"
                                >
                                    {/* <NavLink href="/UmPoucoMais">
                                        Um pouco mais
                                    </NavLink> */}
                                    <Link
                                        to={'/UmPoucoMais'}
                                        style={linkStyle}
                                        className="a-button"
                                    >
                                        <AiOutlinePlus
                                            size={25}
                                            className="icon-navbar-hover"
                                        />
                                        Mais
                                    </Link>
                                </NavItem>
                                {/* <NavItem
                                    style={tilespace}
                                    className="icon-navbar-hover"
                                >
                                    {/* <NavLink href="/UmPoucoMais">
                                        Um pouco mais
                                    </NavLink>
                                    <Link
                                        to={'/videos'}
                                        style={linkStyle}
                                        className="a-button"
                                    >
                                        <AiFillVideoCamera
                                            size={25}
                                            className="icon-navbar-hover"
                                        />
                                        Videos
                                    </Link>
                                </NavItem>
                                <NavItem
                                    style={tilespace}
                                    className="icon-navbar-hover"
                                >
                                    {/* <NavLink href="/UmPoucoMais">
                                        Um pouco mais
                                    </NavLink>
                                    <Link
                                        to={'/projetos'}
                                        style={linkStyle}
                                        className="a-button"
                                    >
                                        <AiFillProject
                                            size={25}
                                            className="icon-navbar-hover"
                                        />
                                        Projetos
                                    </Link>
                                </NavItem>*/}
                            </Nav>
                        </Collapse>

                        <Button
                            type="button"
                            className="btn-hover"
                            style={icon}
                            href="https://github.com/Thoks10a"
                            target="_blank"
                        >
                            <AiFillGithub size={25} />
                        </Button>
                        <Button
                            type="button"
                            className="btn-hover"
                            style={icon}
                            href="https://www.linkedin.com/in/nicholas-silva-8100a2184/"
                            target="_blank"
                        >
                            <AiFillLinkedin size={25} />
                        </Button>
                        <Button
                            type="button"
                            className="btn-hover"
                            style={icon}
                            href="https://www.instagram.com/nicholas_29183/?hl=pt-br"
                            target="_blank"
                        >
                            <AiOutlineInstagram size={25} />
                        </Button>
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
                <Route component={Videos} path="/videos" exact />
                <Route component={Projetos} path="/projetos" exact />
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default Routes;
