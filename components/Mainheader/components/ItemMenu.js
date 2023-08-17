import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

const ItemMenu = ({ title, iconMenu, actionType }) => {
    return (
        <View style={styles.boxTravel}>
            <TouchableOpacity onPress={actionType}>
                <View style={styles.iconcontainer}>
                    <Image style={styles.hotel} source={iconMenu} />
                </View>
                <Text style={styles.textIcon}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ItemMenu

const styles = StyleSheet.create({
    boxTravel: {
        height: 120,
        justifyContent: 'center',
        alignContent: 'center',

    },
    textIcon: {
        textAlign: 'center',

    },
    iconcontainer: {
        backgroundColor: 'white',
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hotel: {
        width: 40,
        height: 40,
    },
})