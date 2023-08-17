import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BtnSignin from './button/buttonsignin';

const Body = () => {
    const generateBoxShadowStyle = (
        xOffset,
        yOffset,
        shadowColorIos,
        shadowOpacity,
        shadowRadius,
        elevation,
        shadowColorAndroid,
      ) => {
        if (Platform.OS === 'ios') {
          styles.boxShadow = {
            shadowColor: shadowColorIos,
            shadowOffset: {width: xOffset, height: yOffset},
            shadowOpacity,
            shadowRadius,
          };
        } else if (Platform.OS === 'android') {
          styles.boxShadow = {
            elevation,
            shadowColor: shadowColorAndroid,
          };
        }
        };
    generateBoxShadowStyle(-2, 4, '#171717', 1, 10, 10, '#171717');
    return (
        <View style={[styles.container,styles.boxShadow]}>
            <View style={styles.content}>
                <View style={styles.contentLeft}>
                    <Text style={styles.textSale}>Saving up to 50%</Text>
                    <Text style={styles.textDesription}>With premium promotion for Travelner Account</Text>
                </View>
                <View style={styles.contentRight}>
                    <BtnSignin />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:100,
        borderRadius:10,
        backgroundColor:'white',
    },
    content:{
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection:'row',
        alignItems:'flex-start'
    },
    // boxShadow:{
    //     elevation:4,
    //     borderBottomWidth:(0.9),
    //     borderTopColor:'#000',
    // },
    contentLeft:{
        width:'50%',
        height:'100%',
        justifyContent:'center',
        
    },
    contentRight:{
        width:'50%',
        height:'100%',
        justifyContent:'center',
        alignItems:'flex-end',
    },
    textSale:{
        fontSize:18,
        fontWeight:'bold'
    },
    textDesription:{
        color:'#84948C',
    }
})

export default Body