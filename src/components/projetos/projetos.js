import React from 'react';

import { Link } from 'react-router-dom';

//icons
import { IoIosArrowBack } from 'react-icons/io';
//import { MdNavigateNext } from 'react-icons/md';

import '../home/home.css';

export default function Projetos() {
    return (
        <div className="container-umpoucomais">
            <Link
                to="/videos"
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
            <h1 className="title-umpoucomais">Projetos</h1>
            <div
                className="box-one-umpoucomais"
                style={{
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                    color: 'red',
                }}
            >
                Em breve projetos serão adicionados!
            </div>
        </div>
    );
}
