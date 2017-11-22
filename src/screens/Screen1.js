import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Screen1 extends React.Component {
  static navigationOptions = {
    drawerLabel: "Screen One",
    drawerIcon: () =>
      <Image
        source={{ uri: `https://dummyimage.com/60x60/000/fff.jpg&text=1` }}
        style={{ width: 30, height: 30, borderRadius: 15 }}
      />
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>
          I am Screen 1
        </Text>
        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate("screen2")}
        >
          Go to next screen
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
