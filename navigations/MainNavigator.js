import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BreadDetailScreen from '../screens/BreadDetailScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBreadScreen from '../screens/CategoryBreadScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screens name="Home" components={CategoriesScreen} />
            <Stack.Screens name="Bread" components={CategoryBreadScreen} />
            <Stack.Screens name="Detail" components={BreadDetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default MainNavigator;