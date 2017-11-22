import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import RepoPage from '../containers/RepoPage';

export default class Screen3 extends React.Component {
  static navigationOptions = {
    title: "Screen 3 in drawer 2"
  };
  render() {
    return (
      <RepoPage />
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
