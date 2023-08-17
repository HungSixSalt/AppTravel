import { SafeAreaView, StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react'
import ItemMenu from './components/ItemMenu';
import { IconMenu } from '../../Images/Images';
import { LinearGradient } from 'expo-linear-gradient';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Searching from './components/Searching';


const Header = ({ title }) => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation()
    const abc = () => {
        navigation.navigate('MainDrawer');
    }
    const SwitchBookTicket = ()=>{
        navigation.navigate('BookTicket')
    }
    
    return (
        <LinearGradient
            style={styles.header}
            colors={['#00c6ff', '#0072ff']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
        >

            <View style={[styles.container, { marginTop: insets.top }]}>
                <View style={styles.Menu1}>
                    <FontAwesome name='bars' color={'white'} size={24} onPress={() => { navigation.dispatch(DrawerActions.openDrawer()) }} />
                    <Text style={styles.TextLogo}>{title}</Text>
                    <FontAwesome name='bell' color={'white'} size={24} onPress={() => { }} />
                </View>
                <Searching />
                <View style={styles.Menu2}>
                    <ItemMenu title="Khách sạn" iconMenu={IconMenu.iconHotel} actionType={abc} />
                    <ItemMenu title="Máy bay" iconMenu={IconMenu.iconFlight} actionType={SwitchBookTicket}/>
                    <ItemMenu title="Xe khách" iconMenu={IconMenu.iconBus} />
                    <ItemMenu title="Đánh giá" iconMenu={IconMenu.iconAppreciate} />
                </View>
            </View>
        </LinearGradient>
    )
}



const styles = StyleSheet.create({
    header: {
        borderBottomLeftRadius: 50,
        marginBottom: 5,
    },
    container: {
        height: 'auto',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    Menu1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    TextLogo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },

    Menu2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export default Header;