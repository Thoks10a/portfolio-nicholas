import React from 'react';

import { Link } from 'react-router-dom';

export default function Videos() {
    return (
        <div className="container-umpoucomais">
            <Link
                to="/UmPoucoMais"
                style={{
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                    color: 'gray',
                }}
            >
                Um pouco mais!
            </Link>
            <h1 className="title-umpoucomais">Videos</h1>
            <div
                className="box-one-umpoucomais"
                style={{
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                    color: 'red',
                }}
            >
                Em breve videos serão adicionados!
            </div>
        </div>
    );
}
