import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/styles.module.css'

function BuyerSignup() {
  return (
    <div className={styles.wrapper}>
        <form >
            <div className={styles.title}>
                Đăng Ký
            </div>
            <div className={styles.formControl}>
                <input type="text" placeholder='Email' required/>
            </div>
            <div className={styles.formControl}>
                <input type="password" placeholder='Mật khẩu'  required/>
            </div>
            <div className={styles.formControl}>
                <button type='submit'>Đăng Ký</button>
            </div>
            <div className={styles.hr}>                
            </div>
            <div className={styles.wrapLink}>
                Bạn đã có tài khoản Shopee <span><Link to={'/buyer/login'}>Đăng nhập</Link></span>
            </div>
        </form>
    </div>
  )
}

export default BuyerSignup