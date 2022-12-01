import React, { useState, useEffect } from 'react'
import { Col, Container, Form, Row, Modal, Button } from 'react-bootstrap'
import styles from './styles/styles.module.css'
import { currencyFormat , salePrice } from '../../ultils/constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { CheckTotal,deleteCart,getCarts, selectCarts } from '../../redux/CartReducer/CartSlice'
import LoadingPage from '../loadding/LoadingPage'

function CartShopee() { 
    const [idItem, setidItem] = useState(null);

    const dispatch = useDispatch();
    const carts = useSelector(selectCarts);
    const { pathname } = useLocation();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleAccept = () => {
        dispatch(deleteCart({
            id:idItem
        }))
        .unwrap()
        .then(res =>{
            handleClose();
            dispatch(CheckTotal())
            toast.success("Xóa Thành Công !", toastSubmit);
        })
    };
    const handleShow = () => setShow(true);
    const toastSubmit = {
        position: 'top-center',
        autoClose: 2000,
        pauseOnHover: false
    }
    // const [selected, setSelected] = useState(false);

    const [inputValue, setInputValue] = useState(1);

    
    const handleMinus = () => {
        let input = inputValue == "" ? 1 : parseInt(inputValue);
        if (input <= 1) {
            handleShow()
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
        console.log(inputValue);

    }
    const handleDeleteProduct = (id) => {
        //trường hợp thành công 
        setidItem(id);
        handleShow();
    }    
    const handleDeleteAll = () => {
        //trường hợp chưa check vào bất cứ sản phẩm nào
        toast.error('Bạn Chưa Chọn Sản Phẩm Thanh Toán', toastSubmit)
    }
    const handlePay = () => {
        //trường hợp chưa check vào bất cứ sản phẩm nào
        toast.error('Bạn Chưa Chọn Sản Phẩm Thanh Toán', toastSubmit)
    }
   
    useEffect(() => {
        dispatch(getCarts())
        .unwrap()
        .then(res=>{
           dispatch( CheckTotal())
        });        
    }, [])
   
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            {
                carts.loading === true ? <LoadingPage /> : (
                    carts.data && (
                        <div className={styles.container}>
                            <Container>
                                <Row className={styles.wrapperHeader}>
                                    <Col lg={6}>
                                        <div className={styles.wrapperInput}>
                                            {/* <Form.Check /> */}
                                            <span>Sản Phẩm</span>
                                        </div>
                                    </Col>
                                    <Col lg={2} className={styles.center}>
                                        Đơn Giá
                                    </Col>
                                    <Col lg={2} className={styles.center}>
                                        Số Lượng
                                    </Col>
                                    <Col lg={1} className={styles.center}>
                                        Số Tiền
                                    </Col>
                                    <Col lg={1} className={styles.center}>
                                        Thao Tác
                                    </Col>
                                </Row>
                                <br />
                                {/* Floop Cart*/}

                                {
                                    Object.keys(carts.data).map((item, index) => {
                                        return(
                                            <>
                                            <Row className={styles.wrapperBody} key={index}>
                                                <Col lg={6}>
                                                    <Row className={styles.wrapperItem}>
                                                        <Col lg={4}>
                                                            <div className={styles.wrapperInput}>
                                                                {/* <Form.Check 

                                                                /> */}
                                                                <div className={styles.imgBox}>
                                                                    <img src={carts.data[item].avatar} alt="" />
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col lg={5}>
                                                            <div className={styles.nameProduct}>
                                                                {
                                                                    carts.data[item].name
                                                                }
                                                            </div>
                                                        </Col>
                                                        <Col lg={3}>
                                                            <div className={styles.classify}>
                                                                Phân Loại : 
                                                                {/* Xanh | 39 */}
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col lg={2}>
                                                    <div className={styles.priceContainer}>
                                                        <div><span>đ</span> {currencyFormat(parseInt(carts.data[item].price))}</div>
                                                        <div><span>đ</span> {currencyFormat(salePrice(parseInt(carts.data[item].price),parseInt(carts.data[item].sale)))}</div>
                                                    </div>
                                                </Col>
                                                <Col lg={2}>
                                                    <div className={styles.quantity}>
                                                        <span className={styles.quantityContainer}>
                                                            <button className={styles.minus} onClick={() => handleMinus()}>
                                                                <FontAwesomeIcon icon={faMinus} />
                                                            </button>
                                                            <input type="text" name="" id=""  value={carts.data[item].quantity}
                                                                // onChange={(e) => handleChangeInput(e)}
                                                            />
                                                            <button className={styles.plus} onClick={() => handlePlus()}>
                                                                <FontAwesomeIcon icon={faPlus} />
                                                            </button>
                                                        </span>
                                                    </div>
                                                </Col>
                                                <Col lg={1} className={styles.center}>
                                                    <div className={styles.total}><span>đ</span> {currencyFormat(salePrice(parseInt(carts.data[item].price),parseInt(carts.data[item].sale))*parseInt(carts.data[item].quantity))}</div>
                                                </Col>
                                                <Col lg={1} className={styles.center}>
                                                    <span className={styles.tools}
                                                        onClick={() => handleDeleteProduct(item)}
                                                    >Xóa</span>
                                                </Col>
                                            </Row>  
                                            <br /></>
                                        )                                         
                                        
                                    })
                                }


                                {/**Thanh toán */}
                                <Row className={styles.wrapperFooter}>
                                    <Col lg={8}>
                                        <div className={styles.wrapperInput}>
                                            {/* <Form.Check /><span style={{ cursor: "pointer" }} className={styles.selectAll}><button>Chọn Tất Cả</button></span> */}
                                            {/* <div className={styles.tools} style={{ marginLeft: "15px" }}
                                                onClick={() => handleDeleteAll()}
                                            >Xóa</div> */}
                                        </div>

                                    </Col>
                                    <Col lg={4}>
                                        <div className={styles.thanhToan}>
                                            Tổng Thanh Toán &#40; {Object.keys(carts.data).length} Sản Phẩm &#41;
                                            :
                                            <div className={styles.total} style={{ fontSize: "20px" }}>
                                                <span>đ</span>
                                                {
                                                    currencyFormat(carts.total)
                                                }
                                            </div>
                                            <div className={styles.button}
                                                onClick={() => handlePay()}
                                            >
                                                <button>Thanh Toán</button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>


                            </Container>
                            <ToastContainer />
                            <Modal show={show} onHide={handleClose} animation={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Thông Báo</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Bạn chắc chắn muốn bỏ sản phẩm này?</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Đóng
                                    </Button>
                                    <Button variant="primary" onClick={handleAccept}>
                                        Đồng Ý
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    )
                )
            }
        </>
    )
}

export default CartShopee