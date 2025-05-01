import { View, Text, Image, Pressable, StyleSheet } from "react-native"

const MealItem = ({title, imgUri, duration, complexity, affordability}) => {
  return(
    <View style={styles.mealItem}>
      <Pressable android_ripple={{color:"#ccc"}}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri:imgUri}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
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
  },
  details:{
    flexDirection:"row",
    padding:8,
    alignItems:"center",
    justifyContent:"center"
  },
  detailItem:{
    marginHorizontal:4,
    fontSize:12
  }
})