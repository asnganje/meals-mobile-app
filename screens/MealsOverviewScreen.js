import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

const MealsOverviewScreen = ({route, navigation}) => {
  const catId = route.params.categoryId;
  const categoryTitle = CATEGORIES.find((category)=>category.id === catId).title
  
  useLayoutEffect(()=> {
    navigation.setOptions({
      title:categoryTitle
    })
  }, [catId, navigation])
  
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(catId))
  const mealsDisplay = (itemData) => {
    const mealItemProps = {
      id:itemData.item.id,
      title:itemData.item.title,
      imageUrl:itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability
    }
    return(
      <MealItem
        {...mealItemProps}
      />
    )
  }
  return(
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={mealsDisplay}
      />
    </View>
  )
}

export default MealsOverviewScreen;
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:16
  }
})