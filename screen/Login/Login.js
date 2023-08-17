import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import HeaderLogin from './components/HeaderLogin';
import BodyLogin from './components/BodyLogin';
import FooterLogin from './components/FooterLogin';


const Login = () => {
    
    return (
        <LinearGradient
            style={styles.backgroundLN}
            colors={['#00c6ff', '#0072ff']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
        >
            <View style={styles.container}>
                <HeaderLogin title={'Đăng nhập'}/>
                <BodyLogin />
                <FooterLogin />
            </View>
        </LinearGradient>
    )
}

export default Login

const styles = StyleSheet.create({
    backgroundLN: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'white',
        paddingHorizontal:20,
        paddingVertical:20,
        width: '95%',
        height: '95%',
        borderRadius: 10,
    },

})