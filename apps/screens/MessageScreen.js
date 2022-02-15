import { StyleSheet, Text, View, FlatList } from "react-native";
import React,{useState} from "react";

import ListItem from "../components/ListItem";

import Screen from "../components/Screen";
import ListItemSeprator from "../components/ListItemSeprator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
const intialMessage = [
  {
    id: 1,
    title: "T1",
    subtitle: "Helloworld",
    description: "D1",
    image: require("../assets/jk.jpg"),
  },
  {
    id: 2,
    title: "T2",
    subtitle: "good",
    description: "D2",
    image: require("../assets/jk.jpg"),
  },
];
export default function MessageScreen(props) {
 const [messages, setMessages] =useState(intialMessage);
 const[refreshing,setRefreshing] =useState(false); 
 const handleDelete=message=>{
setMessages(messages.filter(m=>m.id!==message.id));

  }
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subtitle}
            image={item.image}
            onPress={()=> console.log("Message Selected",item)}
            renderRightActions={()=><ListItemDeleteAction onPress={()=> handleDelete(item)}/>}
      />
    
  )}
  ItemSeparatorComponent={ListItemSeprator}
  refreshing={refreshing}
  onRefresh={()=>{
    setMessages([
     {id: 2,
      title: "T2",
      subtitle:"hey",
      description: "D2",
      image: require("../assets/jk.jpg"),
     }
    ]) }}
  />
  </Screen>
  )
}

const styles = StyleSheet.create({});
