import React, { useEffect , useState } from 'react'
import styles from './styles/styles.module.css'
import { Row, Col } from 'react-bootstrap'
import Item from './Item'
import { useDispatch, useSelector } from "react-redux"
import { getProducts, selectProducts } from "../../redux/Products/ProductsSlice"
import LoadingPage from '../../views/loadding/LoadingPage'

function ItemWrapper() {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    
    useEffect(() => {
        dispatch(getProducts()) ;       
    }, []);
    return (
        <>
            {
                products.loadding === true? (<LoadingPage />) : (
                    products.data !==null &&(
                        <>                        
                            <Row style={{ backgroundColor: 'white' }}>
                            {
                                Object.keys(products.data)?.map((item,index)=>{
                                    return (
                                        <Col lg={2} key={index}>
                                            <Item  data= {products.data[item]} keyData={item}/>
                                        </Col>
                                    )
                                })
                            }                            
                            </Row>
                            <p className={styles.xt}>
                                <a href="">Xem thêm</a>
                            </p>
                        </>
                    )
                )
            }
        </>
    )
}

export default ItemWrapper