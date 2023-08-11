import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconButton from './common/icon-button'

const Buttons = ({value,setCounter}) => {
  return (
    <View style={styles.buttonsContainer}>
      <IconButton 
      icon="plus-box" 
      title="INC" 
      style={{backgroundColor:"lightgreen"}}
      onPress={()=>setCounter(value+1)}
      />

      <IconButton 
      icon="minus-box" 
      title="DEC" 
      style={{backgroundColor:"lightblue"}}
      onPress={()=>setCounter(value-1)}
      disabled={value==0}
      />


      <IconButton 
      icon="numeric-0-box" 
      title="RESET" 
      style={{backgroundColor:"pink"}}
      onPress={()=>setCounter(0)}/>
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({
    buttonsContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:5
    }
})