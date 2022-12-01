import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import './assets/CSS/header.scss';
import Footer from './layout/Footer';
import Header from './layout/Header';

function App() {
  useEffect(() => {
    //xóa toàn bộ user type = admin
    localStorage.removeItem('user');
  }, []);
  return (
    <>
    <Header/>   
    <Outlet/>
    <Footer/>    
    </>
  );
}

export default App;
