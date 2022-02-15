import { StyleSheet, Text, View,Image, Platform } from 'react-native'
import React from 'react'
import AppText from './AppText'

import colors from '../config/colors.js'
import ListItem from './ListItem'
export default function ListingDetailsScreen() {
  return (
    <View>
    <Image style={styles.image} source={require("../assets/harry.jpg")}/>   
   <View style={styles.detailsContainer}>
   <AppText style={styles.title}>Harry Potter and Prisnor of Askaban</AppText>
   <AppText style={styles.price} >$30</AppText>
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
        marginVertical:50
    }
})