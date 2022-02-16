import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from '../screens/ListingScreen'
import ListingDetailsScreen from '../screens/ListingDetailsScreen'
const Stack=createStackNavigator();
const FeedNavigator=()=> (
 <Stack.Navigator presentation="modal" >
     <Stack.Screen name="Listings" component={ListingScreen} options={{headerShown: false}} />
     <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} options={{headerShown:false}} />
 </Stack.Navigator>
)

export default FeedNavigator;