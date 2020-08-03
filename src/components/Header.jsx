import React from 'react';
import './Header.scss';
import TEST from '../assets/icons/TEST.png';
import FRONTend from '../assets/icons/FRONTend.png';

const Header = () => {
    return (
        <div className="header-container">
            <span>
                <img src={TEST} alt=""/>
            </span>
            <span>
                <img src={FRONTend} alt=""/>
            </span>
        </div>
    )
}

export default Header