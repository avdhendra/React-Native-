import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'
export default function NewListingButton({onPress}) {
  return (
      <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <MaterialCommunityIcons name="plus-circle" color={colors.white}  size={30}/>
    </View>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:colors.primary
        ,borderRadius:35,
        height:70,
        width:70,
        borderRadius:435,
        bottom:25
        ,borderRadius:40,
        borderWidth:5,
        borderColor:colors.white
    }
})