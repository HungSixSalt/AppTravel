import { StyleSheet, Text, View } from 'react-native'
import React, { useState,useContext } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { Alert } from 'react-native';
import { AuthContext } from '../../../context/AuthContext';

const BodyLogin = () => {
    const [Show, setShow] = useState(false);
    const [Visible, setVisible] = useState(true);
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const {login} = useContext(AuthContext);

    const HandleLogin = () => {
        if(Username.length ==0 || Password.length==0){
            Alert.alert('Thông báo', 'Thông tin không được bỏ trống', [
                {
                  text: 'Cancel',
                  onPress: () => {},
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => {}},
              ]);
        }else{
            login();
        }
        
    }
    const onChangeUsername = (value) =>{
        setUsername(value)
    }
    const onChangePassword = (value) =>{
        setPassword(value)
    }
    

    return (
        <View style={styles.bodyLogin}>
            <View style={styles.topApp}>
                <Text style={{ color: 'black', fontSize: 16, letterSpacing: 0.5, }}>UserName</Text>
                <View style={styles.styleTextInput}>
                    <View style={styles.styleIcon}>
                        <FontAwesome name='user' color={'#2492D4'} size={24} />
                    </View>
                    <TextInput style={styles.textInput} placeholder='Tài khoản' 
                        value={Username}
                        onChangeText={onChangeUsername}
                    />
                </View>
                
                <Text style={styles.TextName}>Password</Text>
                <View style={styles.styleTextInput}>
                    <View style={styles.styleIcon}>
                        <FontAwesome name='lock' color={'#2492D4'} size={24} />
                    </View>
                    <TextInput style={styles.textInput} placeholder='Mật khẩu' secureTextEntry={Visible} 
                        value={Password}
                        onChangeText={onChangePassword}
                    />
                    <View style={styles.styleIcon}>
                        <FontAwesome name={Show === false ? 'eye' : 'eye-slash'} color={'#2492D4'} size={24}
                            onPress={() => {
                                setShow(!Show)
                                setVisible(!Visible)
                            }}
                        />
                    </View>
                </View>
                <View style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    marginVertical: 10,
                }}>
                    <TouchableOpacity><Text>Quên mật khẩu</Text></TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{
                        marginVertical: 0,
                    }}
                    onPress={HandleLogin}
                >
                    <LinearGradient
                        style={styles.buttonLogin}
                        colors={['#00c6ff', '#0072ff']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, }}>Đăng nhập</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomApp}>
                <Text >Đăng nhập bằng</Text>
                <View style={styles.containerIcon}>
                    <TouchableOpacity style={styles.iconLogo}>
                        <FontAwesome name='facebook' color={'#2492D4'} size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconLogo}>
                        <FontAwesome name='google' color={'#F4511E'} size={24} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default BodyLogin

const styles = StyleSheet.create({
    bodyLogin: {
        width: '100%',
        flex: 6,
    },
    topApp: {
        width: '100%',
        flex: 5,
        justifyContent: 'center',
    },
    bottomApp: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    iconLogo: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    containerIcon: {
        flexDirection: 'row',
    },
    styleTextInput: {
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    textInput: {
        width: '80%',
        height: 40,
    },
    styleIcon: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextName: {
        marginTop: 20,
        letterSpacing: 0.5,
        color: 'black', fontSize: 16,
    },
    buttonLogin: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
    }
})