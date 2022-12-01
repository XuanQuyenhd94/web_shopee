import React from 'react'
import { Link } from 'react-router-dom'
import { currencyFormat } from '../../ultils/constant'
import styles from './styles/styles.module.css'

function Item({data , keyData}) {
  return (
    <Link to={`/detail_product/${data.slug}/${keyData}`}>
        <div className={styles.wrapper}>
            <div className={styles.imgBox}>
                <img src={data.avatar} alt="" />
            </div>
            <div className={styles.title}>
                {data.name}
            </div>
            <div className={styles.container}>
                <div className={styles.price}>
                    <span>đ</span>
                    <span>{currencyFormat(data.price)}</span>
                </div>
                {/* <div className={styles.sell}>
                    <span>Đã bán</span>
                    <span>20k</span>
                </div> */}
            </div>
            <div className={styles.sale}>
                <p>{data.sale}%</p>
                <div>
                    giảm
                </div>
            </div>
            <div className={styles.sameProduct}>
                <p>Tìm sản phẩm tương tự</p>
            </div>
        </div>
    </Link>
  )
}

export default Item