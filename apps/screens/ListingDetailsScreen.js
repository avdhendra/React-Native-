import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from '../components/AppText';
import ListItem from '../components/ListItem'
export default function ListingDetailsScreen({route}) {
    const listing=route.params;
  return (
    <View>
    <Image style={styles.image} source={listing.image}/>   
   <View style={styles.detailsContainer}>
   <AppText style={styles.title}>{listing.title}</AppText>
   <AppText style={styles.price} >${listing.price}</AppText>
  <View
  style={styles.userContainer}
  >
  <ListItem
   image={require("../assets/jk.jpg")}
   title="J.K Rowling"
   subtitle="5 Listing"
   />
  </View>
   
   </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width:"100%", height:300,
        resizeMode:"contain",
        marginTop:50,
        borderRadius:5
        
            },
            detailsContainer:{
                padding:20,
            },
            title:{
        fontSize:20,
        fontWeight:"500"
        ,marginTop:20
            },
            price:{
                color:colors.green
                ,fontWeight:"bold",
                fontSize:20,
                marginVertical:10
            },
            userContainer:{
                marginVertical:5
            }
})