import React from 'react';
import { Link } from 'react-router-dom';

export const LandingView = () => {
    return (
        <div style={{
            backgroundImage: `linear-gradient(to right, #206975, #6882A0, #CDE0C9, #EDECDE, #FFFFFF)`,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <h1>Welcome to the landing page</h1>
            <Link to="/form">Go to the form page</Link>
        </div>
    );
};