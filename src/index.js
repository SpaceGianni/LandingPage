import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import App from './App';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Cards from './Cards';

const container = document.querySelector('#root');
const navbar = document.querySelector('#navbar');
const jumbotron = document.querySelector('#jumbotron');
const cards = document.querySelector('#cards');
ReactDOM.createRoot(container).render(<App />);
ReactDOM.createRoot(navbar).render(<Navbar/>);
ReactDOM.createRoot(jumbotron).render(<Jumbotron />);
ReactDOM.createRoot(cards).render(<Cards />);