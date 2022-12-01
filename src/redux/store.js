import {configureStore } from '@reduxjs/toolkit'
import LoginSlice from './LoginReducer/LoginSlice'
import UserSlice from './UserReducer/UserSlice'
import AdminCatalogiesSlice from './AdminCatalogies/AdminCatalogiesSlice'
import ProductsSlice from './Products/ProductsSlice'
import LoginBuyerSlice from './BuyerReducer/LoginBuyerSlice'
import BuyerSlice from './BuyerReducer/BuyerSlice'

export default configureStore({
    reducer:{
        LoginReducer:LoginSlice , 
        LoginBuyerReducer:LoginBuyerSlice ,
        BuyerReducer : BuyerSlice,
        UserReducer : UserSlice,
        AdminCatalogiesReducer : AdminCatalogiesSlice,
        ProductsReducer : ProductsSlice,
    }
})