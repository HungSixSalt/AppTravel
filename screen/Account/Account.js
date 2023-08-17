import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Mainheader/header'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { IconMenu } from '../../Images/Images';


const Account = ({ Navigation }) => {
  const navigation = useNavigation();
  const Switchtab = () => {
    navigation.navigate('Login');
  }
  return (
    <View>
    <Header title="Traveloka" />
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.containerUser}>
            <View style={styles.userImage}>
              <Image style={styles.ImageUser} source={IconMenu.imageUser}/>
            </View>
            <View style={styles.UserName}>
              <Text>HungSixSalt</Text>
            </View>
          </View>
          <Button title='Login here' onPress={Switchtab} />
        </View>
      </View>
    </ScrollView>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: 1000,
  },
  body: {
    paddingHorizontal: 10,
  },
  containerUser:{
    //backgroundColor:'green',
    elevation:2,
    flexDirection:'row',
    height:100,
    marginBottom:5,
  },
  ImageUser:{
    width:80,
    height:50,
  },
  UserName:{
    justifyContent:'center',
  },
  userImage:{
    justifyContent:'center',
  },
})