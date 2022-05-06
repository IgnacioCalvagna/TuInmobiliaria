import { createReducer } from '@reduxjs/toolkit';
//import {sendSignUpRequest} from "../action/user";
import {sendLoginRequest} from "../action/user";
//import {sendLogoutRequest} from "../action/user";
//import {persistUser} from "../action/user";

const userReducer = createReducer(
    [],
    {
      //[sendSignUpRequest.fulfilled]: (state, action) => action.payload,
      [sendLoginRequest.fulfilled]: (state, action) => action.payload,
      /* [sendLogoutRequest.fulfilled]: (state, action) => {
        return {};
      }, */
      //[persistUser.fulfilled]: (state, action) => action.payload,
    }
  );
  
  export default userReducer;
  