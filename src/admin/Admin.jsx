import React from 'react'
import styles from './styles/styles.module.css'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Layout from './layout/Layout'
import {selectLogin} from "../redux/LoginReducer/LoginSlice"
import {useSelector} from "react-redux" ;

function Admin() {
  const data = useSelector(selectLogin);
  return (
    <>
      <Layout />
      <Container>
        <div className={styles.wrapper}>
          <Outlet />
        </div>
      </Container>
    </>
  )
}

export default Admin