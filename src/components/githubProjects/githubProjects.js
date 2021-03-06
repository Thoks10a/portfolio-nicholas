import React, { useEffect, useState } from 'react';
import './githubProjects.css';
import { Link } from 'react-router-dom';

//icons
import { IoIosArrowBack } from 'react-icons/io';
import { MdNavigateNext } from 'react-icons/md';

import '../home/home.css';

function GithubProjects() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/Thoks10a/repos').then((response) =>
            response.json().then((data) => setRepositories(data))
        );
    }, []);

    return (
        <div className="container-git">
            <Link
                to="/about"
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
            <h1 className="title-git">Projetos GitHub!</h1>
            <h4 className="title-git-sub">API Git Repositories</h4>
            {/* <div className="div-slide">
                <Slideshow></Slideshow>
            </div> */}
            <div
                style={{
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                }}
            >
                <ul>
                    {repositories.map((repository) => {
                        return (
                            <li style={{ 'margin-bottom': '30px' }}>
                                <h3>{repository.name}</h3>
                                <a
                                    href={repository.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Repositório da aplicação!
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <Link
                to="/UmPoucoMais"
                style={{
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                    color: 'gray',
                }}
                className="next-hove"
            >
                <MdNavigateNext size={35} />
            </Link>
        </div>
    );
}

export default GithubProjects;
