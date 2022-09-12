import React from 'react';
import Footer from './Components/Footer';
import Jumbotron from './Components/Jumbotron';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import './App.css';
/* import img1 from './assets/img/01.jpg' */

export function Main({ Jumbotron, Navbar, Cards, Footer }) {
    return (
        <>
            <Navbar navbar={navbar} />
            <Jumbotron jumbotron={jumbotron} />
            <Cards cards={cards} />
            <Footer footer={footer} />
        </>
    )
}


