import React from 'react';
import { Link } from 'react-router-dom';

export const LandingView = () => {
    return (
        <div>
            <h1>Welcome to the landing page</h1>
            <Link to="/form">Go to the form page</Link>
        </div>
    );
};