import React  from 'react'
import styles from "./styles/styles.module.css";

function Classify({classify}) {   
//   console.log(classify[]);
  return (
    <>
        <br />        
        {
        classify?.map((item) =>{
            return(
                <div key={item} className={styles.wrapper}>                    
                    <span style={{marginLeft:"10px"}}>{item.type}</span> : 
                    {
                        item?.data?.map(i =>{
                            return (
                                <span key={i.data} className={styles.items}>{i.data}</span>
                            )
                        })
                    }                
                </div>
            )
        })
        }
    </>
  )
}

export default Classify