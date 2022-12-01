import React from 'react'
import Image from '../assets/Imgs/Image';
import QrCode from '../assets/Imgs/QR-code.png';

function Drawer() {
    return (
        <>
            <div className="shp-boxwrapper">
                <div className="shp-boximg">
                    <img src={QrCode} alt="" />
                </div>
                <div className="shp-box-imgs">
                    <img src={Image.topImgs.appstore} alt="" />
                    <img src={Image.topImgs.googleplay} alt="" />
                    <img src={Image.topImgs.appgallery} alt="" />
                </div>
            </div>
        </>
    )
}

export default Drawer