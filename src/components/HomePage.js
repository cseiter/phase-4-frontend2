import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import '../App.css';

function HomePage() {

    return(
    <div>
        Get your S. H. I. T. together!
        <br />
        <br />
        <Router>
            <Link to={{ pathname: "https://github.com/cseiter"}} target="_blank" rel="noopener noreferrer"><img alt="github logo" width="100" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />  Github</Link>
        </Router>
    </div>
    )
};

export default HomePage;