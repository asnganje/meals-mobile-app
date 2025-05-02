import { FlatList, StyleSheet, View } from "react-native"
import MealItem from "./MealItem"

const MealsList = ({items}) => {
  
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
        data={items}
        renderItem={mealsDisplay}
      />
    </View>
  )
}

export default MealsList;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:16
  }
})