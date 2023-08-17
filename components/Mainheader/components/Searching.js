import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Searching = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Test')}>
      <View style={styles.textInputStyle}>
        <View style={styles.boxIcon}>
          <FontAwesome name='search' color={'black'} size={18} onPress={() => { }} />
        </View>
        <Text>Tìm kiếm địa điểm</Text>
      </View >
    </TouchableOpacity>
  )
}

export default Searching

const styles = StyleSheet.create({
  textInputStyle: {
    height: 35,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    //justifyContent:'center',
    alignItems: 'center',
  },
  boxIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 35,
  }
})

