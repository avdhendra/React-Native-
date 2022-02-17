import React, { useEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import * as Yup from "yup";
import AppPicker from "../components/AppPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AppFormPicker from "../components/forms/AppFormPicker";
import FormImagePicker from "../components/forms/FormImagePicker";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "../components/Screen";
import listingApi from '../api/listings'
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";
import * as Progress from 'react-native-progress'
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images:Yup.array().min(1,"Please select at least one image") //Images field is required
});
const categories = [
  {
    backgroundColor: "#fc5c65",
image:require("../assets/popular.jpg"),
    label: "Most Popular",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    image:require("../assets/education.jpg"),
    label: "Academic",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    image:require("../assets/art.jpg"),
    label: "Art",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    image:require("../assets/Technology.jpg"),
    label: "Technology",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    image:require("../assets/fictional.jpg"),
    label: "Fictional",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    image:require("../assets/science.jpg"),
    label: "Science",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    image:require("../assets/Biography.jpg"),
    label: "Biography",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    image:require("../assets/personal.jpg"),
    label: "Personal Growth",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    image:require("../assets/Bussiness.jpg"),
    label: "Business",
    value: 9,
  },
];
export default function ListingEditScreen() {
  const location=useLocation()
const[uploadVisible,setUploadVisible]=useState(false)
const[progress,setProgress]=useState(0)

 const handleSubmit=async(listing)=>{
   setProgress(0)
   setUploadVisible(true)
const result=await listingApi.addListing({...listing,location},progress=>setProgress(progress))

if(!result.ok){
  setUploadVisible(false)
return alert("Could Not Save the Listing")}

 }
  return (
    <Screen style={styles.container}>
      <UploadScreen onDone={()=>setUploadVisible(false)} progress={progress} visible={uploadVisible}/>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images:[]
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images"/>
        <AppFormField maxlength={255} name="title" placeholder="Title" />

        <AppFormField
          keyboardType="numeric"
          maxlength={8}
          name="price"
          width={120}
          placeholder="Price"
        />
        <AppFormField
          keyboardType="numeric"
          maxlength={3}
          name="rating"
          width={120}
          placeholder="Rating"
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
         PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxlength={255}
          multiline
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

//Navigators
/**
 * Stack  Navigator
 * tab navigator
 * Drawer Navigator
 */