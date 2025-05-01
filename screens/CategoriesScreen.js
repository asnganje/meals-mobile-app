import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({navigation}) => {
  return(
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item)=>item.id}
      renderItem={(itemData)=> {
        const pressHandler = () => {
          navigation.navigate('MealsOverview', {
            categoryId:itemData.item.id,
          })
        }
        return(
          <CategoryGridTile
            onPress={pressHandler}
            title={itemData.item.title}
            color={itemData.item.color}
          />
        )
      }}
      numColumns={2}
      />
  )
}

export default CategoriesScreen;