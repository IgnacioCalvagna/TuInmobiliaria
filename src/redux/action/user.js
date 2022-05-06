import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

 export const sendSignUpRequest = createAsyncThunk('REGISTER', userData => {
  return axios.post("http://localhost:3001/api/user/register", userData).then(res => res.data);
}); 

export const sendLoginRequest = createAsyncThunk('LOGIN', userData => {
  console.log("userdata", userData)
  return axios.post('http://localhost:3001/api/user/login', userData).then(res => res.data);
});
/* 
export const sendLogoutRequest = createAsyncThunk('LOGOUT', () => {
  return axios.post('/api/user/logout').then(res => res.data);
});

export const persistUser = createAsyncThunk('PERSIST', () => {
  return axios.get('/api/user/me').then(res => res.data);
}); */
//aca tenemos las acciones para dispatchear
