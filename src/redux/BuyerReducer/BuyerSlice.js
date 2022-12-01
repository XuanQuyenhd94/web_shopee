import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customAxios } from '../../config/api'
import axios from 'axios';
import { authen } from '../../config/config'

const initialState = {
    loading: false,
    data: null,
    error: false
}
export const getBuyer = createAsyncThunk(
    'buyer/getBuyer',
    async (arg, thunkApi) => {        
        try {
            // const token = thunkApi.getState().userReducer.token;
            const res = await axios.post(`${authen.lookUp + authen.apiKey}`,{
                idToken:arg.id
            });                        
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
export const addBuyer = createAsyncThunk(
    'buyer/addBuyer',
    async (arg, thunkApi) => {
        try {
            const resAuth = await axios.post(authen.signUp + authen.apiKey, {
                email: arg.email,
                password: arg.password,
                returnSecureToken: true
            })
            const res = await customAxios.post(`/users.json?auth=${resAuth.data.idToken}`, {
                email: arg.email,
                firstName: arg.firstName,
                lastName: arg.lastName,                
                avatar: 'https://www.computerhope.com/jargon/g/guest-user.png',
                uid: resAuth.data.localId,
                statuss: false,
                isAdmin : arg.isAdmin
            });
            // return res.data;

        } catch (error) {
            return {
                error: error.response.data.error,
            };
        }

        // thunkApi.getState() => lấy dữ liệu từ store ra
        // thunkApi.dispatch(login('abc')); => dispatch action bất kì.
    },
);
const BuyerSlice = createSlice({
    name: 'buyer',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder

            // getUser
            .addCase(getBuyer.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getBuyer.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.error) {
                    state.error = action.payload.error;
                } else {
                    const user = action.payload;
                    state.data = user;
                }
            })
            .addCase(getBuyer.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })

            /***************************ADD USER**************************/

            .addCase(addBuyer.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(addBuyer.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(addBuyer.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            });
    },

}
)

export const { } = BuyerSlice.actions
export const selectBuyers = (state) => state.BuyerReducer;
export default BuyerSlice.reducer