import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import { useEffect, useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({route, navigation}) => {
  const catId = route.params.categoryId;
  const categoryTitle = CATEGORIES.find((category)=>category.id === catId).title
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(catId))
  useLayoutEffect(()=> {
    navigation.setOptions({
      title:categoryTitle
    })
  }, [catId, navigation])
  return (
    <MealsList items={displayedMeals}/>
  )
}

export default MealsOverviewScreen;
