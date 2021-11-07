/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './App.css';
// Routes
import Routes from './components/routes/routes';
import NavBar from './components/NavBar/NavBar';
import { Link, BrowserRouter } from 'react-router-dom';

// Import Components

import 'bootstrap/dist/css/bootstrap.min.css';
// ReactStrap

function App() {
    return (
        <div className="App">
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
                    color: 'red',
                }}
            >
                Trabalhando no site para deixá-lo responsivo!
            </p>
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
                Trabalhando no NavBar com problema!
            </p>
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
