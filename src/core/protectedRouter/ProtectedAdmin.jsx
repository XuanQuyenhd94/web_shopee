import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import {selectLogin} from "../../redux/LoginReducer/LoginSlice";

function ProtectedAdmin(props) {
    const data = useSelector(selectLogin);     
    const token = data.data.token ;   
    return token!==null ? props.children : <Navigate to={'/login'} replace={true} />
}

export default ProtectedAdmin