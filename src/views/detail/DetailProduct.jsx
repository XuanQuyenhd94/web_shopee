import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import DetailSlider from '../../components/slides/DetailSlider'
import ItemWrapper from '../../components/items/ItemWrapper'
import styles from './styles/styles.module.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { currencyFormat } from '../../ultils/constant'
import { useDispatch, useSelector } from "react-redux"
import { getOne, selectProducts } from '../../redux/Products/ProductsSlice'
import LoadingPage from '../loadding/LoadingPage'

function DetailProduct() {
    const params = useParams();
    const id = params.id;
    // const id = productId.id;
    console.log(id);
    const dispatch = useDispatch();
    const product = useSelector(selectProducts)
    let navigate = useNavigate();
    let containerStyles = {
        width: '100%',
        height: '500px',
        margin: '10px auto'
    }
    let borderLine = {
        border: "1px solid red !important"
    }
    const { pathname } = useLocation();
    // const [selected, setSelected] = useState(false);

    const [inputValue, setInputValue] = useState(1);


    const handleMinus = () => {
        let input = inputValue == "" ? 1 : parseInt(inputValue);
        if (input <= 1) {
            setInputValue(1)
        }
        else {
            setInputValue(input - 1)
        }
    }
    const handlePlus = () => {
        let input = inputValue === "" ? 0 : parseInt(inputValue);
        setInputValue(input + 1);
    }
    const handleChangeInput = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setInputValue(e.target.value)
        }

    }
    const handleSell = () => {
        navigate("/cart");        
    }

    useEffect(() => { 
        dispatch(getOne({
            id: id
        }));
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <>
            <main>
                {
                    product.loading === true ? (<LoadingPage />)
                        :
                        (
                            <>
                            {
                            product.data !==null && (
                            <Container>
                                <Row>                                    
                                    {                                    
                                        product.data.avatar ?
                                        (
                                            <Col lg={5} >
                                                <div style={containerStyles}>
                                                    <DetailSlider avatar={product.data.avatar} />
                                                </div>
                                            </Col>
                                        ) :
                                        (
                                            <p>no data</p>
                                        )                              
                                    }
                                    <Col lg={7}>
                                        <div className={styles.wrapper}>
                                            <div className={styles.title}>
                                                {product.data.name}
                                            </div>
                                            {/* <div className={styles.sells}>
                                                8,4k <span>Đã Bán</span>
                                            </div> */}
                                            <div className={styles.prices}>
                                                <span>{currencyFormat(parseInt(product.data.price))}</span>
                                                <span>
                                                    <span>đ</span>
                                                    <span>{currencyFormat(50000)}</span>
                                                </span>
                                                <span>-{product.data.sale}% giảm</span>
                                            </div>
                                            <div className={styles.info}>
                                                {
                                                    product?.data?.classify?.map((item, index) => {
                                                        return (
                                                            <>
                                                                <div key={index}>
                                                                    <div className={styles.infoItem}>{item.type}</div>
                                                                    <div className={styles.container}>
                                                                        {
                                                                            item?.data?.map((i, d) => {
                                                                                return (
                                                                                    <span key={d}>{i.data}</span>
                                                                                )
                                                                            })
                                                                        }
                                                                    </div>
                                                                </div>

                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className={styles.quantity}>
                                                <span>Số lượng</span>
                                                <span className={styles.quantityContainer}>
                                                    <button className={styles.minus} onClick={() => handleMinus()}>
                                                        <FontAwesomeIcon icon={faMinus} />
                                                    </button>
                                                    <input type="text" name="" id="" value={inputValue}
                                                        onChange={(e) => handleChangeInput(e)}
                                                    />
                                                    <button className={styles.plus} onClick={() => handlePlus()}>
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </button>
                                                </span>
                                            </div>
                                            <div className={styles.cart}>
                                                <button>
                                                    <FontAwesomeIcon icon={faCartPlus} />
                                                    <span>Thêm Vào Giỏ Hàng</span>
                                                </button>
                                                <button
                                                    onClick={() => handleSell()}
                                                >Mua Ngay</button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <div className={styles.chitiet}>
                                        <h4>Chi Tiết Sản Phẩm</h4>
                                    </div>
                                    <div className={styles.mota}>
                                        <h4>Mô Tả Sản Phẩm</h4>
                                    </div>
                                </Row>
                                {/* <Row>
                                    <div className={styles.tuongtu}>
                                        <h4>Sản phẩm tương tự</h4>
                                        <ItemWrapper />
                                    </div>
                                </Row> */}
                            </Container>
                            )
                            }
                            </>
                        )
                }
            </main>
        </>
    )
}

export default DetailProduct