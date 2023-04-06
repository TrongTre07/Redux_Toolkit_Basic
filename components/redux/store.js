import { configureStore } from '@reduxjs/toolkit'
//B4: Khai bao Slice vao trong Store
import counterReducer from './slice'

//B1: Khoi tao Store
export const store = configureStore({
  reducer: {
    counter: counterReducer
    //counter la name khai bao ben SLICE `name:"counter"`
    // counterReducer la ham khai bao ben slice
  },
})