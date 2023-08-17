import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const FooterLogin = () => {
    return (
        <View style={styles.footerLogin}>
            <Text style={{
                color: 'gray',
            }}
            >Bạn không có tài khoản?</Text>
            <TouchableOpacity >
                <Text style={{
                    fontWeight: 'bold',
                }}
                >Đăng ký ngay</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FooterLogin

const styles = StyleSheet.create({
    footerLogin: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
})