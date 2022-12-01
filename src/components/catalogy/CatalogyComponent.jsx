import React from 'react'
import Item from './Item'
import styles from './styles/styles.module.css'

function CatalogyComponent({catalogies , count}) {  

  const key = Object.keys(catalogies.data);
  // console.log(catalogies.data);
  return (
    <div className={styles.catalogy}>
        {key.map((k,index)=>{
            if(index < count){
                return (
                  <Item key={index} data={catalogies.data[k]} />
              )
            }
        })}
    </div>
  )
}

export default CatalogyComponent