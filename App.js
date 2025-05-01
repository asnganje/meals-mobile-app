import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
      <View style={styles.rootScreen}>
        <StatusBar style="light"/>
        <CategoriesScreen />
      </View>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
    marginVertical:30
  }
})
