import React, { useState, useLayoutEffect, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Text,
  Button,
  Form,
  Item,
  Input,
  Textarea,
  Icon,
  Toast
} from "native-base";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("database.db");

const AddPrayerScreen = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [saved, setSaved] = useState(false);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Button transparent onPress={() => savePrayer()}>
          <Icon name="check" />
          <Text>Salvar</Text>
        </Button>
      )
    });
  }, []);

  const savePrayer = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO oracao(title, description, date_created, confirmed) values(?,?,?) ",
        [title, description, false]
      );
      setSaved(true);
      Toast.show({
        text: "Pedido Salvo!",
        buttonText: "Okay",
        type: "success"
      });
    });
  };

  return (
    <Container style={{ paddingHorizontal: 5, paddingTop: 10 }}>
      <Text style={{ color: "#bbb", fontSize: 14 }}>20 de Abril de 2019</Text>
      <Form>
        <Item>
          <Input
            placeholder="Pedido"
            style={{ fontSize: 20 }}
            placeholderTextColor="#ccc"
            value={title}
            onChangeText={(value) => setTitle(value)}
          />
        </Item>
        <Item>
          <Textarea
            rowSpan={5}
            placeholder="Detalhes"
            placeholderTextColor="#ccc"
            value={description}
            onChangeText={(value) => setDescription(value)}
          />
        </Item>
      </Form>
    </Container>
  );
};

AddPrayerScreen.propTypes = {};

export default AddPrayerScreen;
