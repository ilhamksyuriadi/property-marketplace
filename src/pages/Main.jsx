import React from 'react';
import './Main.scss';
import Header from '../components/Header';
import Body from '../components/Body';

const Main = () => {
    return (
        <div className="main-container">
            <Header></Header>
            <Body></Body>
        </div>
    )
}

export default Main