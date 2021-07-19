import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import CategoryGridItem from '../components/CategoryGridItem';
import { CATEGORIES } from '../data/mock-data';


const CategoriesScreen = ({ navigation, route }) => {
  const renderItem = data => (
    <CategoryGridItem item={data.item} onSelected={handleSelected} />
  );

  const handleSelected = (item) => {
    navigation.navigate("CategoryBread", {
      categoryID: item.id,
      name: item.name
    });
  }

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
