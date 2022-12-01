import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customAxios } from '../../config/api'

const initialState = {
    loading: false,
    data: {},
    error: false
}
export const getCatalogies = createAsyncThunk(
    'catalogies/getCatalogies',
    async (arg, thunkApi) => {
        try {            
            const res = await customAxios.get(`/catalogies.json`);            
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
export const addCatalogies = createAsyncThunk(
    'catalogies/addCatalogies',
    async (arg, thunkApi) => {
        let token = thunkApi.getState().LoginReducer.data.token;
        try {                
            const res = await customAxios.post(`/catalogies.json?auth=${token}`, {
                slug: arg.slug,        
                avatar: arg.avatar,
                title: arg.title               
            });
            let obj = {};                       
            obj[res.data.name] = arg
            return obj;

        } catch (error) {
            return {
                error: error.response.data.error,
            };
        }        
    },
);
export const updateCatalogies = createAsyncThunk(
    'catalogies/updateCatalogies',
    async (arg, thunkApi) => {
        let token = thunkApi.getState().LoginReducer.data.token;
        // console.log(arg.id);
        try {                
            const res = await customAxios.put(`/catalogies/${arg.id}.json?auth=${token}`, {
                title: arg.title,            
                slug: arg.slug,        
                avatar: arg.avatar
            });            
            let obj = {};                                   
            obj[arg.id] = {
                title: res.data.title,
                slug : res.data.slug,
                avatar: res.data.avatar
            }
            return obj;

        } catch (error) {            
            return {
                error: error.response.data.error,
            };
        }        
    },
);
export const deleteCatalogy = createAsyncThunk(
    'catalogies/deleteCatalogy',
    async (arg, thunkApi) => {
        let token = thunkApi.getState().LoginReducer.data.token;        
        try {                
            const res = await customAxios.delete(`/catalogies/${arg.id}.json?auth=${token}`);   
            return arg.id;

        } catch (error) {
            return {
                error: error.response.data.error,
            };
        }        
    },
);
const AdminCatalogiesSlice = createSlice({
    name: 'catalogies',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder

            // getCatalogies
            .addCase(getCatalogies.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getCatalogies.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.error) {
                    state.error = action.payload.error;
                } else {
                    const catalogies = action.payload;
                    state.data = catalogies;                    
                }
            })
            .addCase(getCatalogies.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                console.log(action.payload);
            })           

            /***************************ADD CATALOGY**************************/

            .addCase(addCatalogies.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(addCatalogies.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.error) {
                    state.error = action.payload.error;
                } else {
                    const catalogy = action.payload;     
                    let key = Object.keys(catalogy);                               
                    state.data[key] = catalogy[key]
                }
            })
            .addCase(addCatalogies.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
            /***************************UPDATE CATALOGY**************************/
            .addCase(updateCatalogies.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(updateCatalogies.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.error) {
                    state.error = action.payload.error;
                    // console.log(action.payload.error);                    
                } else {
                    const data = action.payload; 
                    // console.log(data);    
                    let key = Object.keys(data);                               
                    state.data[key] = data[key]
                }
            })
            .addCase(updateCatalogies.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                console.log(action.payload);
            })
            /***************************DELETE CATALOGY */
            .addCase(deleteCatalogy.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(deleteCatalogy.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.error) {
                    state.error = action.payload.error;
                } else {
                    const key = action.payload; 
                    // let data = {...state.data}
                    // delete data[key] ;                     
                    // state.data = data ;
                    delete state.data[key] ;                   
                }
            })
            .addCase(deleteCatalogy.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })

            ;
    },

}
)

export const { } = AdminCatalogiesSlice.actions
export const selectCatalogies = (state) => state.AdminCatalogiesReducer;
export default AdminCatalogiesSlice.reducer