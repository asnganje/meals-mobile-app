import { View, Image, Text, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useEffect, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
// import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealDetailScreen = ({route, navigation}) => {
  const mealId = route.params.mealId
  const selectedMeal = MEALS.find((meal)=>meal.id === mealId)

  // const favMealsContext = useContext(FavoritesContext)
  const dispatch = useDispatch()
  const favMealIds = useSelector((state)=>state.favoriteMeals.ids)
  const mealIsFavorite = favMealIds.includes(mealId)
  
  const changeFavoriteStatusHandler = () => {
    if (!mealIsFavorite) {
      dispatch(addFavorite({id:mealId}))
    } else {
      dispatch(removeFavorite({id:mealId}))
    }
  }  

  useEffect(()=> {
    navigation.setOptions({
      headerRight:()=> {
        return(
          <IconButton icon={mealIsFavorite ? "star" : "star-outline"} color="white" onPress={changeFavoriteStatusHandler}/>
        )
      }
    })
  },[navigation, changeFavoriteStatusHandler])

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