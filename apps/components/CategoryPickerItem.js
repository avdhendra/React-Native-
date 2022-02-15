import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from './AppText'

export default function CategoryPickerItem({item,onPress}) {
  return (
   <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
<Image style={styles.image} source={item.image} />
</TouchableOpacity>
<AppText style={styles.label}>{item.label}</AppText>
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
paddingHorizontal:18,
paddingVertical:15,
alignItems:"center",
width:"33%"
    },
    image:{
width:80,
height:80,
borderRadius:40
    },
    label:{
marginTop:10,
fontSize:15,
textAlign:"center"
    }
})

//In Functional Component 