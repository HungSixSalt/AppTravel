import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BtnSignin = () => {
  return (
    <TouchableOpacity>
        <View style={styles.containerButton}>
            <Text style={styles.textSignin}>Sign in now</Text>
        </View>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
    containerButton:{
        width:130,
        height:38,
        borderColor:'#0072ff',
        borderWidth:1.8,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        
    },
    textSignin:{
        fontSize:15,
        color:'#0072ff',
    },
})

export default BtnSignin