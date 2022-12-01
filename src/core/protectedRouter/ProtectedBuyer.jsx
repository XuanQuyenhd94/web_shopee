import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { selectLogin } from '../../redux/BuyerReducer/LoginBuyerSlice';

function ProtectedBuyer(props) {
  const data = useSelector(selectLogin);     
  const token = data.data.token ;   
  return token!==null ? props.children : <Navigate to={'/buyer/login'} replace={true} />
}

export default ProtectedBuyer