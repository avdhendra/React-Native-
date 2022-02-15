import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Screen from "../components/Screen"
import AppTextInput from "../components/AppTextInput"
import AppButton from '../components/AppButton'
import { Formik } from 'formik'
import * as Yup from 'yup'
import AppText from '../components/AppText'
import ErrorMessage from '../components/forms/ErrorMessage'
import AppFormField from '../components/forms/AppFormField'
import SubmitButton from '../components/forms/SubmitButton'
import AppForm from '../components/forms/AppForm'
const validationSchema=Yup.object().shape({
  email:Yup.string().required().email().label("Email"),
  password:Yup.string().required().min(4).label("Password")
})
export default function LoginScreen() {

  return (
    <Screen style={styles.container}>
        <Image
        style={styles.logo}
        source={require("../assets/book-roots.png")}/>
        <AppForm
        initialValues={{email:'',password:''}}
        onSubmit={value=>console.log(value)}
        validationSchema={validationSchema}
        >
 <AppFormField
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
      name='email'
        keyboardType="email-address"
        placeholder="Email"
        textContentType="emailAddress"
        />
       
        <AppFormField
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        name="password"
        placeholder="Password"
        secureTextEntry
        textContentType="password" //work on ios
        />
        
        
        <SubmitButton title="Login"/>
        </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
    logo:{
      width:150,
      height:150,
     alignSelf:"center",
     marginTop:50,
     marginBottom:20,
     borderRadius:75
    },
    container: {
      padding:10
    }
   
})
//as screen in vertical we can align it horizontal 