import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BookTicket = () => {
    const navigation = useNavigation();
    const backHomePage = () =>{
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.Header}
                colors={['#00c6ff', '#0072ff']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={styles.ToolMenu}>
                    <View style={{width:30,height:30,justifyContent:'center',alignItems:'center',marginRight:10,}}>
                        <FontAwesome name='arrow-left' color={'white'} size={24} onPress={backHomePage} />
                    </View>
                    <Text style={styles.textTitle}>Chuyến bay</Text>
                </View>
                <View style={styles.BodyMenu}>
                    <TouchableOpacity style={styles.buttonItem}>
                        <Text>Một chiều / Khứ hồi</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    )
}

export default BookTicket

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Header: {
        //backgroundColor: '#00c6ff',
        width: '100%',
        paddingTop: 30,
    },
    ToolMenu: {
        flexDirection: 'row',
        paddingHorizontal:10,
        height:40,
        alignItems:'center'
    
    },
    textTitle: {
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
    BodyMenu:{
        backgroundColor:'#00c6ff',
        width:'100%',
        height:80,
    },
    buttonItem:{
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'white'
    }
})