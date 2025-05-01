import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <View style={styles.rootScreen}>
        <StatusBar style="light"/>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='MealsCategories' component={CategoriesScreen} />
            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
    marginVertical:30
  }
})
