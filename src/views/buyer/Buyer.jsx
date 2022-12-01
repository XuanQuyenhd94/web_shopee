import React from 'react'
import { Outlet } from 'react-router-dom'
import BuyerHeader from '../../layout/BuyerHeader'
import Footer from '../../layout/Footer'
import '../../assets/CSS/header.scss';
import styles from './styles/styles.module.css'

function Buyer() {
  return (
    <>
    <BuyerHeader/>
    <div className={styles.wrapperImg}>
      <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Buyer