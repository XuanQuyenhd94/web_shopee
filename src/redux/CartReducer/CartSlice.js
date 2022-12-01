import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customAxios } from '../../config/api'
import { salePrice } from '../../ultils/constant';

const initialState = {
    loading: false,
    data: {},
    error: false
}
export const getCarts = createAsyncThunk(
    'cart/getCarts',
    async (arg, thunkApi) => {
        let token = thunkApi.getState().LoginBuyerReducer.data.token;
        let userId = thunkApi.getState().LoginBuyerReducer.data.userId;        
        try {                
            const res = await customAxios.get(`/cart/${userId}.json?auth=${token}`);            
            return res.data;

        } catch (error) {
            // console.log(error);
            return {
                error: error.response.data.error,
            };
        }        
    },
);
export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (arg, thunkApi) => {
        let token = thunkApi.getState().LoginBuyerReducer.data.token;
        let userId = thunkApi.getState().LoginBuyerReducer.data.userId;
        // console.log(arg);
        try {                
            const res = await customAxios.post(`/cart/${userId}.json?auth=${token}`, {
                idProduct: arg.idProduct ,
                name: arg.name,
                avatar: arg.avatar,
                price:arg.price,
                sale:arg.sale,
                quantity: arg.quantity                     
            });
            // let obj = {};                       
            // obj[res.data.name] = arg
            // return obj;

        } catch (error) {
            // console.log(error);
            return {
                error: error.response.data.error,
            };
        }        
    },
);
export const deleteCart = createAsyncThunk(
    'cart/deleteCart',
    async (arg, thunkApi) => {
        let token = thunkApi.getState().LoginBuyerReducer.data.token;
        let userId = thunkApi.getState().LoginBuyerReducer.data.userId;
        // console.log(arg);
        try {                
            const res = await customAxios.delete(`/cart/${userId}/${arg.id}.json?auth=${token}`);
            return arg.id;

        } catch (error) {
            // console.log(error);
            return {
                error: error.response.data.error,
            };
        }        
    },
);
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        CheckTotal : (state, actions)=>{
            let data = state.data;                      
            let total = 0 ;
            for (const key in data) {               
               total= total + (salePrice(parseInt(data[key].price),parseInt(data[key].sale))*parseInt(data[key].quantity));   
               console.log(total);       
            }            
            let key = "total";
            state[key] =total;
        }
    },
    extraReducers: (builder) => {
        builder

            // addToCart
            .addCase(addToCart.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.loading = false;
                // if (action.payload.error) {
                //     state.error = action.payload.error;
                // } else {
                //     const cart = action.payload;     
                //     let key = Object.keys(cart);                               
                //     state.data[key] = cart[key];                  
                // }
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = true;                
            }) 
             // getCarts
             .addCase(getCarts.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getCarts.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.error) {
                    state.error = action.payload.error;
                } else {
                    const cart = action.payload;     
                    state.data = cart;                  
                }
            })
            .addCase(getCarts.rejected, (state, action) => {
                state.loading = false;
                state.error = true;                
            }) 
             // deleteCarts
             .addCase(deleteCart.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(deleteCart.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.error) {
                    state.error = action.payload.error;
                } else {
                    const key = action.payload; 
                                        
                    delete state.data[key] ;                      
                }
            })
            .addCase(deleteCart.rejected, (state, action) => {
                state.loading = false;
                state.error = true;                
            }) 
        }
    }
)
export const { CheckTotal } = CartSlice.actions
// export const { } = CartSlice.actions

export const selectCarts = (state) => state.CartReducer;
export default CartSlice.reducer