import React from 'react';
import Spakle from './Spakle.png';
import i2 from './i2.png';

const images = {
    img1: Spakle,
    img2: i2,
};

function Img({ imgKey, alt }) {
    return <img src={images[imgKey]} alt={alt} />;
}

export default Img;
