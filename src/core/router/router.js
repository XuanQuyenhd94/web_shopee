const rootRouter = 
    {
        HOME:'',
        CART : 'cart',
        PRODUCT:'catalogy/:id',        
        CATALOGY_ALL:'all_catalogies',
        DETAIL_PRODUCT:'detail_product/:slug/:id',
        USERLOGIN :'/buyer/login',
        USERSIGNUP: '/buyer/signup',
        USERRESET: '/buyer/reset',
        
        LOGIN:'login',
        REGISTER: 'register',

        ADMIN_HOME:'/admin/home',
        ADMIN_CATALOGY:'/admin/catalogy',
        ADMIN_PRODUCT : '/admin/products',
        ADMIN_CHAT : '/admin/chat',
        ADMIN_ADD_PRODUCT :'/admin/products/them-san-pham',
        UNKNOW: '*'
    }

export default rootRouter ;