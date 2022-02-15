import { StyleSheet, Text, View,Image, TouchableWithoutFeedback,Alert } from 'react-native'
import React from 'react'
import colors from '../config/colors'

import * as ImagePicker from 'expo-image-picker'

import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function ImageInput({imageUri,onChangeImage}) {
    const handlePress=()=>{
        if(!imageUri) selectImage()
        else
         Alert.alert('Delete','Are you sure you want to delete this image?',[{
            text:'Yes',onPress:()=>onChangeImage(null)
        },{text:"No"}])
    }
    const selectImage=async ()=>{
        try{
          const result= await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
           
            quality: 0.5,
          })
      if(!result.cancelled) onChangeImage(result.uri)
     
      
        }catch(error){
      console.log("Error reading an Image",error)
        }
      }
  return (
      <TouchableWithoutFeedback onPress={handlePress}>
    <View style={styles.container}>
  {!imageUri && (<MaterialCommunityIcons color={colors.medium} size={30} name="camera"/>)}
    {imageUri &&<Image source={{uri:imageUri}} style={styles.image}/>}
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.light,
        borderRadius:15,
        justifyContent: 'center',
        alignItems: 'center',
        height:100,
        width:100,
        overflow: 'hidden'

    },
    image:{
height:"100%",
width:"100%"
    }
})