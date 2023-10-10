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
  ScrollView,
  Linking,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import MyStatusBar from "./MyStatusBar";
import { DataProvider } from "./DataFile";
import { useRoute } from "@react-navigation/native";

const OverView = ({ navigation }) => {
  const route = useRoute();
  const data = route.params?.param1;

  function openInBrowser() {
    Linking.openURL(data?.link);
  }

  const renderItem = ({ item }) => (
    <View style={[styles.circle, { backgroundColor: item }]}></View>
  );

  return (
    <>
      <View style={{ flex: 1 }}>
        <MyStatusBar backgroundColor="#000000" barStyle="light-content" />
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require("../assets/splash.png")}
            style={styles.imageBackground}
          >
            <Image source={require("../assets/icon.png")} style={styles.icon} />

            <Image source={data?.imageSrc} style={styles.imageScreen} />

            <ScrollView>
              <View>
                <Text style={styles.hintText}>{data?.text}</Text>
              </View>

              <Text style={styles.messageText}>{data?.about}</Text>
              <View style={styles.textContainer}>
                <Text style={[styles.leftText, styles.text]}>Mileage</Text>
                <Text style={[styles.centerText, styles.text]}>Max Power</Text>
                <Text style={[styles.rightText, styles.text]}>
                  Displacement
                </Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={[styles.leftText, styles.yellow]}>
                  {data?.mileage}
                </Text>
                <Text style={[styles.centerText, styles.yellow]}>
                  {data?.maxPower}
                </Text>
                <Text style={[styles.rightText, styles.yellow]}>
                  {data?.Displacement}
                </Text>
              </View>

              <View style={[styles.textContainer, styles.viewMarginTop]}>
                <Text style={[styles.leftText, styles.text]}>Max Speed</Text>
                <Text style={[styles.centerText, styles.text]}>
                  Number of Gears
                </Text>
                <Text style={[styles.rightText, styles.text]}>WheelType</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={[styles.leftText, styles.yellow]}>
                  {data?.maxSpeed}
                </Text>
                <Text style={[styles.centerText, styles.yellow]}>
                  {data?.numberOfGears}
                </Text>
                <Text style={[styles.rightText, styles.yellow]}>
                  {data?.wheelType}
                </Text>
              </View>

              <View>
                <View style={styles.colorLayout}>
                  <Text style={[styles.text, styles.colorText]}>Colors : </Text>
                  <FlatList
                    data={data?.colors}
                    renderItem={renderItem}
                    keyExtractor={(data) => data?.colors}
                    horizontal={true}
                  />
                </View>

                <View style={styles.colorLayout}>
                  <Text style={[styles.text, styles.colorText]}>Price : </Text>
                  <Text
                    style={[
                      styles.text,
                      styles.yellow,
                      styles.centerVerticalAlignment,
                    ]}
                  >
                    {data?.price}
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.bottomView}
                onPress={() => {
                  openInBrowser();
                }}
              >
                <View style={styles.borderLine}>
                  <Text style={styles.mototext}>MORE INFO</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </ImageBackground>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewMarginTop: {
    marginTop: 15,
  },
  centerVerticalAlignment: {
    marginTop: 4,
    marginStart: 10,
    alignSelf: "center",
  },
  colorLayout: {
    marginTop: 15,
    flexDirection: "row",
    marginStart: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "300",
  },
  circle: {
    marginStart: 10,
    width: 25,
    borderRadius: 50,
    height: 25,
  },
  yellow: {
    fontSize: 15,
    textAlign: "center",
    color: "#FF9900",
    fontWeight: "500",
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

  imageScreen: {
    width: "80%",
    height: "40%",
    alignSelf: "center",
    resizeMode: "contain",
  },
  hintText: {
    marginStart: 10,
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },

  colorText: {
    fontSize: 20,
    textAlignVertical: "center",
    fontWeight: "700",
  },

  messageText: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 16,
    marginHorizontal: 10,
    color: "white",
    lineHeight: 24,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 5,
    alignSelf: "center",
  },
  leftText: {
    flex: 1,
    textAlign: "left",
    fontSize: 16, // Adjust the font size as needed
    fontWeight: "bold", // Adjust the font weight or other styles as needed
  },
  centerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 16, // Adjust the font size as needed
    fontWeight: "bold", // Adjust the font weight or other styles as needed
  },
  rightText: {
    flex: 1,
    textAlign: "right",
    fontSize: 16, // Adjust the font size as needed
    fontWeight: "bold", // Adjust the font weight or other styles as needed
  },
  mototext: {
    fontSize: 15,
    marginStart: 15,
    marginEnd: 15,
    color: "#FF9900",
    textAlign: "center",
  },

  borderLine: {
    marginVertical: 25,
    marginHorizontal: 15,
    padding: 13,
    borderWidth: 1,
    borderColor: "#FF9900",
    borderRadius: 2,
  },
});

export default OverView;
