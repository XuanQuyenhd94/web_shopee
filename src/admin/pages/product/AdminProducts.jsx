import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import styles from './styles/styles.module.css'
import { Table } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faPenToSquare, faEye } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, selectProducts } from '../../../redux/Products/ProductsSlice'
import LoadingPage from "../../../views/loadding/LoadingPage"
import { currencyFormat } from '../../../ultils/constant'

function AdminProducts() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const arrKey = Object.keys(products.data)

  useEffect(() => {
    dispatch(getProducts())
  }, []);

  return (
    <>
      {
        products.loading === true ? (<LoadingPage />) : (
          <Container>
            <div className={styles.wrapperButton}>
              <button onClick={() => {
                navigate('them-san-pham')
              }}>Thêm Mới</button>
              <button>Quay Lại</button>
            </div>
            <h1 className={styles.headding}>
              Bảng Danh Sách Sản Phẩm
            </h1>
            <br />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên Sản Phẩm</th>
                  <th>Hình Ảnh</th>
                  <th>Giá Sản Phẩm</th>
                  <th>Sales</th>
                  <th>Phân loại</th>
                  <th>Công Cụ</th>
                </tr>
              </thead>
              <tbody>
                {
                  arrKey.map((item , index) =>{
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{products.data[item].name}</td>
                        <td><img src={products.data[item].avatar} alt="" width={"100px"}/></td>
                        <td>{currencyFormat(products.data[item].price)}</td>
                        <td>{products.data[item].sale} %</td>
                        <td>{products.data[item].classify.map((i,index1)=>{
                          return (
                            <div>
                                <span style={{color:"red"}}>{i.type} : </span>
                                 {
                                  i.data.map((j , index2)=>{
                                    return(
                                      <span style={{marginLeft:"5px" , textDecoration:"underline"}}>{j.data}</span>
                                    )
                                  })
                                 }
                            </div>
                          )
                        })}</td>
                        <td width={"150px"}>
                          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <FontAwesomeIcon icon={faEye} style={{ cursor: "pointer" }} />

                            <FontAwesomeIcon icon={faPenToSquare} style={{ cursor: "pointer" }} onClick={() => { }} />
                            <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} />
                          </div>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>

          </Container>
        )
      }
    </>
  )
}

export default AdminProducts