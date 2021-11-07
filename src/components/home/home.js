/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
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

import perfil from '../image/perfil.jpg';

import NavBar from '../NavBar/NavBar';

const h1Style = {
    'margin-top': '2rem',
};

const pStyle = {
    'margin-top': '2rem',
    'margin-bottom': '0px',
};

function Home() {
    return (
        <div className="container">
            <NavBar />
            <h1 className="title">
                Olá bem vindo ao meu portfolio! Espero que goste!
            </h1>
            <div className="box-one">
                <div className="box box-blocky">
                    <div className="image box-blocky">
                        <img src={perfil} alt=""></img>
                    </div>
                    <h3 style={h1Style}>
                        Olá, meu nome é Nicholas Isola da Silva!
                    </h3>
                    <p>
                        Atualmente estou quase terminando a faculdade de ciência
                        da computação e adoraria trabalhar com programação web!
                    </p>
                    <p style={pStyle}>
                        Estou no 8ºSemestre, e atualmente estou estudando
                        JavaScript, React e React-Native (Possuo um conhecimento
                        básico em TypeScript). Adoraria atuar no Back-End que é
                        meu foco principal, porém não me importo em trabalhar
                        também no Front-End.
                    </p>
                </div>
            </div>
            <Link
                to="/about"
                style={{
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                    color: 'gray',
                }}
            >
                Sobre
            </Link>
        </div>
    );
}

export default Home;
