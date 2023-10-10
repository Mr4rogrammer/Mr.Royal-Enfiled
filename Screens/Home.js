import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import MyStatusBar from "./MyStatusBar";
import { DataProvider } from "./DataFile";
const Home = ({ navigation }) => {
  const { data, updateData } = DataProvider();
  const [value, setValue] = useState({
    key: "1",
    text: "Interceptor 650",
    selected: true,
    hint: "Easy Got Back",
    message:
      "The quintessential modern classic roadster - that's a blast to ride on twisty back roads, highways, or the urban jungle, with equal ease and grace, for novices and experienced riders alike.",
    imageSrc: require("../assets/inter.png"),
    mileage: "45 kmpl",
    maxPower: "29.5 bhp",
    Displacement: "499 cc",
    colors: ["#FF0000", "#000000", "#C0C0C0", "#FFA500"],
    price: "₹3,50,000",
    maxSpeed: "170 km/h",
    numberOfGears: "6",
    wheelType: "Spoke",
    link: "https://www.royalenfield.com/in/en/motorcycles/interceptor/",
    about:
      "The Interceptor 650 is a modern classic roadster known for its timeless design and powerful performance. It's a perfect choice for riders looking for an exhilarating experience on various terrains.",
  });

  const toggleSelectedItem = (keyToUpdate) => {
    const updatedData = data.map((item) => {
      if (item.key === keyToUpdate) {
        return { ...item, selected: true };
      } else {
        return { ...item, selected: false };
      }
      return item;
    });
    updateData(updatedData);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        toggleSelectedItem(item.key);

        setValue({
          key: item.key,
          imageSrc: item.imageSrc,
          hint: item.hint,
          text: item.text,
          message: item.message,
          mileage: item.mileage,
          Displacement: item.Displacement,
          maxPower: item.maxPower,
          colors: item.colors,
          price: item.price,
          maxSpeed: item.maxSpeed,
          numberOfGears: item.numberOfGears,
          wheelType: item.wheelType,
          about: item.about,
          link: item.link,
        });
      }}
    >
      <Text style={[styles.text, item.selected ? styles.selected : item.text]}>
        {item.text.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
  return (
    <>
      <View style={{ flex: 1 }}>
        <MyStatusBar backgroundColor="#000000" barStyle="light-content" />
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require("../assets/splash.png")} // Replace with the path to your image
            style={styles.imageBackground}
          >
            <Image source={require("../assets/icon.png")} style={styles.icon} />

            <View style={styles.tabView}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(data) => data.key}
                horizontal={true}
              />
            </View>

            <Image source={value.imageSrc} style={styles.imageScreen} />

            <View>
              <Text style={styles.hintText}>{value.hint}</Text>
            </View>

            <View>
              <Text style={styles.messageText}>{value.message}</Text>
            </View>

            <TouchableOpacity
              style={styles.bottomView}
              onPress={() => {
                navigation.navigate("OverView", {
                  param1: value,
                });
              }}
            >
              <View>
                <View style={styles.borderLine}>
                  <Text style={styles.mototext}>SPECIFICATION</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    marginStart: 15,
    marginEnd: 15,
    color: "white",
    textAlign: "center",
    lineHeight: 30,
  },

  selected: {
    color: "red",
  },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },

  icon: {
    alignSelf: "center",
    resizeMode: "contain",
    height: "10%",
    width: "30%",
  },
  tabView: {
    height: 40,
  },

  imageScreen: {
    width: "80%",
    height: "40%",
    alignSelf: "center",
    resizeMode: "contain",
  },
  hintText: {
    marginStart: 10,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  messageText: {
    marginTop: 25,
    fontSize: 16,
    marginHorizontal: 10,
    color: "white",
    lineHeight: 24,
  },

  mototext: {
    fontSize: 15,
    marginStart: 15,
    marginEnd: 15,
    color: "#FF9900",
    textAlign: "center",
  },

  borderLine: {
    marginHorizontal: 15,
    padding: 13,
    borderWidth: 1,
    borderColor: "#FF9900",
    borderRadius: 2,
  },

  bottomView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 20,
    height: 50,
  },
});

export default Home;
