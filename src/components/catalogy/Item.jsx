import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/styles.module.css'

function Item({data}) {
  // console.log(data);
  return (
    <Link to={`/catalogy/${data.slug}`} className={styles.item}>
        <img src={data.avatar} alt="" />
        <p>{data.title}</p>
    </Link>
  )
}

export default Item