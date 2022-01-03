import React from 'react';
import './UmPoucoMais.css';
import CodeRoutes from '../image/CodeRoutes.png';
import GitHubAPI from '../image/GitHubAPI.png';
import useStateuSeEffect from '../image/useState-useEffect.png';
import ReactStrap from '../image/ReactStrap.png';

import { Link } from 'react-router-dom';

//icons
import { IoIosArrowBack } from 'react-icons/io';
//import { MdNavigateNext } from 'react-icons/md';

import '../home/home.css';

export default function UmPoucoMais() {
    const styleMarg = {
        'margin-bottom': '35px',
    };

    return (
        <div className="container-umpoucomais">
            <Link
                to="/githubprojects"
                style={{
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                    color: 'gray',
                }}
                className="next-hove"
            >
                <IoIosArrowBack size={35} />
            </Link>
            <h1 className="title-umpoucomais">Um pouco mais!</h1>
            <div className="box-one-umpoucomais">
                <div className="box-umpoucomais" style={styleMarg}>
                    <h3>Routes</h3>
                    <img src={CodeRoutes} alt=""></img>
                </div>
                <div className="box-umpoucomais" style={styleMarg}>
                    <h3>API Git</h3>
                    <img src={GitHubAPI} alt=""></img>
                </div>
                <div className="box-umpoucomais" style={styleMarg}>
                    <h3>useState e useEffect (Hooks)</h3>
                    <img src={useStateuSeEffect} alt=""></img>
                </div>
                <div className="box-umpoucomais">
                    <h3>ReactStrap</h3>
                    <img src={ReactStrap} alt=""></img>
                </div>
            </div>
            {/*<Link
                to="/videos"
                style={{
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                    color: 'gray',
                }}
                className="next-hove"
            >
                <MdNavigateNext size={35} />
            </Link>*/}
        </div>
    );
}
