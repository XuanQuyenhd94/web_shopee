import React, { useState ,useEffect} from 'react'
import styles from './styles/styles.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../redux/BuyerReducer/LoginBuyerSlice"

function BuyerLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = async () => {
        dispatch(login({
            email: email,
            password: password
        })
        )
            .unwrap()
            .then(res => {
                navigate('/cart');
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {

    }, []);
    return (
        <div className={styles.wrapper}>
            <form >
                <div className={styles.title}>
                    Đăng Nhập
                </div>
                <div className={styles.formControl}>
                    <input type="text" placeholder='Email' required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.formControl}>
                    <input type="password" placeholder='Mật khẩu' required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={styles.formControl}>
                    <button type='button'
                        onClick={() => handleSubmit()}
                        onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                handleSubmit()
                            }
                        }}
                    >Đăng Nhập</button>
                </div>
                <div className={styles.hr}>
                </div>
                <div className={styles.wrapLink}>
                    Bạn mới biết đến Shopee <span><Link to={'/buyer/signup'}>Đăng ký</Link></span>
                </div>
            </form>
        </div>
    )
}

export default BuyerLogin