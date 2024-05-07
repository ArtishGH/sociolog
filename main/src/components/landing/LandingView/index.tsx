import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const LandingView = () => {
    return (
        <div className="landing-container">
            <header className="landing-header">
                <div className="header-content">
                    <h1 className="header-title">Let us help you</h1>
                    <p className="header-motto">Laughter is the best medicine</p>
                </div>
                <div className="header-image">
                    <img src="/img/sociologyHeaderImage.avif" alt="Laughter" />
                </div>
            </header>
        </div>
    );
};
