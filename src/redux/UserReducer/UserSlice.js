import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customAxios } from '../../config/api'
import axios from 'axios';
import { authen } from '../../config/config'

const initialState = {
    loading: false,
    data: {
        token: (JSON.parse(localStorage.getItem('user'))=== null ? null 
        : JSON.parse(localStorage.getItem('user')).token )
    },
    error: false
}
export const getUser = createAsyncThunk(
    'user/getUser',
    async (arg, thunkApi) => {
        try {
            // const token = thunkApi.getState().userReducer.token;
            const res = await customAxios.get(`/users.json`);                        
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
export const addUser = createAsyncThunk(
    'user/addUser',
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
const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder

            // getUser
            .addCase(getUser.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.error) {
                    state.error = action.payload.error;
                } else {
                    const user = action.payload;
                    state.data = user;
                }
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })

            /***************************ADD USER**************************/

            .addCase(addUser.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(addUser.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            });
    },

}
)

export const { } = UserSlice.actions
export const selectUsers = (state) => state.UsersReducer;
export default UserSlice.reducer