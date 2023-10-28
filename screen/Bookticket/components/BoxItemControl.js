import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'expo-image'

const BoxItemControl = ({nameObject,ageObject,quantity,iconObject,actionType1,actionType2}) => {
    return (
        <View style={styles.boxControl}>
            <Text>{nameObject}</Text>
            <Text>{ageObject}</Text>
            <View style={styles.quantity}>
                <View style={styles.viewImage}><Image style={{ width: 30, height: 30, }} source={iconObject}></Image></View>
                <View style={styles.control}>
                    <TouchableOpacity
                        onPress={actionType1}
                    >
                        <Text style={{ fontSize: 30 }}>-</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>{quantity}</Text>
                    <TouchableOpacity
                        onPress={actionType2}
                    >
                        <Text style={{ fontSize: 25 }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default BoxItemControl

const styles = StyleSheet.create({
    boxControl: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantity: {
        flexDirection: 'row',

    },
    viewImage: {
        width: 30,
        height: 100,

        justifyContent: 'center',
        alignItems: 'center',
    },
    control: {
        width: 30,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
})