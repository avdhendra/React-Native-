import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function AppButton({ title, onPress,color ="primary"}) {
  return (
    <TouchableOpacity  style={[styles.button,{backgroundColor:colors[color]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: "100%",
   padding: 15,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical:10
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
