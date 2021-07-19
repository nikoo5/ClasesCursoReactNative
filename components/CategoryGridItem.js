import React from 'react'
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

const CategoryGridItem = ({ item, onSelected }) => {
    const TouchableComponent =
      Platform.OS == "android" && Platform.Version >= 21
        ? TouchableNativeFeedback
        : TouchableOpacity;    

    return (
      <View style={styles.gridItem}>
        <TouchableComponent onPress={() => onSelected(item)} style={{backgroundColor: "red"}}>
          <View style={{ ...styles.container, backgroundColor: item.color }}>
            <Text style={styles.title}>{item.name}</Text>
          </View>
        </TouchableComponent>
      </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex:1,
        borderRadius: 6,
        margin: 15,
        height: 150
    },
    container: {
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding:8,
    },
    title: {
        fontFamily: 'open-sans-bold',
        textAlign: 'right'
    }
})

export default CategoryGridItem;