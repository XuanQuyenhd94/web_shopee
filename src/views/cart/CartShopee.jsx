import React , {useState ,useEffect} from 'react'
import { Col, Container, Form, Row , Modal , Button } from 'react-bootstrap'
import styles from './styles/styles.module.css'
import { currencyFormat } from '../../ultils/constant'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus , faMinus} from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify'

function CartShopee() {

    const { pathname } = useLocation();
    const [show, setShow] = useState(false);
    const handleClose = ()=> setShow(false);
    const handleAccept = () => 
    {
        toast.success("Xóa Thành Công !",toastSubmit) ;
        handleClose()
    };
    const handleShow = () => setShow(true);
    const toastSubmit = {
        position:'top-center',
        autoClose:2000,        
        pauseOnHover: false
    }
    // const [selected, setSelected] = useState(false);

    const [inputValue, setInputValue] = useState(1);

    const handleMinus = () => {
        let input = inputValue==""? 1 : parseInt(inputValue);
        if (input <= 1) {
            handleShow()
        }
        else {
            setInputValue(input - 1)
        }
    }
    const handlePlus = () => {
        let input = inputValue==="" ? 0 : parseInt(inputValue);
        setInputValue(input + 1);
    }
    const handleChangeInput = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setInputValue(e.target.value)
        }
        console.log(inputValue);

    }
    const handleDeleteProduct = (id)=>{
        //trường hợp thành công 
        handleShow()        
    }
    const handleDeleteAll = ()=>{
        //trường hợp chưa check vào bất cứ sản phẩm nào
        toast.error('Bạn Chưa Chọn Sản Phẩm Thanh Toán',toastSubmit)
    }
    const handlePay = ()=>{
        //trường hợp chưa check vào bất cứ sản phẩm nào
        toast.error('Bạn Chưa Chọn Sản Phẩm Thanh Toán',toastSubmit)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className={styles.container}>
            <Container>
                <Row className={styles.wrapperHeader}>
                    <Col lg={6}>
                        <div className={styles.wrapperInput}>
                            <Form.Check />
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

                <Row className={styles.wrapperBody}>
                    <Col lg={6}>
                        <Row className={styles.wrapperItem}>
                            <Col lg={4}>
                                <div className={styles.wrapperInput}>
                                    <Form.Check />                                
                                <div className={styles.imgBox}>
                                    <img src="https://cf.shopee.vn/file/6f670e1efd1e2f58f0abbc43e5b8f06a_tn" alt="" />
                                </div>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className={styles.nameProduct}>
                                    sản phẩm 1
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className={styles.classify}>
                                    Phân Loại Hàng : Xanh | 39
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2}>
                        <div className={styles.priceContainer}>
                            <div><span>đ</span> {currencyFormat(120000)}</div>
                            <div><span>đ</span> {currencyFormat(118000)}</div>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className={styles.quantity}>                            
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
                    </Col>
                    <Col lg={1} className={styles.center}>
                        <div className={styles.total}><span>đ</span> {currencyFormat(118000)}</div>
                    </Col>
                    <Col lg={1} className={styles.center}>
                        <span className={styles.tools}
                            onClick ={(id)=> handleDeleteProduct(id)}
                        >Xóa</span>
                    </Col>
                </Row>
                <br />
                <Row className={styles.wrapperBody}>
                    <Col lg={6}>
                        <Row className={styles.wrapperItem}>
                            <Col lg={4}>
                                <div className={styles.wrapperInput}>
                                    <Form.Check />                                
                                    <div className={styles.imgBox}>
                                        <img src="https://cf.shopee.vn/file/6f670e1efd1e2f58f0abbc43e5b8f06a_tn" alt="" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className={styles.nameProduct}>
                                    sản phẩm 1
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className={styles.classify}>
                                    Phân Loại Hàng : Xanh | 39
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2}>
                        <div className={styles.priceContainer}>
                            <div><span>đ</span> {currencyFormat(120000)}</div>
                            <div><span>đ</span> {currencyFormat(118000)}</div>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className={styles.quantity}>                            
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
                    </Col>
                    <Col lg={1} className={styles.center}>
                        <div className={styles.total}><span>đ</span> {currencyFormat(118000)}</div>
                    </Col>
                    <Col lg={1} className={styles.center}>
                        <span className={styles.tools}>Xóa</span>
                    </Col>
                </Row>
                <br />

                {/**Thanh toán */}
                <Row className={styles.wrapperFooter}>
                    <Col lg={8}>
                        <div className={styles.wrapperInput}>
                            <Form.Check/><span style={{cursor:"pointer"}} className={styles.selectAll}><button>Chọn Tất Cả</button></span>
                            <div className={styles.tools} style={{marginLeft:"15px"}}
                                onClick={()=>handleDeleteAll()}
                            >Xóa</div>
                        </div>

                    </Col>
                    <Col lg={4}>
                        <div className={styles.thanhToan}>
                            Tổng Thanh Toán &#40; 0 Sản Phẩm &#41;  
                            :
                            <div className={styles.total} style={{fontSize:"20px"}}>
                                <span>đ</span> 0
                            </div>                      
                            <div className={styles.button} 
                                onClick={()=>handlePay()}
                            >
                                <button>Thanh Toán</button>
                            </div>
                        </div>   
                    </Col>
                </Row>


            </Container>
            <ToastContainer/>
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
}

export default CartShopee