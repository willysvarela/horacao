import * as React from "react";
import { FlatList, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingTop: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  }
});
const Item = ({ item }) => {
  return <Text style={styles.item}>{item.title}</Text>;
};

const PrayersList = (props) => {
  return (
    <FlatList
      data={props.items}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default PrayersList;
