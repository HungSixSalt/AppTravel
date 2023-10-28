import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ButtonItem = ({ tab, setIdTab, isActive }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {
                tab?.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={[
                                isActive === item.id ? styles.buttonItemActive : styles.buttonItem
                            ]}
                            onPress={() => {
                                setIdTab(item.id)
                            }}
                        >
                            <Text style={[
                                isActive === item.id ? styles.textTitleActive : styles.textTitle
                            ]}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

export default ButtonItem

const styles = StyleSheet.create({
    buttonItem: {
        height: 40,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    buttonItemActive: {
        backgroundColor: 'white',
        height: 40,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    textTitleActive: {
        color: '#00c6ff',
        fontWeight: 'bold',
    },
    textTitle: {
        color: 'white',
        fontWeight: 'bold',
    },
})