import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, ScrollView, FlatList } from "react-native";
import { Container, List, Text, Button, Icon } from "native-base";
import * as SQLite from "expo-sqlite";

import GroupItem from "./../../components/GroupItem";
import PrayersList from "./../../components/PrayersList";
// import { Container } from './styles';

const db = SQLite.openDatabase("database.db");

const HomeScreen = (props) => {
  const [prayers, setPrayers] = useState([]);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Button
          iconLeft
          transparent
          onPress={() => props.navigation.navigate("AddPrayer")}
        >
          <Icon name="add" />
          <Text>NOVA</Text>
        </Button>
      )
    });
  }, []);

  const fetchPrayers = () => {
    db.transaction((tx) => {
      tx.executeSql(`select * from oracao`, [], (_, { rows }) => {
        console.log(JSON.stringify(rows), "test");
        setPrayers(rows._array);
      });
    });
  };

  const addPrayer = () => {
    db.transaction((tx) => {
      try {
        tx.executeSql(
          "insert into oracao(title, description, confirmed) values(?,?, ?); ",
          ["Oracao", "Descrição", false]
        );
        fetchPrayers();
      } catch (e) {
        console.log(e.message);
      }
    });
  };
  return (
    <Container>
      <View>
        <ScrollView horizontal style={{ marginTop: 10 }}>
          <View style={{ marginLeft: 10 }}>
            <GroupItem name="GA" qty={1} color="#e74c3c" />
          </View>
          <View style={{ marginLeft: 10 }}>
            <GroupItem name="Jovens" qty={5} color="#27ae60" />
          </View>
          <View style={{ marginLeft: 10 }}>
            <GroupItem name="Família" qty={5} color="#9b59b6" />
          </View>
        </ScrollView>
      </View>
      <View style={{ marginTop: 10 }}>
        <PrayersList items={prayers} />
      </View>
    </Container>
  );
};

export default HomeScreen;
