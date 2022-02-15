import { StyleSheet, Text, View,ScrollView } from "react-native";
import React, { useRef } from "react";
import ImageInput from "./ImageInput";
import colors from "../config/colors";

export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
    const scrollView= useRef()
  
  return (
      <View>
      <ScrollView ref={scrollView} horizontal onContentSizeChange={()=>scrollView.current.scrollToEnd()} >
    <View style={styles.container}>
      {imageUris.map((uri) => (
          <View style={styles.image} key={uri}>
        <ImageInput imageUri={uri } key={uri} onChangeImage={()=>onRemoveImage(uri)} />
     </View>
      ))}
      <ImageInput onChangeImage={(uri)=>onAddImage(uri)}/>
    </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection:"row"
, 
flex:1
  },
  image:{
marginRight:10
  }
});
//by default we have vertical scroll  
//using ref hook we can use the instance of component
//by default the scrollView take whole screen in this case wrap it around the view