import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import MealDetailScreen from './screens/MealDetailScreen'
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <View style={styles.rootScreen}>
        <StatusBar style="light"/>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:"#351401"},
            headerTintColor:"white",
            contentStyle:{
              backgroundColor:"#3f2f25"
            }
          }}>
            <Stack.Screen
              name='MealsCategories'
              component={CategoriesScreen}
              options={{
                title:"All Categories",
                }
              }
            />
            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
            <Stack.Screen name='MealDetail' component={MealDetailScreen} />
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
