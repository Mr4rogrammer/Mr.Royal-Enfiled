import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { StackActions } from "@react-navigation/native";
import MyStatusBar from "./MyStatusBar";

const SplashScreen = ({ navigation }) => {
  const removeSplashScreenFromStack = () => {
    navigation.dispatch(StackActions.replace("Home"));
  };
  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar backgroundColor="#000000" barStyle="light-content" />

      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/splash.png")} // Replace with the path to your image
          style={styles.imageBackground}
        >
          <Image source={require("../assets/icon.png")} style={styles.icon} />
          <Text style={styles.text}>
            Royal Enfield - We Have Been Creating {"\n"}Modern Classics Since
            1901.{"\n"}Manufacturers Of The Bullet, Classic,{"\n"}Interceptor,
            Continental GT, Himalayan{"\n"}and Thunderbird series.
          </Text>

          <View style={styles.bottomView}>
            <TouchableOpacity
              onPress={() => {
                removeSplashScreenFromStack();
                navigation.navigate("Home");
              }}
            >
              <View style={styles.borderLine}>
                <Text style={styles.mototext}>MOTOCYCLES</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },

  icon: {
    alignSelf: "center",
    resizeMode: "contain",
    height: "25%",
    width: "70%",
  },

  text: {
    fontSize: 15,
    marginStart: 15,
    marginEnd: 15,
    color: "white",
    textAlign: "center",
    lineHeight: 30,
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
    borderColor: "#FF9900", // Border color
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

export default SplashScreen;
