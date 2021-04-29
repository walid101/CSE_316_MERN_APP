import React from 'react';
import GlobeLogo from '../../Images/globe.png'
import Map from '../../Images/Map.png'
import Border from '../../Images/border.png'
const HomePageBody = (props) => {
    return (
        <div className='home-body-img'>
            <img src = {Map} height = {500} width = {900} className = 'main-logo'></img>
            <h1 className='title-card'>
                Welcome To The World Data Mapper
            </h1>
        </div>
    );
};

export default HomePageBody;