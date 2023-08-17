import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import Home from '../screen/Home/HomePage';
import Header from '../components/Mainheader/header';
import DrawerNavigator from './DrawerNavigation';


const AppNavigation = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}

export default AppNavigation

const styles = StyleSheet.create({})