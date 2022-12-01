import React ,{useEffect} from 'react'
import { Container ,Row} from 'react-bootstrap'
import CatalogiesList from '../../components/catalogy/CatalogiesList'
import {useLocation} from 'react-router-dom'

function Products() {
  const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
  return (
    <main>
        <Container>
            <Row>
                <CatalogiesList/>
            </Row>
        </Container>
    </main>
  )
}

export default Products