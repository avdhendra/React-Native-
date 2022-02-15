import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

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

export default function ListingScreen(props) {
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
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
    screen: {
        padding:20,
        backgroundColor:colors.light
    }
});
