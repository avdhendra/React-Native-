import { StatusBar } from 'expo-status-bar';
import { useEffect ,useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import AppNavigator from './apps/navigation/AppNavigator'
import { StyleSheet, Text, View,Platform, TextInput, alert, Button, Image  } from 'react-native';
import Screen from './apps/components/Screen';
import {MaterialCommunityIcons} from "@expo/vector-icons"
//Navigation Library
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import navigationTheme from './apps/navigation/navigationTheme';
import * as Location from 'expo-location';
import NetInfo from '@react-native-community/netinfo'

export default function App() {
    //We this in ComponentDidMount 
const unsubscribe = NetInfo.addEventListener(netInfo=>console.log(netInfo))
//componentWillUnmount in class component
unsubscribe();
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
 */