import { StatusBar } from 'expo-status-bar';
import { useEffect ,useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import AppNavigator from './apps/navigation/AppNavigator'
import { StyleSheet, Text, View,Platform, TextInput, alert, Button, Image,AsyncStorage  } from 'react-native';
import Screen from './apps/components/Screen';
import {MaterialCommunityIcons} from "@expo/vector-icons"
//Navigation Library
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import navigationTheme from './apps/navigation/navigationTheme';
import * as Location from 'expo-location';
import NetInfo,{useNetInfo}from '@react-native-community/netinfo'

export default function App() {

   const demo=async()=>{try{ await AsyncStorage.setItem('person',JSON.stringify({id:1})
   
   )
const value=await AsyncStorage.getItem('person')
const person=JSON.parse(value)
console.log(person)

}
catch(e){console.log(e)}};
demo()
return null;
}

const styles = StyleSheet.create({
});
//We can useEffect()
//Difference between push and navigate method
/**
 * is that navigate method create only one instance so it on click of button we dont see any change
 * but if we use push it create two instance of the screen
 */
/**
 * navigation prop only available to screen component 
 * Means if <Stack.Screen/> having child component it has no access to that navigation
 */
/**
 * color pass to tabbarIcon set according to the tint of  text so do size
 */
/* 
<NavigationContainer theme={navigationTheme}>
    <AppNavigator/>
   </NavigationContainer>
*/

/**
 NetInfo.fetch().then((netInfo)=> console.log(netInfo)) //only tell once about the network
 NetInfo.addEventListener() tell us about every time the network change
 
 //We this in ComponentDidMount 
const unsubscribe = NetInfo.addEventListener(netInfo=>console.log(netInfo))
//componentWillUnmount in class component
unsubscribe(); //if we dont unsubscribe it it keep querying it and tend to memory leaks
 
 
 */
/**
 Caching :Persistence option
 AsyncStorage: local storage on Browser and it has limit of 6mb which can be exceed 
 SecureStore:2mb limit of
 sqlite: sql query it get wipe out as use delete the app
 */
/**
 * Async is when you dont wait for something to happen you just go on
 * Sync is when you wait for something to happen so you can go on to next
 * Every line of code waits for its previous one to get executed first 
 * and then it gets executed. Asynchronous JavaScript: Asynchronous code 
 * allows the program to be executed immediately where the synchronous 
 * code will block further execution of the remaining code until it 
 * finishes the current one
 */