import {
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  Button,
  Modal,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

export default function AppPicker({
  icon,
  items,
  onSelectItem,
  numberOfColumns=1,
  PickerItemComponent=PickerItem,
  placeholder,
  selectedItem,
  width = "100%",
  
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
            style={styles.down}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <View style={styles.button}>
        <Text  style={styles.buttonText} onPress={()=>setModalVisible(false)}>Close</Text>
        </View>
          
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
          numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
              item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",

    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  down: {
    left: 40,
  },
  text: {
    flex: 1,
    fontSize: 15,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
  button: {
    flex: -1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "dodgerblue",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
  },
});
/**
 * <> </>
 * we can also write React.Fragment
 */
