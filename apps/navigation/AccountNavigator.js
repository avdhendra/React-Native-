import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from '../screens/AccountScreen';
import MessageScreen from '../screens/MessageScreen'
const Stack=createStackNavigator();
const FeedNavigator=()=> (
 <Stack.Navigator >
     <Stack.Screen name="Account1" component={AccountScreen} options={{headerShown: false}} />
     <Stack.Screen name="Messages" component={MessageScreen} />
 </Stack.Navigator>
)

export default FeedNavigator;