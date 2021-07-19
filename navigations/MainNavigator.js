import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BreadDetailScreen from '../screens/BreadDetailScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBreadScreen from '../screens/CategoryBreadScreen';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor:
                Platform.OS === "android" ? Colors.primaryColor : "",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTintColor:
              Platform.OS === "android" ? "white" : Colors.primaryColor,
          }}
        >
          <Stack.Screen
            name="Home"
            options={{ title: "Inicio" }}
            component={CategoriesScreen}
          />
          <Stack.Screen
            name="CategoryBread"
            options={({ route }) => ({ title: route.params.name })}
            component={CategoryBreadScreen}
          />
          <Stack.Screen
            name="DetailBread"
            options={{ title: "Detalles" }}
            component={BreadDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default MainNavigator;