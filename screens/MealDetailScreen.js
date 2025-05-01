import { View, Text, StyleSheet } from "react-native";

const MealDetailScreen = ({route}) => {
  const mealId = route.params.mealId
  return(
    <View>
      <Text style={styles.mealText}>This is the meals details for {mealId} </Text>
    </View>
  )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  mealText:{
    color:"white"
  }
})