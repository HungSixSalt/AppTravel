import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Image } from 'expo-image'
import { IconMenu } from '../../Images/Images'
import FontAwesome from '@expo/vector-icons/FontAwesome';


const CustomDrawer = ({ props }) => {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}
                contentContainerStyle={{ backgroundColor: '#00c6ff'}}
            >
                <View style={{paddingHorizontal:10,flexDirection:'row'}}>
                    <Image style={styles.imageUser} source={IconMenu.imageUser}/>
                    <View style={styles.stylePoint}>
                        <Text style={styles.Username}>HungSixSalt</Text>
                        <Text style={styles.textPoint}>2000 Điểm</Text>
                    </View>
                </View>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            <View style={{padding:10,borderTopWidth:2,borderTopColor:'#ccc'}}>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                    
                    <Text>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageUser:{
        width:80,
        height:80,
        borderRadius:40,
        marginRight:10,
    },
    Username:{
        color:'white',
        fontWeight:'bold',

    },
    textPoint:{
        color:'yellow',
    },
    stylePoint:{
        justifyContent:'center'
    }
})