import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook , faInstagram , faLinkedin} from'@fortawesome/free-brands-svg-icons';
import {Container , Row , Col } from 'react-bootstrap';
import img from '../assets/Imgs/Image';
function Footer() {
  return (
    <>
        <footer className='sp-footer'>
            <Container>
                <Row>
                    <Col lg={3}>
                        <strong>chăm sóc khách hàng</strong>
                        <ul>
                            <li>Trung Tâm Trợ Giúp</li>
                            <li>Shopee Blog</li>
                            <li>Shopee Mall</li>
                            <li>Hướng Dẫn Mua Hàng</li>
                            <li>Hướng Dẫn Bán Hàng</li>
                            <li>Thanh Toán</li>
                            <li>Shopee Xu</li>
                            <li>Vận Chuyển</li>
                            <li>Trả Hàng & Hoàn Tiền</li>
                            <li>Chăm Sóc Khách Hàng</li>
                            <li>Chính Sách Bảo Hành</li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                    <strong>về shopee</strong>
                        <ul>
                            <li>Giới Thiệu Về Shopee Việt Nam</li>
                            <li>Tuyển Dụng</li>
                            <li>Điều Khoản Shopee</li>
                            <li>Chính Sách Bảo Mật</li>
                            <li>Chính Hãng</li>
                            <li>Kênh Người Bán</li>
                            <li>Flash Sales</li>
                            <li>Chương Trình Tiếp Thị Liên Kết Shopee</li>
                            <li>Liên Hệ Với Truyền Thông</li>
                        </ul>
                    </Col>
                    <Col lg={2}>
                        <strong>thanh toán</strong>
                        <Row>
                            <Col lg={4}>
                                <img src={img.footerImgs.f1} alt="" />
                            </Col>
                            <Col lg={4}>
                                <img src={img.footerImgs.f2} alt="" />
                            </Col>
                            <Col lg={4}>
                                <img src={img.footerImgs.f3} alt="" />
                            </Col>
                        </Row>
                        <strong>đơn vị vận chuyển</strong>
                        <Row>
                            <Col lg={4}>
                                <img src={img.footerImgs.f4} alt="" />
                            </Col>
                            <Col lg={4}>
                                <img src={img.footerImgs.f5} alt="" />
                            </Col>
                            <Col lg={4}>
                                <img src={img.footerImgs.f6} alt="" />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2}>
                        <strong>theo dõi chúng tôi trên</strong>
                        <ul>
                            <li><FontAwesomeIcon icon={faFacebook}  style={{fontSize:'16px'}} />
                                <span>FaceBook</span>
                            </li>
                            <li><FontAwesomeIcon icon={faInstagram} style={{fontSize:'16px'}} />
                                <span>Instagram</span>
                            </li>
                            <li><FontAwesomeIcon icon={faLinkedin}  style={{fontSize:'16px'}}/>
                                <span>Linkedin</span>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={2}>
                        <strong>tải ứng dụng shopee ngay thôi</strong>
                        <img src={img.qrCode} alt="" style={{display:'block',margin:'0 auto'}} />
                    </Col>
                </Row>
            </Container>
        </footer>
    </>
  )
}

export default Footer