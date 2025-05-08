import React from "react";
import { View, StatusBar } from "react-native";
import styles from "./Styles";
import Row from "./Row";
import Column from "./Column";
import Box from "./Box";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <Row>
        <Column>
          <Box>#1</Box>
          <Box>#2</Box>
        </Column>
        <Column>
          <Box>#3</Box>
          <Box>#4</Box>
        </Column>
      </Row>
    </View>
  );
}