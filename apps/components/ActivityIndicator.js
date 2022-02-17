import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
export default function ActivityIndicator({visible=false}) {
    if(!visible) {return null}
  return (
   <LottieView autoPlay loop source={require('../assets/animation/lf30_editor_hxlmdcsj.json')}/>
  )
}

const styles = StyleSheet.create({})