import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customAxios } from '../../config/api'

const initialState = {
    loading: false,
    data: {},
    error: false
}

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (arg, thunkApi) => {
        try {            
            const res = await customAxios.get(`/products.json`);            
            return res.data;
        } catch (error) {
            return {
                error: error.response.data.error,
            };
        }
        // thunkApi.getState() => lấy dữ liệu từ store ra
        // thunkApi.dispatch(login('abc')); => dispatch action bất kì.
    },
);
export const getOne = createAsyncThunk(
    'products/getOne',
    async (arg, thunkApi) => {
        try {    
                  
            const res = await customAxios.get(`/products/${arg.id}.json`);            
            return res.data;
        } catch (error) {
            return {
                error: error.response.data.error,
            };
        }
        // thunkApi.getState() => lấy dữ liệu từ store ra
        // thunkApi.dispatch(login('abc')); => dispatch action bất kì.
    },
);
export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (arg, thunkApi) => {
        let token = thunkApi.getState().LoginReducer.data.token;
        try {            
            const res = await customAxios.post(`/products.json?auth=${token}`,{
                idCatalogy:arg.idCata,
                name:arg.name,
                slug:arg.slug,
                price:arg.price,
                sale:arg.sale,
                avatar:arg.avatar,
                classify:arg.classify
            });            
            let obj = {};                       
            obj[res.data.name] = arg
            return obj;
        } catch (error) {
            return {
                error: error.response.data.error,
            };
        }
        // thunkApi.getState() => lấy dữ liệu từ store ra
        // thunkApi.dispatch(login('abc')); => dispatch action bất kì.
    },
);
const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder

            // getproducts
            .addCase(getProducts.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.error) {
                    state.error = action.payload.error;
                } else {
                    const products = action.payload;
                    state.data = products;                    
                }
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })

            // getproduct
            .addCase(getOne.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getOne.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.error) {
                    state.error = action.payload.error;
                } else {
                    const product = action.payload;
                    state.data = product;                                        
                }
            })
            .addCase(getOne.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
            /***************************ADD PRODUCT**************************/

            .addCase(addProduct.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.error) {
                    state.error = action.payload.error;
                } else {
                    const product = action.payload;     
                    let key = Object.keys(product);                               
                    state.data[key] = product[key]
                }
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
            ;
        }
    }
)
export const { } = ProductsSlice.actions
export const selectProducts = (state) => state.ProductsReducer;
export default ProductsSlice.reducer