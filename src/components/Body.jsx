import React from 'react';
import './Body.scss';
import Carousel from './Carousel';

const Body = () => {
    return (
        <div className="body-container">
            <div className="summary-container">
                <div>
                    <h1>Start Your Journey</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                </div>
            </div>
            <div className="carousel-container">
                <Carousel></Carousel>
            </div>
        </div>
    )
}

export default Body