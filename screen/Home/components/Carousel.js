import { FlatList, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
//const { width } = Dimensions.get('screen');
const Carousel2 = ({list}) => {
  return (
    <FlatList
            // style={{ flex: 1 }}
            data={list}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={i => i.id}
            renderItem={({ item }) => {
                return (
                        <TouchableOpacity style={[styles.container]}>
                            <View style={styles.card}>
                                <Image contentFit='fill' style={styles.image}  source={{ uri: item.imageURL }} >
                                </Image>
                                <View style={styles.price}>
                                    <Text style={styles.textPrice}>{item.price}</Text>
                                </View>
                            </View>
                            <View style={styles.content}>
                                <Text style={styles.textTitle}>{item.title}</Text>
                                <Text style={styles.textDate}>{item.date}</Text>
                            </View>
                        </TouchableOpacity>
                )
            }} />
  )
}



const styles = StyleSheet.create({
    card: {
        //backgroundColor:'red'
        borderRadius:10,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        marginRight:20,
    },
    container: {
        marginVertical:10,  
    },
    image:{
        width:150,
        height:150,
        borderRadius:10,
        //borderWidth:1,
        //borderColor:'#00c6ff'
        elevation:10,
    },
    content:{

    },
    price:{
        backgroundColor:'red',
        position:'absolute',
        backgroundColor:'#4AB2D4',
        alignItems:'flex-end',
        justifyContent:'center',    
        borderBottomEndRadius:10,
        borderBottomLeftRadius:10,
        width:'100%',

    },
    textPrice:{
        color:'white',
        fontWeight:'bold',
        marginRight:5,
    },
    textTitle:{
        fontWeight:'bold',
        fontSize:16,
    },
    textDate:{
        color:'gray'
    },
})
export default Carousel2