import React, { useRef } from 'react';
import './about.css';

import { Link } from 'react-router-dom';

const h1Style = {
    'margin-bottom': '2rem',
};

const pStyle = {
    color: 'orange',
    'margin-top': '5px',
};

function About() {
    const divRef = useRef(null);

    function showInformation(id) {
        if (document.getElementById(id).style.display === 'block') {
            document.getElementById(id).style.display = 'none';
        } else {
            document.getElementById(id).style.display = 'block';
            divRef.current.scrollIntoView({
                behavior: 'smooth',
                animation: 'slow',
            });
        }
    }

    return (
        <div className="container-about">
            <Link
                to="/"
                style={{
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                    color: 'gray',
                }}
            >
                Home
            </Link>
            <h1 className="title-about">Sobre mim!</h1>
            <div className="box-one-about">
                <div className="box-about box-blocky-about">
                    <h3 style={h1Style}>Um pouco sobre mim!</h3>
                    <p>
                        Assim, como dito, estou na faculdade e quase terminando,
                        comecei a gostar da área de Desenvolvimento Web, pois
                        achei muito interessante como as comunicações eram
                        feitas e como as aplicações rodavam por traz do
                        Front-End.
                    </p>
                    <p>
                        Possuo conhecimento em Python Intermediário, Java
                        Intermediário, C# Básico, React Básico, React-Native
                        Básico, JavaScript Intermedário e TypeScript Básico.
                    </p>
                    <p>Inglês Intermediário</p>
                    <ul className="pad-certificados">
                        <p>Certificados (Udemy)</p>
                        <li>
                            Java Completo 2020 Programação Orientada a Objetos +
                            Projetos
                        </li>
                        <li>
                            Python para Android, iOS, Win, Linux e Mac – Desde o
                            Básico
                        </li>
                        <li> Pacote Office – Microsoft Office Essencial</li>
                        <li>
                            AWS Academy Graduate - AWS Academy Cloud Foundations
                        </li>
                        <li>
                            Inglês para Brasileiros: Caminho a Fluência
                            Acelerada 1
                        </li>
                        <li>Curso de Inglês Completo: Do Zero a Fluência</li>
                        <li>Curso Web Design Completo: HTML5,CSS3 e JS</li>
                        <li> C# COMPLETO Programação Orientada a Objetos</li>
                        <p></p>
                        <p>Certificados (Anhembi Morumbi)</p>
                        <p></p>
                        <li>
                            Semana da Escola de Engenharia e Tecnologia
                            Mini-curso: Frontend #1
                        </li>
                        <li>
                            Semana da Escola de Engenharia e Tecnologia
                            Mini-curso: Frontend #2
                        </li>
                        <li>
                            Semana da Escola de Engenharia e Tecnologia
                            Mini-curso: Frontend #3
                        </li>
                        <li>
                            Mineração de Dados e sua inserção em Big Data e
                            Ciência de Dados
                        </li>
                    </ul>
                    <p>
                        Busco minha primeira experiência profissional para que
                        seja possível aplicar os conhecimentos adquiridos na
                        minha vida acadêmica, procuro área focada em
                        desenvolvimento ou relacionada em TI.
                    </p>
                    <p>Gostaria muito de iniciar minha jornada nesse mundo.</p>

                    <button
                        onClick={() => showInformation('show-div')}
                        type="button"
                        value="show"
                        className="button-about"
                    >
                        Entre em contato comigo!
                    </button>
                    <div
                        ref={divRef}
                        id="show-div"
                        className="hidden-div-button"
                        style={{
                            'text-align': 'center',
                            width: '100%',
                            margin: '1rem',
                            transitionDelay: 0.4,
                        }}
                    >
                        <div>
                            <p>
                                <strong>nicholas.isola@hotmail.com</strong>
                            </p>
                            <p>
                                <strong>
                                    linkedin.com/in/nicholas-silva-8100a2184
                                </strong>
                            </p>
                        </div>
                    </div>
                    <p style={pStyle}>Estou muito ancioso para começar!</p>
                </div>
            </div>
            <Link
                to="/githubprojects"
                style={{
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                    color: 'gray',
                }}
            >
                Git Projetos
            </Link>
        </div>
    );
}

export default About;
