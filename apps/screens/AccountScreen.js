import { StyleSheet, Text, View,FlateList, FlatList } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItemSeprator from '../components/ListItemSeprator'
const menuItems=[{
    title:"My Listing",
    icon:{
        name:"format-list-bulleted",
        backgroundColor: colors.primary
    }
},
{
    title:"My Message",
    icon:{
        name:"email",
        backgroundColor: colors.secondary
    },
    targetScreen:"Messages"
}]
export default function AccountScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
        <View style={styles.container}>

        <ListItem
        title="Jk"
        subTitle="Jkrowling@gmail.com "
        image={require('../assets/jk.jpg')}
        />
        </View>
        <View style={styles.container}>
           <FlatList
           data={menuItems}
           keyExtractor={item=>item.title}
           ItemSeparatorComponent={ListItemSeprator}
           renderItem={({item})=><ListItem title={item.title} ImageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>} onPress={()=>navigation.navigate(item.targetScreen)}/>}
           />
        </View>
        <ListItem
        title="Log Out"
        ImageComponent={<Icon name="logout" backgroundColor='#ffe66d'/>}
       
        />
    </Screen>
  )
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:colors.light
        ,flex:1
    }
    ,
    container: {
        marginVertical:20
    }
})