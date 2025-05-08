import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
    backgroundColor: "ghostwhite",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },
  column: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },
  box: {
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "darkslategray",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    margin: 5,
  },
  boxText: {
    color: "darkslategray",
    fontWeight: "bold",
  },
});