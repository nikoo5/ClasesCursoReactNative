import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CategoryGridItem from '../components/CategoryGridItem';
import ShowCart from '../components/ShowCart';
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
    <View style={styles.list}>
      <FlatList
        style={styles.list}
        numColumns={2}
        data={breadCategories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <ShowCart navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
});

export default CategoriesScreen;
