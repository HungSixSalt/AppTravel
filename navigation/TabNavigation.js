import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Home from '../screen/Home/HomePage';
import Save from '../screen/Save/SaveScreen';
import Account from '../screen/Account/Account';
import Notification from '../screen/Notification/Notification';
import Utilities from '../screen/Utilities/utilities';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}
  >
    <View style={{
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: 'white',
      elevation: 4,
    }}>
      {children}
    </View>
  </TouchableOpacity>
);

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          height: 60,
        }
      }}
    >
      <Tab.Screen name='HomePage' component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesome name='home' color={'black'} size={24}
              style={{
                color: focused ? '#0072ff' : '#748c94',
              }}
            />
            <Text style={{
              color: focused ? '#0072ff' : '#748c94',
            }}
            >
              Trang chủ
            </Text>
          </View>
        )
      }} />
      <Tab.Screen name='Save' component={Save} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesome name='save' color={'black'} size={24}
              style={{
                color: focused ? '#0072ff' : '#748c94',

              }}
            />
            <Text style={{
              color: focused ? '#0072ff' : '#748c94',
            }}
            >
              Đã lưu
            </Text>
          </View>
        )
      }} />
      <Tab.Screen name='Utilities' component={Utilities} options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesome name='plus' color={'black'} size={24}
            style={{
              color: focused ? '#0072ff' : '#748c94',
            }}
          />
        ),
        tabBarButton: (props) => (
          <CustomTabBarButton {...props} />
        )
      }} />
      <Tab.Screen name='Notification' component={Notification} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesome name='envelope' color={'black'} size={24}
              style={{
                color: focused ? '#0072ff' : '#748c94',
              }}
            />
            <Text style={{
              color: focused ? '#0072ff' : '#748c94',
            }}
            >
              Thư
            </Text>
          </View>
        )
      }} />
      <Tab.Screen name='Account' component={Account} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesome name='user' color={'black'} size={24}
              style={{
                color: focused ? '#0072ff' : '#748c94',
              }}
            />
            <Text style={{
              color: focused ? '#0072ff' : '#748c94',
            }}
            >
              Tài khoản
            </Text>
          </View>
        )
      }} />
    </Tab.Navigator>
  )
}

export default TabNavigation;