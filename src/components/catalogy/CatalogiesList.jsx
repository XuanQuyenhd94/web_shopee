import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faChevronDown, faFilter } from '@fortawesome/free-solid-svg-icons'
import styles from './styles/styles.module.css'
import { Col, Form, FormSelect, Row } from 'react-bootstrap'
import ItemWrapper from '../items/ItemWrapper'
import { Link } from 'react-router-dom'

function CatalogiesList() {
    return (
        <>
            <Col lg={2}>
                <Link to={'/all_catalogies'} className={styles.title}>
                    <FontAwesomeIcon icon={faList} />
                    <span>Tất Cả Danh Mục</span>
                </Link>
                <div className={styles.hr}>
                </div>
                <ul className={styles.list}>
                    <li><a href="">Thời Trang Nam</a></li>
                    <li><a href="">Áo Khoác</a></li>
                    <li><a href="">Áo Vest và Blazer</a></li>
                    <li><a href="">Quần Jean</a></li>
                    <li><a href="">Quần Dài/Quần Âu</a></li>
                    <div className={styles.xt}>Xem thêm <FontAwesomeIcon icon={faChevronDown} /></div>
                </ul>
                <br />

                <a href='' className={styles.title}>
                    <FontAwesomeIcon icon={faFilter} />
                    <span>Bộ Lọc Tìm Kiếm</span>
                </a>
                <div className={styles.filterText}>
                    Theo Danh Mục
                </div>

                <ul className={styles.listDanhMuc}>
                    <li>
                        <label>
                            <input type="checkbox" />
                            Áo thun
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            Áo thun
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            Áo thun
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            Áo thun
                        </label>
                    </li>


                    <div >Thêm <FontAwesomeIcon icon={faChevronDown} /></div>
                </ul>
                <br />
                <div className={styles.hr}>
                </div>
                <br />
                <div className={styles.title}>
                    Theo Khoảng Giá
                </div>
                <form className={styles.form} >
                    <div>
                        <input type="text" placeholder='TỪ' />
                        <input type="text" placeholder='ĐẾN' />
                    </div>
                    <button type="submit" className={styles.btn}>áp dụng</button>
                </form>
                <div className={styles.hr}>
                </div>
                <br />
                <div className={styles.filterText}>
                    Theo Thương Hiệu
                </div>

                <ul className={styles.listDanhMuc}>
                    <li>
                        <label>
                            <input type="checkbox" />
                            CoolMate
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            CoolMate
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            CoolMate
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            CoolMate
                        </label>
                    </li>
                    <div >Thêm <FontAwesomeIcon icon={faChevronDown} /></div>
                </ul>
                <br />
                <div className={styles.hr}>
                </div>
                <br />
                <button className={styles.btn}>xóa tất cả</button>
            </Col>
            <Col lg={10}>
               <Row>
               <div className={styles.titleSort}>
                    <span>Sắp xếp theo </span>
                    <span className={styles.btnSort}>
                        Mới Nhất
                    </span>
                    <span className={styles.btnSort}>
                        Yêu Thích
                    </span>
                    <span className={styles.btnSort}>
                        Bán Chạy
                    </span>
                    <span className={styles.select}>
                        <div>Giá</div>
                        <FontAwesomeIcon icon={faChevronDown} style={{ textAlign: 'right' }} />
                        <div className={styles.options}>
                            <div>Giá : Từ Thấp Đến Cao</div>
                            <div>Giá : Từ Cao Đến Thấp</div>
                        </div>
                    </span>

                </div>
               </Row>
                <br />               
                <ItemWrapper />
                             
            </Col>
        </>
    )
}

export default CatalogiesList