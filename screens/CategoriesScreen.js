import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CategoryGridItem from '../components/CategoryGridItem';
import { selectCategory } from '../store/actions/category.actions';


const CategoriesScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const breadCategories = useSelector((state) => state.categories.list);

  const renderItem = data => (
    <CategoryGridItem item={data.item} onSelected={handleSelected} />
  );

  const handleSelected = (item) => {
    dispatch(selectCategory(item.id))
    navigation.navigate("CategoryBread", { name: item.name });
  }

  return (
    <FlatList
      numColumns={2}
      data={breadCategories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
