import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from "@expo/vector-icons/MaterialCommunityIcons"

const Board = ({value}) => {
  return (
    <View style={styles.board}>
     <View style={styles.info} gap={5}>
        <Icon name='numeric' size={50}/>
        <Text style={styles.text}>Counter</Text>
     </View>
    <Text style={[styles.text,{fontWeight:"bold",fontSize:60}]}>{value || 0}</Text>
    </View>
  )
}

export default Board

const styles = StyleSheet.create({
    board:{
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:20,
        paddingHorizontal:50,
        backgroundColor:"white",
        borderRadius:10

    },
    info:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"

    },
    text:{
        fontSize:40
    }
})