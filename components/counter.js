import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Board from './board'
import Buttons from './buttons'
import Spacer from './common/spacer'

const Counter = () => {
    const [counter, setCounter] = useState(0)
  return (
    <View style={styles.container}>
      <Board value={counter}/>
      <Spacer/>
      <Buttons setCounter={setCounter} value={counter}/>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    container:{
        paddingTop:50
       
    }
})