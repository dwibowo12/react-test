import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound(){

    return (
        <div className="Notfound-container">
            <h1>Sorry, the page you are looking for is not found.</h1>
            <div className="Body-text1">Back to <Link className="Notfound-link" to="/">Home</Link></div>
        </div>
    );
}