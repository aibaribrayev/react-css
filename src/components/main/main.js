import React, { Component } from 'react';
import hey from '../../pics/hey.jpeg';
import lets from '../../pics/lets.jpeg';
import give from '../../pics/give.jpeg';
import all from '../../pics/all.jpeg';
import youcan from '../../pics/youcan.jpeg';

import "./main.css";

const PicList = () => {
    const array = [
        {
            text: 'HEY', 
            sourse: hey,
        }, 
        {
            text: "LET'S", 
            sourse: lets,
        }, 
        {
            text: 'GIVE', 
            sourse: give,
        }, 
        {
            text: 'ALL', 
            sourse: all,
        }, 
        {
            text: 'YOU CAN', 
            sourse: youcan,
        }
    ];

    return(
        <div className="pics-wrapper">
            {array.map((picture) => (
                <div className="pic-box" style={{ backgroundImage: `url(${picture.sourse})`}}>
                    <div className="content">{picture.text}</div>
                </div>
            ))}
        </div> 
    );
}; 

export default PicList; 

