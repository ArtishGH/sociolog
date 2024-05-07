import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const LandingView = () => {
    return (
        <div>
            <header> {/* Background and main selector */}
                <div className='text'>
                    <div className='header text'>
                        <h1>Let us help you</h1>
                    </div>
                    <div className='motto'>
                        <p>Laughter is the best medicine</p>
                    </div>
                </div>
                <div className='image'>
                    <img src='https://images.unsplash.com/photo-1606784501167-3f5b5f5b4b4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdl' alt='Image of a happy person' />
                </div>
            </header>
        </div>
    );
};