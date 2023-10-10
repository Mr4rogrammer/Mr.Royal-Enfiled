import React from "react";
import { View, StatusBar, StyleSheet, SafeAreaView } from "react-native";

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  statusBar: {
    height: StatusBar.currentHeight, // To account for the system status bar height
  },
});

export default MyStatusBar;
