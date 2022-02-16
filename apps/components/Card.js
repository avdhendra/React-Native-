import { StyleSheet, Text, View,Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react';
import colors from '../config/colors';
import AppText from "./AppText"
import {MaterialCommunityIcons} from '@expo/vector-icons'


export default function Card({title,subtitle,image,rating,onPress}) {
  return (
      <TouchableWithoutFeedback  onPress={onPress}>
    <View>
         <View style={styles.card}>
     <Image style={styles.image} source={image}/>
     
    <View style={styles.detailcontainer}>
    <AppText style={styles.title}>{title}</AppText>
    <AppText style={styles.subtitle}>{subtitle}</AppText>
    <View style={styles.rate}>
    <AppText style={styles.rating}>{rating}</AppText>
    <View style={styles.material}>
    <MaterialCommunityIcons name='star' color={colors.white} size={20} style={[styles.icon,{marginLeft:2,marginTop:1}]}/>
    </View>
    
    
    
    </View>
    
    </View>
 
    </View>
    </View>
    </TouchableWithoutFeedback>

  )
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 15,
        backgroundColor:colors.white,
        marginBottom:20,
        
    },
    image:{
width:"100%",
height:250,
resizeMode:"contain"
,marginTop:10
    },
    detailcontainer:{ 
        padding:20
    },
    title:{
        marginBottom:7
    },
    subtitle:{
        color:colors.green,
        fontWeight: "bold"
    },
rate:{
position:"absolute",
backgroundColor:colors.gold
,paddingLeft:2
,width:48
,height:25
,marginTop:50
,marginLeft:280,
borderRadius:6,
},
  material:{
      position:"absolute",
marginLeft:25,

  }
,rating:{
    fontSize:15,
    fontWeight:"bold",
    marginLeft:2,
    color:colors.green
}
})