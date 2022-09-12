import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


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