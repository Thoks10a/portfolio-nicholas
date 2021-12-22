import React from 'react';

import { Link } from 'react-router-dom';

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
            >
                Videos
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
