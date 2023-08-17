import * as React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screen/Home/HomePage'
import Account from '../screen/Account/Account'
import TabNavigation from './TabNavigation';
import Index from '../screen/Test';
import StackNavigation from './StackNavigation';

import CustomDrawer from '../components/CustomHeader/CustomDrawer';
import BookTicket from '../screen/Bookticket/BookTicket';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      
    >
      {/* <Drawer.Screen name="MainTab" component={TabNavigation} options={() => {
        return {
          headerShown: false,
        };
      }} /> */}
      <Drawer.Screen name="MainStack" component={StackNavigation} options={() => {
        return {
          headerShown: false,
        };
        
      }} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;