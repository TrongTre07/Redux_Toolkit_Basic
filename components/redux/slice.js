import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

//B3: Tao SLICE
export const counterSlice = createSlice({
  //Tên của slice, gọi initialState thông qua thằng 'name' này ở các component
  name: 'counter',
  // initialState, gia trị khởi tạo của slice.
  //Ở đây, initialState có value=0 vì đã được khai báo ở trên
  initialState,

  //Reducers, các function sẽ tương tác với initialState thông qua state và action
  reducers: {
    //O day. state == initialState. state.value == initialState.value
    //Nói cách khác, trong Reducers, state chính là initialState

    increment: state => {
      state.value += 1;
      //state.value +=1 == initialState.value +=1
    },
    decrement: state => {
      state.value -= 1;
    },

    // Ở đây. action là thứ sẽ tương tác với State
    // action.payload là data mà bên component sẽ gửi qua.
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
