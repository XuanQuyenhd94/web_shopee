import React from 'react';
import cart from '../assets/Imgs/no-cart.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

function Cart() {
    return (
        <>
            <div className="shp-cart">
                <a href className="shp-cart--link">
                    <FontAwesomeIcon icon={faCartShopping} style={{fontSize:'24px'}}/>
                </a>
                <div className="shp-number--cart" />
                <div className="shp-noti--information cart-info">
                    <div className="shp-noti--img no-cart">
                        <img src={cart} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart