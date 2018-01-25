import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
    let infoModal;
    if(props.showModal){
        infoModal = <InfoModal handleClick={()=>props.handleClick()}/>
    }
    return (
        <header>
            <TopNav newGame={()=>props.newGame()} handleClick={()=>props.handleClick()}/>
            {infoModal}
            <h1>HOT or COLD</h1>
        </header>
    );
};
