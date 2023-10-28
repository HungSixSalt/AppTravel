import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CheckBox } from '@rneui/themed'

const CheckedItem = ({checked,actionType,titleSeatClass1,titleSeatClass2}) => {
    return (
        <View style={styles.SeatClass}>
            <CheckBox
                checked={checked}
                onPress={actionType}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
            />
            <View style={styles.titleSeatClass}>
                <Text style={{ fontSize: 13 }}>{titleSeatClass1}</Text>
                <Text style={{ fontSize: 13, color: 'gray' }}>{titleSeatClass2}</Text>
            </View>
        </View>
    )
}

export default CheckedItem

const styles = StyleSheet.create({
    SeatClass: {
        flexDirection: 'row',
    },
    titleSeatClass: {
        justifyContent: 'center',
    }
})