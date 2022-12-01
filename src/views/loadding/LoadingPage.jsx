import React from 'react'
import styles from './styles/styles.module.css'

function LoadingPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.wrapperLoader}>
          <div className={styles.loader}>
            <span></span>
          </div>
          <div className={styles.loader}>
            <span></span>
          </div>
          <div className={styles.loader}>
            <i></i>
          </div>
          <div className={styles.loader}>
            <i></i>
          </div>
        </div>
        <div className={styles.text}>Loading</div>
      </div>
    </div>
  )
}

export default LoadingPage