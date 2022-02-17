import { StyleSheet, Text, View, FlatList } from "react-native";
import React,{ useEffect, useState} from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import ListingDetailsScreen from "./ListingDetailsScreen"
import colors from "../config/colors";
import Routes from "../navigation/Routes";
import AppText from '../components/AppText'
import AppButton from "../components/AppButton"
import ActivityIndicator from "../components/ActivityIndicator"
import listingsApi from '../api/listings'



export default function ListingScreen({navigation}) {
  const[listings,setListings]=useState([])
  const[error,setError]=useState(false)
  const[loading,setLoading]=useState(false)
  useEffect(()=>{loadListings()},[])
  const loadListings=async()=>{

    setLoading(true)
    const response=await listingsApi.getListings()
    setLoading(false)


    if(!response.ok) return setError(true) 

    setError(false)
    setListings(response.data)
  }
  return (
    <Screen style={styles.screen}>
     {error &&<>
     <AppText>Couldn't Retrive the Listings</AppText>
     <AppButton title="Retry" onPress={loadListings}/>
     </>
    }
    <ActivityIndicator visible={loading}/>
      <FlatList
        data={listings}
        keyExtractor={listing=> listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            imageUrl={item.images[0].url}
            rating={item.rating}
            onPress={()=>navigation.navigate(Routes.LISTING_DETAILS,item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
    screen: {
        padding:5,
        paddingTop:5,
        backgroundColor:colors.light
    }
});
