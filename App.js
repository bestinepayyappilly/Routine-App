import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

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
      <Text
        style={{
          color: "#171D1C",
          fontSize: 30,
          fontFamily: "Poppins_300Light",
        }}
      >
        Routinely
      </Text>
      <Text
        style={{
          color: "#5863F8",
          fontSize: 18,
          fontFamily: "Poppins_400Regular",
        }}
      >
        {date.substr(0, 17)}
      </Text>
    </View>
  );
};

const DATA = [
  {
    id: 1,
    name: "Bestine",
    lastName: "Payyappilly",
  },
  {
    id: 2,
    name: "Bestine",
    lastName: "Payyappilly",
  },
  {
    id: 3,
    name: "Bestine",
    lastName: "Payyappilly",
  },
  {
    id: 4,
    name: "Bestine",
    lastName: "Payyappilly",
  },
  {
    id: 5,
    name: "Bestine",
    lastName: "Payyappilly",
  },
  {
    id: 6,
    name: "Bestine",
    lastName: "Payyappilly",
  },
  {
    id: 7,
    name: "Bestine",
    lastName: "Payyappilly",
  },
  {
    id: 8,
    name: "Bestine",
    lastName: "Payyappilly",
  },
  {
    id: 9,
    name: "Bestine",
    lastName: "Payyappilly",
  },
];
// console.log(DATA);

const Body = () => {
  const [items, setItems] = useState({ DATA });
  console.log(items.DATA);
  return (
    <FlatList
      data={items.DATA}
      bounces={true}
      showsVerticalScrollIndicator={false}
      key={"#"}
      keyExtractor={(item) => "#" + item.id}
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor: "#b6a4ed",
            alignItems: "center",
            flex: 2,

            elevation: 0.9,
            margin: 5,
            flexDirection: "row",
            padding: 10,
            borderRadius: 3,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#171D1C",
              fontFamily: "Poppins_300Light",
            }}
          >
            {item.id}
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "#171D1C",
              fontFamily: "Poppins_300Light",
            }}
          >
            {item.name}
          </Text>
        </View>
      )}
    />
  );
};

const News = () => {};

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#EFE9F4" barStyle="dark-content" />
        <Header />
        <View style={{ height: 400, marginVertical: 20 }}>
          <Body />
        </View>
        <View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFE9F4",
    padding: 10,
  },
});
