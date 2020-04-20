import PropTypes from "prop-types";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 150,
    borderRadius: 10,
    justifyContent: "space-around",
    paddingLeft: 10
  },
  title: {
    color: "white",
    fontSize: 18
  },
  qty: { color: "white" }
});

const GroupItem = (props) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: props.color ? props.color : "#000" }
      ]}
    >
      <Text style={styles.title}>{props.name}</Text>
      <Text style={styles.qty}>{props.qty} Pedidos</Text>
    </View>
  );
};

GroupItem.propTypes = {
  name: PropTypes.string,
  qty: PropTypes.number
};

GroupItem.defaultProps = {
  name: "",
  qty: 0
};

export default GroupItem;
