import React from 'react';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer'
import './App.css';
/* import img1 from './assets/img/01.jpg' */

export function Main({ jumbotron, navbar, cards, footer }) {
    return (
        <>
            <Navbar navbar={navbar} />
            <Jumbotron jumbotron={jumbotron} />
            <Cards cards={cards} />
            <Footer footer={footer} />
        </>
    )
}


