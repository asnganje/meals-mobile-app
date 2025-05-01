import { StyleSheet, Text, View } from "react-native";

const SubTitle = ({children}) => {
  return(
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  )
}

export default SubTitle;

const styles = StyleSheet.create({
  subTitle:{
    color:"white",
    fontWeight:"bold",
    fontSize:18,
    margin:4,
    padding:6,
    textAlign:"center"
  },
  subTitleContainer:{
    padding:6,
    marginHorizontal:24,
    marginVertical:4,
    borderBlockColor:"white",
    borderBottomWidth:2
  }
})