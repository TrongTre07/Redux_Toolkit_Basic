import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {store} from './components/redux/store'
import { Provider } from 'react-redux'
import NumberCounter from './components/NumberCounter'

const App = () => {
  return (
    //B2: Khao bao store Provider trong App.js
    //Provider store bao ngoai tat ca component
    <Provider store={store}>
      <NumberCounter/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})