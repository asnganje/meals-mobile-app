import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import MealDetailScreen from './screens/MealDetailScreen'
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import {Ionicons} from "@expo/vector-icons"

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
function DrawerNavigator() {
  return(
    <Drawer.Navigator screenOptions={{
      headerStyle:{backgroundColor:"#351401"},
      headerTintColor:"white",
      sceneStyle:{ backgroundColor:"#3f2f25" },
      drawerContentStyle:{backgroundColor:"#351401"},
      drawerInactiveTintColor:"white"
    }}>
      <Drawer.Screen name='Categories' component={CategoriesScreen} options={
        {
          title:"All Categories",
          drawerIcon:({color, size})=><Ionicons name='list' size={size} color={color}/>
        }
      }/>
      <Drawer.Screen name='Favorites' component={FavoritesScreen} options={{
        drawerIcon:({color, size})=><Ionicons name='star' size={size} color={color}/>
      }}/>
    </Drawer.Navigator>
  )
}

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
              name='Drawer'
              component={DrawerNavigator}
              options={{
                headerShown:false
                }
              }
            />
            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
            <Stack.Screen name='MealDetail' component={MealDetailScreen} options={{
              title:"About the Meal"
            }}/>
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
