import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Cards from './Cards';


function EntireWebsiteLayout(){
    return(<div>
        <Navbar />
        <Jumbotron />
        <Cards />
        <Footer />
    </div>
        
    );
}

ReactDOM.render(<EntireWebsiteLayout />, document.querySelector('#root'));

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<EntireWebsiteLayout {...data} />);