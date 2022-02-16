import { StyleSheet, Text, View,ImageBackground, Image } from 'react-native';
import React from 'react';

import colors from "../config/colors"
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import AppButton from '../components/AppButton';
export default function WelcomeScreen({navigation}) {
  return (
   <ImageBackground
   style={styles.background}
   source={require("../assets/books.jpg")}
   >
     <Image  style={styles.logo}source={require("../assets/book-roots.png")}/>
<View style={styles.buttonsContainer}>
<AppButton title="Login" onPress={()=>navigation.navigate("Login")}/>
<AppButton title="Sign Up" color='secondary' onPress={()=>navigation.navigate("Register")}/>
</View>

   </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
   
    logo:{
      width:300,
      height:300,
      position:'absolute',
      top:70,
      borderRadius:300,


    },
    buttonsContainer:{
      padding:20,
      width:"100%"
    }


});

/**
 flexDirection:"row",// primary axishorizontal here justify content is maintain accordingly of flex direction
      justifyContent:"space-evenly", //main`
      alignItems:"center" //align item according to secondary axis
 
 
*/