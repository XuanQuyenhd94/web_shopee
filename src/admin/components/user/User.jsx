import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './styles/styles.module.css'

function User() {
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();
    const handleClick = ()=>{
        let flag = status
        setStatus(!flag)
    }
    const handleLogOut = ()=>{
        localStorage.removeItem('user');
        navigate('/login');
    }
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.link} onClick={()=>handleClick()} >
                <div className={styles.imgBox}>
                    <img src="https://www.computerhope.com/jargon/g/guest-user.png" alt="ảnh đại diện" />
                </div>
            <div className={styles.user} >
                Xuân Quyền
            </div>
            </div>

            <div className={styles.dropdown + ' '+ (status? styles.block:styles.none)}>
                <div>
                    Thông Tin Tài Khoản
                </div>
                <div>Quên mật khẩu</div>
                <div onClick={()=>handleLogOut()}>Logout</div>
            </div>
        </div>
    )
}

export default User