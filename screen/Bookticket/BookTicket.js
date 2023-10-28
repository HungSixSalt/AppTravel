import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonItem from './components/ButtonItem';
import Booking from './components/Booking';
import { IconMenu } from '../../Images/Images';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet'

const BookTicket = () => {
    const Tab = [{
        title: 'Một chiều / khứ hồi',
        id: 888
    }, {
        title: 'Nhiều thành phố',
        id: 999
    }]
    const [idTab, setIdTab] = useState(Tab[0]?.id)
    const navigation = useNavigation();
    const backHomePage = () => {
        navigation.goBack();
    }

    return (
        <BottomSheetModalProvider>
        <View style={styles.container}>
            <LinearGradient
                style={styles.Header}
                colors={['#00c6ff', '#0072ff']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={styles.ToolMenu}>
                    <View style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center', marginRight: 10, }}>
                        <FontAwesome name='arrow-left' color={'white'} size={24} onPress={backHomePage} />
                    </View>
                    <Text style={styles.textTitle}>Chuyến bay</Text>
                </View>
            </LinearGradient>
            <ScrollView>
                <LinearGradient
                    style={styles.linearBG}
                    colors={['#00c6ff', '#0072ff']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 1 }}
                />


                <View style={styles.BodyMenu}>

                    <View style={styles.boxItem}>
                        <ButtonItem
                            tab={Tab}
                            setIdTab={setIdTab}
                            isActive={idTab}
                        />
                    </View>
                    {idTab === 888 ? (
                        <Booking />
                    ) : (

                        <View><Text >2</Text></View>
                    )}

                </View>
            </ScrollView>
        </View>
        </BottomSheetModalProvider>
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
        zIndex: 2
    },
    ToolMenu: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: 40,
        //alignItems:'center'
    },
    textTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    BodyMenu: {
        //backgroundColor: '#00c6ff',
        width: '100%',
        height: 1000,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        zIndex: 1,
    },
    linearBG: {
        width: '100%',
        height: 100,
        zIndex: 0,
        position: 'absolute'
    },
    boxItem: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 10,
    }
})