import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";

import AppText from "./AppText";
export default function ListItem({
  title,
  subTitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
        {image&&  <Image source={image} style={styles.image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
           { subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25}/>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems:"center",
    backgroundColor:colors.white
    ,padding:10
  },
  detailsContainer: {
marginLeft:10,
justifyContent: "center",
flex:1
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft:10,
    
    
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
/**
    {image&&  <Image source={image} style={styles.image} />}
    if there is image then set width and height for it other wise no
 */