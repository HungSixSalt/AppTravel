import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import Header from '../../components/Mainheader/header'

const Notification = ({Navigation}) => {
  return (
    <View style={styles.container}>
    <Header title="Traveloka" />
      
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',

    },
})