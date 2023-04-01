import {  configureStore} from "@reduxjs/toolkit";
import filtroReducer from'../redux/FiltroSlice'

export const store = configureStore({
   reducer : {
    personaje : filtroReducer
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

