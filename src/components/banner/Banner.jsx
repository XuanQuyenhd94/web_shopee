import React from 'react'
import styles from './styles/styles.module.css'

function Banner({banner}) {

  return (
    <div className={styles.banner}>
        {          
          banner.map((item,index)=>{
            return (
              <img src={item} key={index} alt="" />       
            )
          })
        }
    </div>
  )
}

export default Banner