import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const apiURL = "https://jsonplaceholder.typicode.com/posts";
const SearchBar = () => {
    const [filterdData, setfilterdData] = useState([])
    const [masterData, setmasterData] = useState([])

    useEffect(() => {
        fetchPost();
        return () => {

        }
    }, [])
    const fetchPost = () => {
        
        fetchPost(apiURL)
            .then((response) => response.json())
            .then((responseJson) => {
                setfilterdData(responseJson);
                setmasterData(responseJson);
            }).catch((error) => {
                console.error(error);
            })
    }

    const ItemView = ({item})=> {
        return(
            <Text style={styles.itemStyle}>
                {item.id}{'. '}{item.title.toUpperCase()}
            </Text>
        )
    }

    const ItemSeparatorView = () =>{
        return(
            <View style={{height:0.5, width:'100%',backgroundColor:'#c8c8c8'}}>

            </View>
        )
    }

    return (
        <View style={{flex:1,}}>
            
            <FlatList
                data={filterdData}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorComponent}
                renderItem={ItemView}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    itemStyle:{
        padding:10,
    },
    
})