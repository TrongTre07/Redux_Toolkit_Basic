import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
//B5: khai bao useDispatch va useSelector
import {useSelector, useDispatch} from 'react-redux';
//useDispatch là hàm sẽ đưa data từ component vào Slice
//SLICE sẽ nhận dâta này dưới dạng ACTION.PAYLOAD
//====
//useSelector là hàm sẽ lấy data từ slice vào component
//cụ thể là lấy data của initialState qua

import {increment, decrement, incrementByAmount} from './redux/slice';
//Khai bao 3 Reducer trong Reducers.
//increment tang value len 1,
//decrement giam value xuong 1
//incrementByAccount tang value theo số lượng mong muốn

const NumberCounter = () => {
  const [text, setText] = useState(0);

  const dispatch = useDispatch();

  // useSelector nay lay data(value) tu initialState đưa vào 'dataFromSlice'
  const dataFromSlice = useSelector(state => state.counter.value);

  //Goi dispatch để gọi cái Reducer đưa data vào Slice
  const increaseCount = () => {
    dispatch(increment());
  };
  const decreaseCount = () => {
    dispatch(decrement());
  };

  //Đưa 1 số vào incrementByAnount, đây là 1 reducer của Slice.
  //increamentByAmount sẽ đẩy giá trị của text(số mình nhập)
  //dưới dạng ACTION.PAYLOAD
  const handleButtonPress = () => {
    dispatch(incrementByAmount(text));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{dataFromSlice}</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={increaseCount} title="+" />
        <Button onPress={decreaseCount} title="-" />
      </View>
      <TextInput
        style={styles.textInput}
        onChangeText={setText}
        value={text}
        placeholder="Enter some number"
      />
      <Button onPress={handleButtonPress} title="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
});

export default NumberCounter;
