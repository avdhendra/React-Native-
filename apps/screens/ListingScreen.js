import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import ListingDetailsScreen from "./ListingDetailsScreen"
import colors from "../config/colors";
import Routes from "../navigation/Routes";
import listingsApi from '../api/listings'

const listings = [
  {
    id: 1,
    title: "Harry Potter and Scocerer stone",
    price: 30,
    image: require("../assets/harry1.jpg"),
    rating: 4.5,
  },

  {
    id: 2,
    title: "Harry Potter and Chamber of Seceret",
    price: 45,
    image: require("../assets/harry2.jpg"),
    rating: 4.8,
  },

  {
    id: 3,
    title: "Harry Potter and Prisoner of Askaban" ,
    price: 60,
    image: require("../assets/harry3.jpg"),
    rating: 4.6,
  },
];

export default function ListingScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing=> listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
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
