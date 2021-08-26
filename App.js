import React from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";

const date = new Date().toUTCString();
console.log(date);

const Header = () => {
  return (
    <View
      style={{
        flex: 0,
        margin: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "#121212", fontSize: 30, fontWeight: "700" }}>
        Routine
      </Text>
      <Text style={{ color: "#405DE6", fontSize: 18, fontWeight: "700" }}>
        {date.substr(0, 17)}
      </Text>
    </View>
  );
};

const Body = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: "#EDF2FB",
          height: 50,
          width: "100%",
          margin: 5,
          justifyContent: "center",
          alignSelf: "center",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "#EDF2FB",
          height: 50,
          width: "100%",
          margin: 5,
          justifyContent: "center",
          alignSelf: "center",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "#EDF2FB",
          height: 50,
          width: "100%",
          margin: 5,
          justifyContent: "center",
          alignSelf: "center",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "#EDF2FB",
          height: 50,
          width: "100%",
          margin: 5,
          justifyContent: "center",
          alignSelf: "center",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "#EDF2FB",
          height: 50,
          width: "100%",
          margin: 5,
          justifyContent: "center",
          alignSelf: "center",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "#EDF2FB",
          height: 50,
          width: "100%",
          margin: 5,
          justifyContent: "center",
          alignSelf: "center",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "#EDF2FB",
          height: 50,
          width: "100%",
          margin: 5,
          justifyContent: "center",
          alignSelf: "center",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "#EDF2FB",
          height: 50,
          width: "100%",
          margin: 5,
          justifyContent: "center",
          alignSelf: "center",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "#EDF2FB",
          height: 50,
          width: "100%",
          margin: 5,
          justifyContent: "center",
          alignSelf: "center",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "#EDF2FB",
          height: 50,
          width: "100%",
          margin: 5,
          justifyContent: "center",
          alignSelf: "center",
        }}
      ></View>
    </ScrollView>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#121212" />
      <Header />
      <View style={{ height: 400, marginVertical: 10 }}>
        <Body />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
