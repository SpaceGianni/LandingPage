import React from 'react';
import './App.css';
import './Navbar.js';
import './Jumbotron';
import './Cards';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 bg-primary">
                    Hola
                </div>
                <div className="col-md-6 bg-danger">
                    Mundo
                </div>
            </div>
        </div>
    )
}

export default App;