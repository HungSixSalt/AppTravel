import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import React from 'react'
import Carousel2 from '../Home/components/Carousel'
import Carousel from '../../components/Carousel/Carousel'
import FlatListData2 from '../../data/flatlistData2'
import FlatListData from '../../data/flatlistData'
import Body from '../Body/Body'
import Header from '../../components/Mainheader/header'

const Home = ({ Navigation }) => {
  return (
    <View>
      <Header title="Traveloka" />
      <ScrollView>
        <View style={styles.container}>
          <Body />
          <View style={styles.content1}>
            <Text style={styles.Text1}>Hướng dẫn</Text>
            <Carousel list={FlatListData} />
          </View>
          <View style={styles.content2}>
            <Text style={styles.Text1}>Các đường bay hấp dẫn</Text>
            <Carousel2 list={FlatListData2} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    height: 1000,
  },
  Text1: {
    fontSize: 20,

  },
  content1: {
    marginVertical: 5,
  },
  content2: {

  }
})