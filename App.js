import { StatusBar } from 'expo-status-bar';
import { useEffect ,useState} from 'react';
import * as ImagePicker from 'expo-image-picker';

import { StyleSheet, Text, View,Platform, TextInput, alert, Button, Image  } from 'react-native';
import Screen from './apps/components/Screen';

//Navigation Library
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer,useNavigation } from '@react-navigation/native';

const Link=()=>{
  const navigation=useNavigation()
  return(
<Button title="Click" onPress={()=>navigation.navigate("TweetDetails",{id:1})}/>
)}

const Tweets=({navigation})=>(
  <Screen>
    <Text>Tweets</Text>
    <Link/>
  </Screen>
)
const TweetDetails=({route})=>(
  // react native navigation automatically inject its props to all screen component
  //if you are at child component u dont have access to the route so using useRoute Hook 
  <Screen>
    <Text>Tweets Details{route.params .id}</Text>
  </Screen>
)
const Stack=createStackNavigator();
const StackNavigator=()=>(
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} options={({route})=>({title:route.params.id})} />

  </Stack.Navigator>
)
export default function App() {
return (
<NavigationContainer>
  <StackNavigator/>
</NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height:Platform.OS=='android' ?StatusBar.height:0,
    alignItems: 'center',
    justifyContent: 'center',
  },
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