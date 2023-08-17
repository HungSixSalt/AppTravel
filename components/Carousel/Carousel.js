import { FlatList, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
//import {FlatListData} from '../../data/flatlistData'

// const CARD_WIDTH = sizes.width - 100;
// const CARD_HEIGHT = 200;
const { width } = Dimensions.get('screen')
const Carousel = ({ list }) => {

    return (
        <FlatList
            // style={{ flex: 1 }}
            data={list}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={i => i.id}
            renderItem={({ item }) => {
                return (
                    <View>
                        <TouchableOpacity style={styles.container}>
                            {/* cho nay em nen sai` FastImage thay vi Image  */}
                            {/* moi cai thu vien no se co 1 cai code de minh install cai thu vien do ve` */}
                            {/* tai ve xong minh phai tat app mo lai de no cap nhat code native vs package js  */}
                            <Image contentFit='cover' style={styles.card} source={{ uri: item.imageURL }} />
                        </TouchableOpacity>
                    </View>
                )
            }} />
    )
}


const styles = StyleSheet.create({
    card: {
        width: width-20,
        height: width / 2,
    },
    container: {
        marginVertical:10,
    },
})

export default Carousel