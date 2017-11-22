import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationActions } from "react-navigation";

export default class DrawerContainer extends React.Component {
  logout = () => {
    // This will reset back to loginStack
    // https://github.com/react-community/react-navigation/issues/1127
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null, // black magic
      actions: [NavigationActions.navigate({ routeName: "loginStack" })]
    });
    this.props.navigation.dispatch(actionToDispatch);
  };

  render() {
    const { navigation } = this.props;
    const selectedIndex = this.props.activeItemKey;

    return (
      <View style={styles.container}>
        <Text
          onPress={() => navigation.navigate("drawer1")}
          style={
            selectedIndex === "drawer1"
              ? styles.uglyDrawerItemSelected
              : styles.uglyDrawerItem
          }
        >
          Drawer 1
        </Text>
        <Text
          onPress={() => navigation.navigate("drawer2")}
          style={
            selectedIndex === "drawer2"
              ? styles.uglyDrawerItemSelected
              : styles.uglyDrawerItem
          }
        >
          Drawer 2
        </Text>
        <Text
          onPress={() => navigation.navigate("drawer3")}
          style={
            selectedIndex === "drawer3"
              ? styles.uglyDrawerItemSelected
              : styles.uglyDrawerItem
          }
        >
          Drawer 3
        </Text>
        <Text onPress={this.logout} style={styles.uglyDrawerItem}>
          Log Out
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    paddingTop: 40,
    paddingHorizontal: 20
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E73536",
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: "#E73536",
    borderWidth: 1,
    textAlign: "center"
  },
  uglyDrawerItemSelected: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: "#E73536",
    borderWidth: 1,
    textAlign: "center"
  }
});
