import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderLogin = ({title}) => {
    return (
        <View style={styles.headerLogin}>
            <Text style={styles.textLogin}>{title}</Text>
        </View>
    )
}

export default HeaderLogin

const styles = StyleSheet.create({
    headerLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        flex:1
    },
    textLogin: {
        fontSize: 30,
        fontWeight: 'bold',
    },
})