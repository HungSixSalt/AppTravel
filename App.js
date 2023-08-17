import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Iamge } from 'react-native';
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './components/Mainheader/header'
import { LinearGradient } from 'expo-linear-gradient';
import Body from './screen/Body/Body'
import Carousel from './components/Carousel/Carousel'
import FlatListData from './data/flatlistData';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import TabNavigation from './navigation/TabNavigation';
import AppNavigation from './navigation/AppNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/Home/HomePage';
import { AuthProvider } from './context/AuthContext';



const Stack = createStackNavigator();
export default function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider style={styles.container}>
        <AppNavigation />
      </SafeAreaProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  body: {
    marginVertical: 5,
    paddingHorizontal: 10,
  }
});
