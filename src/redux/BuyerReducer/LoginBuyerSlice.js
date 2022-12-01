import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import { authen } from '../../config/config';
import axios from 'axios';

const initialState = {
    loading: false,
    data:{
    token: (JSON.parse(localStorage.getItem('buyer'))=== null ? null 
    : JSON.parse(localStorage.getItem('buyer')).token )
    },
    error: false
    // ,
    // logInAt : (JSON.parse(localStorage.getItem('user'))=== null ?? JSON.parse(localStorage.getItem('user')).logInAt),
    // timeOut : 3600  
  }
  export const login = createAsyncThunk(
    'loginBuyer/login',
    async (arg, thunkApi) => {
        try {            
          const res = await axios.post(`${authen.signIn + authen.apiKey}`,{
            email: arg.email,
            password: arg.password,
            returnSecureToken: true
          })
          return res.data ;
        } catch (error) {
            return {
                error: error.response.data.error,
            };
        }
  
        // thunkApi.getState() => lấy dữ liệu từ store ra
        // thunkApi.dispatch(login('abc')); => dispatch action bất kì.
    },
  ); 
  const LoginBuyerSlice = createSlice({
    name: 'loginBuyer',
    initialState,
    reducers: {
      // checkLogin : (state,actions)=>{},
      
      // logIn : (state , actions)=>{
      //   localStorage.setItem('user',JSON.stringify({token:actions.payload})) ;
      //   state.token = actions.payload;
      // },
  
      // logOut: (state , actions) =>{
      //   localStorage.removeItem('user') ;
      //   state.token =null 
      // }
      },
      extraReducers: (builder) => {
        builder
            // login
            .addCase(login.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(login.fulfilled, (state, action) => {
              state.loading = false;
              if (action.payload.error) {
                  state.error = action.payload.error;
              } else {
                  const user = action.payload;     
                  state.data.token = user.idToken ;
                  localStorage.setItem('buyer',JSON.stringify(user.idToken)) ;
              }
          })
          .addCase(login.rejected, (state, action) => {
              state.loading = false;
              state.error = true;
          })
            ;
          }
     }
  )
  
  export const {} = LoginBuyerSlice.actions
  export const selectLogin = (state) => state.LoginBuyerReducer;
  export default LoginBuyerSlice.reducer