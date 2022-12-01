import rootRouter from "./router";
import App from '../../App'
import Home from '../../views/home/HomePage'
import Login from '../../admin/login/Login'
import Register from '../../admin/register/Register'
import Admin from '../../admin/Admin'
import HomeAdmin from '../../admin/pages/home/Home'
import NotFound from '../../views/not-found/NotFound'
import Buyer from "../../views/buyer/Buyer";
import BuyerLogin from "../../views/buyer/BuyerLogin";
import BuyerSignup from "../../views/buyer/BuyerSignup";
import Products from "../../views/product/Products";
import Catalogy from "../../views/catalogy/Catalogy";
import DetailProduct from "../../views/detail/DetailProduct";
import Chat from "../../admin/components/chat/Chat";
import ProtectedAdmin from "../protectedRouter/ProtectedAdmin";
import CartShopee from "../../views/cart/CartShopee";
import AdminProducts from "../../admin/pages/product/AdminProducts";
import AdminCatalogy from "../../admin/pages/catalogy/AdminCatalogy";
import AddProduct from "../../admin/pages/product/AddProduct";
import ProtectedBuyer from "../protectedRouter/ProtectedBuyer";

const routerConfig = [
    //trang hiển thị
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path: rootRouter.HOME,
                element:<Home/>
            },
            {
                path:rootRouter.PRODUCT,
                element:<Products/>
            },
            {
                path:rootRouter.CATALOGY_ALL,
                element:<Catalogy/>
            },
            {
                path: rootRouter.DETAIL_PRODUCT,
                element:<DetailProduct/>
            },
            {
                path:rootRouter.CART,
                element:<ProtectedBuyer><CartShopee/></ProtectedBuyer>
            }
        ]
    },
    //trang người mua hàng
    {
        path:'/buyer',
        element:<Buyer/>,
        children:[
            {
                path:rootRouter.USERLOGIN,
                element:<BuyerLogin/>
            },
            {
                path: rootRouter.USERSIGNUP,
                element:<BuyerSignup/>
            },
            {
                path:rootRouter.USERRESET
            }
        ]
    },
    //phần dành cho admin
    {
        path:'/admin',
        element:<ProtectedAdmin><Admin/></ProtectedAdmin>,
        children:[
            {
                path:rootRouter.ADMIN_HOME,
                element: <HomeAdmin/>
            },
            {
                path:rootRouter.ADMIN_CHAT,
                element: <Chat/>
            },
            {
                path:rootRouter.ADMIN_CATALOGY,
                element :<AdminCatalogy/>
            },
            {
                path:rootRouter.ADMIN_PRODUCT,
                element:<AdminProducts/>
            },
            {
                path:rootRouter.ADMIN_ADD_PRODUCT,
                element : <AddProduct/>
            }
           
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'register',
        element:<Register/>
    },
    {
        path:'*',
        element:<NotFound/>
    }
]
export default routerConfig;