import { View, Text, Image, Pressable, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import MealDetails from "./MealDetails";

const MealItem = ({id, title, imgUri, duration, complexity, affordability}) => {
  const navigation = useNavigation();
  const navigationHandler=() =>{
    navigation.navigate('MealDetail', {
      mealId:id
    })
  }

  return(
    <View style={styles.mealItem}>
      <Pressable onPress={navigationHandler} android_ripple={{color:"#ccc"}}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri:imgUri}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem;

const styles = StyleSheet.create({
  innerContainer:{
    borderRadius:8,
    overflow:"hidden"
    },
  mealItem: {
    margin:16,
    borderRadius:8,
    overflow:"hidden",
    backgroundColor:"white",
    elevation:4
  },
  image:{
    width:"100%",
    height:200
  },
  title:{
    fontWeight:"bold",
    textAlign:"center",
    fontSize:20,
    margin:8
  }
})