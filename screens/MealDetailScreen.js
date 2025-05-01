import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

const MealDetailScreen = ({route}) => {
  const mealId = route.params.mealId
  const selectedMeal = MEALS.find((meal)=>meal.id === mealId)
  return(
    <ScrollView style={styles.rootContainer}>
      <Image source={{uri:selectedMeal.imageUrl}}
        style={styles.image}
      />
      <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
          textStyle={styles.detailText}
        />
      <View style={styles.listContainer}>
        <SubTitle>Ingredients</SubTitle>
        <List items = {selectedMeal.ingredients}/>
        <SubTitle>Steps</SubTitle>
        <List items = {selectedMeal.steps}/>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1
  },
  image:{
    width:"80%",
    marginHorizontal:"auto",
    marginTop:20,
    height:200
  },
  title: {
    fontWeight:"bold",
    fontSize:24,
    margin:8,
    textAlign:"center",
    color:"white"
  },
  detailText:{
    color:"white",
    marginVertical:5
  },
  listContainer:{
    maxWidth:"80%",
    marginHorizontal:"auto"
  }
}) 