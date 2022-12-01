import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import styles from '../../components/catalogy/styles/styles.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getCatalogies, selectCatalogies } from "../../redux/AdminCatalogies/AdminCatalogiesSlice"
import { useLocation } from 'react-router-dom'
import LoadingPage from '../loadding/LoadingPage';
import CatalogyComponent from '../../components/catalogy/CatalogyComponent';

function Catalogy() {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const catalogies = useSelector(selectCatalogies);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    useEffect(() => {
        dispatch(getCatalogies());
    }, []);
    
    return (
        <>
        {
            catalogies.loading === true ? (<LoadingPage />) :
                (
                    <main>
                        <br />
                        <Container>
                            <h5 style={{ padding: '5px 0' }}>Tất cả danh mục</h5>
                            <div className={styles.catalogy}>
                               <CatalogyComponent catalogies={catalogies} count={9999999}/>
                            </div>
                        </Container>
                        <br />
                    </main>
                )
        }
        </>   
    )
}

export default Catalogy