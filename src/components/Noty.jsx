import React from 'react';
import noty from '../assets/Imgs/no-noty.png';

function Noty() {
  return (
    <>
        <div className="hder-icons--group shp-noti">
                <i className="fa-solid fa-bell" />
                <span>Thông Báo</span>
                <div className="shp-noti--information">
                    <div className="shp-noti--img">
                        <img src={noty} alt="" />
                        <p>Đăng nhập để xem thông báo</p>
                    </div>
                    <div className="shp-noti--nologin">
                        <a href className="register">Đăng Ký</a>
                        <a href className="login">Đăng Nhập</a>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Noty